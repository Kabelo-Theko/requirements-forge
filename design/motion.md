# Motion spec — Requirements Forge "The Story Studio"

Temperament: **studio-calm** — objects settle onto the bench.

## Tokens
```css
--m-micro:130ms; --m-small:220ms; --m-large:320ms; --m-page:420ms;
--ease:cubic-bezier(.2,0,0,1);
--spring:cubic-bezier(.34,1.26,.5,1);
--emph:cubic-bezier(.05,.7,.1,1);
```

## Choreography
| Interaction | Animation | Spec |
|---|---|---|
| Scroll reveal (hero/cards/ref-cards) | fade + 18px rise | 600ms emph, IntersectionObserver (v1 mechanism kept, retimed); reduced-motion → instant |
| Results appear | container rise | 420ms emph, once |
| DoR bars | width fill | 500ms emph, once |
| Button hover / press | −1px lift / .97 | 130ms spring |
| Card hover (stakeholder, INVEST) | −2px lift | 130ms spring |
| Status spinner | rotation | loop during AI call only |
| Toast | spring up / fade down | 320ms |
| Theme swap | background transition | 320ms |

## Reduced motion
v1's guard preserved and extended (reveal targets render instantly); global
collapse of animation/transition durations.
