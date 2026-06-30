**Built for:** Business Analyst · Product · Delivery

# Requirements Forge

Paste a messy meeting transcript, Teams notes, or email thread and get clean, structured BA artefacts in seconds. Requirements Forge is a self-contained portfolio tool that combines AI language extraction with deterministic, browser-side scoring so every output can be understood, explained, and defended.

## What it produces

- **Stakeholder map:** every named participant with their role, what they want, and what they own or are blocked by.
- **User stories (INVEST format):** "As a [role], I want [action], so that [value]" with a short id (US-1, US-2...).
- **Acceptance criteria:** Given / When / Then per story, each individually Truth-Guard-verified against the source text.
- **Out of scope list:** items explicitly ruled out or deferred during the meeting.
- **Open questions / parking lot:** decisions or unknowns that must be resolved before work can start.
- **Conflict log:** where two stakeholders directly contradict each other, named and described.

## Deterministic INVEST / Definition of Ready scoring

Every user story receives a DoR score (0-100) computed entirely in your browser with no AI involvement. The scorer runs explicit checks against INVEST criteria:

- Role present (15 pts)
- Action present (15 pts)
- Value present (15 pts)
- Value is specific, not a generic placeholder (15 pts)
- Action is a single verb phrase, not two stories in one (15 pts)
- No vague words such as: fast, robust, user-friendly, seamless, asap, intuitive (10 pts)
- At least one acceptance criterion exists, making the story testable (15 pts)

Gaps are listed individually so you can fix them before the story enters a sprint.

## Truth Guard

Every acceptance criterion is checked against the original transcript text. The guard normalises both strings (lowercase, strip punctuation, collapse whitespace) and then searches for any run of 4 or more consecutive words from the criterion anywhere in the transcript. If found: verified (green). If not found: the criterion is flagged "unverified: not found in transcript" with a red warning. This makes hallucinated or over-inferred requirements immediately visible. A summary count of verified vs unverified items appears above the story list.

## Model toggle

Choose between three NVIDIA-hosted models at extract time:

| Option | Model |
|---|---|
| Flash (fast) | deepseek-ai/deepseek-v4-flash |
| Pro (quality) | deepseek-ai/deepseek-v4-pro |
| MiniMax M3 | minimaxai/minimax-m3 |

All models are instructed to base output only on the transcript and to avoid inventing requirements, names, or systems not present in the source text. The Truth Guard provides a second line of defence.

## Offline use

Click "See an example" to render a complete set of pre-baked artefacts from a realistic retail (POS plus click-and-collect) transcript with no API call. The DoR scorer, Truth Guard, and export features all work offline.

## Running locally

```
NVIDIA_API_KEY=your_key npx vercel dev
```

Open http://localhost:3000.

## Deploying to Vercel

```
vercel --prod
```

Set the following environment variable in the Vercel dashboard or CLI:

- `NVIDIA_API_KEY` (required for all models)
- `NVIDIA_API_KEY_FLASH` (optional, overrides for flash model)
- `NVIDIA_API_KEY_PRO` (optional, overrides for pro model)
- `NVIDIA_API_KEY_MINIMAX` (optional, overrides for minimax model)

## Data handling

Transcript text is sent to the NVIDIA API only when you click "Extract requirements (AI)". Nothing is stored server-side. The serverless function reads the transcript, calls the model, and returns the JSON response. All scoring and verification runs in your browser.
