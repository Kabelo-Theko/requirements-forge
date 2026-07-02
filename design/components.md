# Component library — Requirements Forge "The Story Studio"

Semantic tokens only (`tokens.css`; legacy `--terracotta*/--sand-*` aliases
keep the engine's emitted markup working). Type: Young Serif / Onest /
Fragment Mono.

## Nav (quiet studio header)
Blurred canvas bar (no dark band): Young Serif brand with violet accent word ·
pill view buttons (active = solid violet) · theme toggle. Hamburger retired
(two links fit every viewport; the element remains, hidden, for the engine's
contract).

## Hero
Mono kicker with violet dash → Young Serif headline (clamp 2.3–3.9rem) →
supporting lede with bold key nouns.

## Cards & inputs
Soft 20px-radius surface cards; borderless sunken textarea/select that gain a
violet ring on focus; labels sentence-case 600.

## Buttons (pill)
primary (violet, −1px hover lift, .97 press) / secondary (violet outline) /
ghost / sm. Disabled: sunken + muted (WCAG-exempt). Busy: engine swaps status
text + spinner.

## The artefact objects (engine-emitted, restyled)
- **Stakeholder cards**: name in Young Serif, role as violet caps, wants/owns
  rows; hover lifts 2px. No left-border tells.
- **Story blocks**: banded header (porcelain-mid) with mono `US-n` pill, the
  story sentence with violet *role/action* emphasis, and a mono DoR pill
  (high/mid/low tints). Body: rounded score bar + gap list (indigo tint) +
  criteria.
- **Acceptance criteria**: tinted rows (verified green-wash / unverified
  red-wash) with **mono GIVEN / WHEN / THEN chips**; unverified rows append the
  explicit warning line with a dot.
- **Truth Guard summary**: a pill banner — label + verified/unverified dot
  stats (mono) + scope note.
- **Simple lists / conflict log**: soft rows with violet em-dash bullets;
  conflicts as amber-wash rows with mono BETWEEN caps.
- **Error box**: red-wash card with explicit status text.

## Reference view
`h2` cards: INVEST grid (Young Serif letters at 2rem in violet, hover lift),
DoR checklist, Truth Guard methodology, artefact list.

## Toast
Ink pill, centered bottom, spring in/out (engine contract unchanged).
