# Malbec

A single-file browser action-platformer from **Solunip Labs** — explore procedurally flavored worlds, fight through side-scrolling stages, and face a boss encounter. Play at **[malbec.cc](https://malbec.cc)** (GitHub Pages + custom `CNAME`).

## Play

Open [malbec.cc](https://malbec.cc) or serve this repo locally.

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
- Add to Home Screen for a fuller mobile web-app feel.

## Viewport / sizing (v1.16.1)

- **Mobile:** `#game-window` fills the dynamic viewport — no 16:9 letterboxing.
- **Desktop (fine pointer, ≥900px):** capped 16:9 stage (max 1280px wide).
- `viewport-fit=cover` + `env(safe-area-inset-*)` for notched phones.
- `visualViewport` resize listeners keep the canvas matched when the mobile browser chrome shows/hides.
- Portrait orientation lock removed so phones can play upright.

## Files

| Path | Role |
|------|------|
| `index.html` | Bootstrap that loads a pinned full game blob and applies mobile patches |
| `mobile-fullscreen.css` | Reinforcing fullscreen / safe-area CSS |
| `mobile-fullscreen.js` | Extra resize / `visualViewport` hooks |
| `CNAME` | Custom domain → `malbec.cc` |
| `CLAUDE.md` | Versioning rules for contributors |
| `GAME DESIGN.pdf` | Design document |
| `index-prplx.html` | Alternate / earlier build |

> **Note:** The playable game logic (~135KB) is pinned from commit `1ea0da4` via jsDelivr (with raw.githubusercontent.com fallback) because GitHub Contents API / MCP uploads struggle with that blob size in one commit — same approach as Cave Rush. Offline: open the pinned `index.html` from that commit and apply the mobile CSS/JS from this branch, or copy the fully patched single file from a local checkout.

## Deploy

Hosted via **GitHub Pages**. The `CNAME` file maps the site to **malbec.cc**. After merging to `main`, Pages serves the updated bootstrap + overlays.

```bash
python3 -m http.server 8080
# open http://localhost:8080
```

On a phone, verify:

1. No page scroll / letterboxed black bars (game fills the screen).
2. Touch pad appears once you press **ENTER**.
3. Rotate device — canvas resizes without clipping HUD or controls.

## Versioning

Bump `VERSION` in the game source on every meaningful change (see `CLAUDE.md`). This mobile viewport work is **1.16.1**.

## Credits

Solunip Labs · Geoff Clark (010GCC / Sentinel Lexus)
