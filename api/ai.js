const ENDPOINT = "https://integrate.api.nvidia.com/v1/chat/completions";
const MODELS = {
  flash: {
    id: "deepseek-ai/deepseek-v4-flash",
    keys: ["NVIDIA_API_KEY_FLASH", "NVIDIA_API_KEY"],
    extra: { chat_template_kwargs: { thinking: false } }
  },
  pro: {
    id: "deepseek-ai/deepseek-v4-pro",
    keys: ["NVIDIA_API_KEY_PRO", "NVIDIA_API_KEY"],
    extra: { chat_template_kwargs: { thinking: false } }
  },
  minimax: {
    id: "minimaxai/minimax-m3",
    keys: ["NVIDIA_API_KEY_MINIMAX", "NVIDIA_API_KEY"],
    extra: {}
  }
};

const cfgFor = (m) => MODELS[m] || MODELS.flash;
const keyFor = (c) => {
  for (const e of c.keys) {
    if (process.env[e]) return process.env[e];
  }
  return null;
};

async function readBody(req) {
  if (req.body && typeof req.body === "object") return req.body;
  if (req.body && typeof req.body === "string") {
    try { return JSON.parse(req.body); } catch { return {}; }
  }
  return new Promise((resolve) => {
    let data = "";
    req.on("data", (chunk) => { data += chunk; });
    req.on("end", () => {
      try { resolve(JSON.parse(data)); } catch { resolve({}); }
    });
  });
}

function jsonFrom(t) {
  const start = t.indexOf("{");
  const end = t.lastIndexOf("}");
  if (start === -1 || end === -1) throw new Error("No JSON block found");
  return JSON.parse(t.slice(start, end + 1));
}

async function callModel(cfg, key, messages, max_tokens, temperature) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 55000);
  try {
    const resp = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${key}`
      },
      body: JSON.stringify({
        model: cfg.id,
        messages,
        max_tokens,
        temperature,
        ...cfg.extra
      }),
      signal: controller.signal
    });
    clearTimeout(timer);
    if (!resp.ok) {
      const errText = await resp.text();
      return { error: `Upstream ${resp.status}: ${errText.slice(0, 200)}` };
    }
    const data = await resp.json();
    const text = data?.choices?.[0]?.message?.content || "";
    return { text };
  } catch (err) {
    clearTimeout(timer);
    return { error: err.message };
  }
}

const REQUIREMENTS_SYSTEM = `You are a senior business analyst. Read the meeting transcript and return ONLY compact JSON: {"stakeholders":[{"name":"","role":"","wants":"","owns":""}],"stories":[{"id":"US-1","role":"","action":"","value":"","acceptance":[{"given":"","when":"","then":""}]}],"out_of_scope":[""],"open_questions":[""],"conflicts":[{"between":"","issue":""}]}. Base everything ONLY on the transcript. Do not invent requirements, names, or systems that are not present. Keep acceptance criteria close to the wording used in the transcript. No fluff, no em dashes.`;

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const body = await readBody(req);
  const cfg = cfgFor(body.model);
  const key = keyFor(cfg);

  if (!key) {
    return res.status(503).json({ error: "No API key configured for this model" });
  }

  if (body.task === "requirements") {
    const transcript = (body.transcript || "").slice(0, 6000);
    if (!transcript.trim()) {
      return res.status(400).json({ error: "transcript is required" });
    }

    const messages = [
      { role: "system", content: REQUIREMENTS_SYSTEM },
      { role: "user", content: `Transcript:\n${transcript}` }
    ];

    const result = await callModel(cfg, key, messages, 1200, 0.3);

    if (result.error) {
      return res.status(502).json({ error: result.error });
    }

    let parsed;
    try {
      parsed = jsonFrom(result.text);
    } catch (err) {
      return res.status(502).json({ error: "Failed to parse AI response", raw: result.text.slice(0, 500) });
    }

    return res.status(200).json({ ...parsed, model: cfg.id });
  }

  return res.status(400).json({ error: "Unknown task" });
};
