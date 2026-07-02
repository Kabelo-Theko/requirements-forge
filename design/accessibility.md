# Accessibility sheet — Requirements Forge "The Story Studio"

Target WCAG 2.2 AA. Implemented in `docs/index.html`.

## Measured contrast (WCAG 2.x)

### Porcelain (light)
| Pair | Ratio | Verdict |
|---|---|---|
| ink #211E28 / porcelain #F2F0EB | 14.4:1 | AAA |
| ink-light #555062 / card #FCFBF8 | 7.49:1 | AAA |
| violet text #4F26C4 / porcelain | 7.66:1 | AAA |
| on-accent #F5F1FF / violet #5F2EE0 | 6.4:1 | AA+ |
| verified #2A7048 / porcelain | 5.25:1 | AA |
| unverified #B0342A / porcelain | 5.47:1 | AA |
| warning #7A5600 / card | 6.42:1 | AA+ |
| gap #3F3A8C / gap-bg #ECEAF8 | 8.06:1 | AAA |

### Night studio (dark)
| Pair | Ratio | Verdict |
|---|---|---|
| ink #EEEAF4 / canvas #17141F | 15.3:1 | AAA |
| ink-light #B3ABC6 / card #211D2C | 7.49:1 | AAA |
| violet #A78BFF / canvas | 6.73:1 | AA+ |
| on-accent #1D1136 / violet | 6.56:1 | AA+ |
| verified / unverified / warning on canvas | 9.37 / 7.46 / 9.39:1 | AAA |

Tinted state backgrounds (verified-bg etc.) are 9–12% alpha washes; their text
uses the solid state colors above.

## Structure & ARIA (v1 contracts preserved, upgraded)
- Nav buttons keep `aria-current="page"`; theme toggle `aria-pressed` +
  dynamic label.
- Status area `aria-live="polite" aria-atomic` (unchanged); results container
  `aria-live="polite"`; toast `role="alert"`.
- Unverified criteria keep their `role="alert"` warning rows and explicit
  wording — color is never the only signal (tint + dot + text).
- DoR communicated as score text in the badge + bar + listed gaps.
- Reference headings corrected to a proper h1 → h2 hierarchy.
- Two h1s exist in source but only one view is rendered at a time
  (`display:none` removes the other from the accessibility tree).

## Keyboard
Skip-free short page: nav (Studio / Reference / theme) → textarea → model →
Shape the stories → See an example → Load example transcript → results
(export buttons first, then document order). All interactive elements have
`:focus-visible` rings (violet, two-layer).

## Motion
Scroll-reveal cards (0.6s, emphasized bezier) collapse under
`prefers-reduced-motion` (v1 guard kept); the only loop is the status spinner
during AI calls; hovers are −1/−2px spring lifts.

## Targets
Buttons ≥ 44px; nav pills ≥ 36px; select 44px. Fluid to 360px; zoom never
disabled.
