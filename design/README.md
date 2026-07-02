# Requirements Forge — "The Story Studio" design system

**Project:** [requirements-forge](https://github.com/Kabelo-Theko/requirements-forge) · **Complete UI/UX overhaul, July 2026** (built at the recalibrated 2026 bar)

## The concept

A business analyst's real job is **shaping**: raw meeting noise goes in, clean
testable stories come out. The redesign sets the tool as a quiet **studio** —
porcelain-greige stock, one bold violet, chunky Young Serif headlines with real
character — where the artefacts (stakeholder cards, story blocks, G/W/T
criteria) feel like well-made objects on a workbench, and the **Truth Guard**
sits visibly in the middle of the room keeping everyone honest.

### Design DNA

| | |
|---|---|
| **Essence** | A shaping room for requirements. Craft outside, rigour inside. |
| **One-liner** | "A type foundry's studio manager hired to run requirements intake." |
| **Canvas** | Porcelain greige `#F2F0EB` (cooler and grayer than onboard-kit's cream or slo-watch's vanilla) · night-studio `#17141F` (violet-black) |
| **Accent** | Studio violet `#5F2EE0` / night `#A78BFF` — the one hot color (glcpatti-endorsed lilac family, no gradients). Verified green / unverified red are Truth-Guard state, never decoration. |
| **Type cast** | Young Serif (display — chunky, warm, Cooper-energy) · Onest (UI text) · Fragment Mono (story IDs, DoR scores, GIVEN/WHEN/THEN chips) |
| **Shape** | 12–26px radii, pill controls and pill nav on a quiet blurred canvas header |
| **Signature** | The G/W/T mono chips inside acceptance criteria; the Truth-Guard pill summary; DoR pills with rounded score bars; section labels that trail off into a hairline |
| **Motion** | Studio-calm: scroll-reveal on cards (kept from v1, retimed), spring hovers (−1/−2px lifts), one results rise |
| **Rejection list** | No terracotta/Playfair (v1 retired), no left-border cards, no dark nav band, no purple-blue gradients, no uniform density |

## Functional parity (zero loss — engine untouched)

Both v1 scripts ship intact: navigation contract, example transcript +
pre-baked offline output, AI extraction (`task:"requirements"`), the
deterministic DoR scorer, the Truth-Guard n-gram verifier, Markdown copy +
download, status/spinner states, error box, toast, console smoke tests, and
the scroll-reveal observer. Legacy token names the script's markup relies on
(`--terracotta*`, `--sand-*`) are aliased to studio tokens.

New: porcelain/night-studio themes (persisted), pill nav with theme toggle,
Young Serif hero, restyled stakeholder/story/criteria objects with mono G/W/T
chips, fixed heading hierarchy in Reference (h2s), 96% 4px-grid.

## Audit notes (justified flags)
- *"seamless / robust in copy"*: those words appear **as the product's own
  vague-word blocklist** in the DoR documentation — quoting a blocklist is the
  feature, not marketing copy.
- *Disabled button 3.49:1*: disabled controls are WCAG-exempt.
- *Two h1s*: one per `display:none`-toggled view; only one is ever in the
  accessibility tree.

## Files
`tokens.css` · `tailwind.config.js` · `components.md` · `accessibility.md` ·
`motion.md` · `grid.md` (icons: the UI is deliberately icon-light — moon/sun
toggle only; meaning is carried by type and the mono chips).

## Reaching every state
| State | How |
|---|---|
| Empty studio | Load the app |
| Offline example | "See an example" — full artefact set, no API |
| Real extraction / loading | Paste + "Shape the stories (AI)" — spinner status, then results rise |
| AI error | Run without the backend — designed error box |
| Truth Guard verified/unverified | The example includes both (unverified shows the warning row) |
| DoR high/mid/low | Example stories score high; edit a story in the transcript to degrade |
| Night studio | Moon toggle; persists |
