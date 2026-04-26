# Malbec — Claude Instructions

## Versioning Rule
**Bump `VERSION` in `index.html` on every commit.** No exceptions.

The constant is near the top of the `<script>` block:
```js
const VERSION = '1.5.0';
```

### When to bump what
| Change | Example | Bump |
|--------|---------|------|
| New system / significant feature | boss assembly, gun system | MINOR (1.5 → 1.6) |
| Fix, balance tweak, small addition | spike damage, remove gun | PATCH (1.5.0 → 1.5.1) |
| Complete overhaul / milestone | public release | MAJOR (1.x → 2.0) |

### Current version: `1.5.1`
Reconstructed history:
- 1.0 — initial upload
- 1.1 — boss cinematic, heart prestige, door fix, world transition
- 1.2 — gun system (railgun, homing, spread, bounce)
- 1.3 — mobile touch controls + fixes
- 1.4 — dim room redesign, title animation, boss syntax fix, laser/lava removal
- 1.5 — bounce guns removed, spike damage 2%/s, dim room boss assembly + flee, boss HP/flash/pips redesign
