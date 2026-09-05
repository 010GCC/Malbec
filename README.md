# Malbec

A single-file browser action-platformer from **Solunip Labs** — explore procedurally flavored worlds, fight through side-scrolling stages, and face a boss encounter. Play at **[malbec.cc](https://malbec.cc)** (GitHub Pages + custom `CNAME`).

Built as one self-contained `index.html` (canvas + HUD + touch pad). Design notes live in `GAME DESIGN.pdf` and `CLAUDE.md`.

## Play

Open [malbec.cc](https://malbec.cc) or serve `index.html` locally (any static server / double-click works for a quick look).

### Desktop

| Action | Keys |
|--------|------|
| Move | `A`/`D` or ←/→ |
| Jump | `Space` or `W` |
| Attack | `J` or `Z` |
| Dash | `K` or `Shift` |
| Evade | `L` or `X` |
| Enter doors / look up | ↑ |

Click **ENTER** to start (requests fullscreen when available).

### Mobile

- The game **fills the viewport** (`100dvh` / `100vw`), including safe areas (notch / home indicator).
- Portrait and landscape are both playable; landscape gives a wider view.
- On-screen touch pad: D-pad (move) + **JUMP** / **ATK** / **DSH** / **EVD**.
- Add to Home Screen for a fuller mobile web-app feel (`apple-mobile-web-app-capable`).

## Files

| Path | Role |
|------|------|
| `index.html` | Main game (current) |
| `index-prplx.html` | Alternate / earlier build |
| `CNAME` | Custom domain → `malbec.cc` |
| `CLAUDE.md` | Versioning rules for contributors |
| `GAME DESIGN.pdf` | Design document |

## Deploy

Hosted via **GitHub Pages** from this repo. The `CNAME` file maps the Pages site to **malbec.cc**. After merging to `main`, Pages serves the updated `index.html`.

Local smoke test:

```bash
# Python
python3 -m http.server 8080
# then open http://localhost:8080
```

On a phone, use your LAN IP or the live domain and verify:

1. No page scroll / letterboxed black bars (game fills the screen).
2. Touch pad appears once you press **ENTER**.
3. Rotate device — canvas resizes without clipping HUD or controls.

## Versioning

Bump `VERSION` in `index.html` on every commit (see `CLAUDE.md`). Current line of work targets mobile viewport / fullscreen polish (`1.16.x`).

## Credits

Solunip Labs · Geoff Clark (010GCC / Sentinel Lexus)
