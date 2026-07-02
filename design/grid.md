# Responsive grid & layout — Requirements Forge "The Story Studio"

## Breakpoints
| Width | Changes |
|---|---|
| ≤ 500px | form row stacks; results header stacks; export buttons go full-width |
| 920px | `--page-max` — single studio column |

Checked at 360 / 768 / 1280.

## Structure
Single-column studio bench:
```
nav (blurred canvas): brand · [The Studio | Reference] · theme
hero: kicker → Young Serif H1 → lede
input card: transcript → model → toolbar → status
results: header + exports
  → stakeholder grid (auto-fill ≥260px)
  → Truth Guard pill
  → story blocks (full width)
  → out of scope / open questions / conflicts
reference: h2 cards, INVEST grid (auto-fill ≥200px)
```

## Rhythm
4px grid (96% audited). Cards 24px interior; section blocks 40px apart with
trailing-hairline labels; hero 40px top / 32px bottom. Radii: 12 (rows) /
20 (cards) / 26 / pill (controls, badges, Truth-Guard banner).
