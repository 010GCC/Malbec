# Malbec — Progress Log

## Original Prompt (2026-05-16)

> The game has decent bones but needs major upgrades to the artwork and overall experience. Current art is trying to be something it is not. Redesign it with a consistent 32-bit sprite-art / retro pixel-art space theme. Monsters should read as alien, and the world/environment should feel alien too. Add a storyline that gives gameplay purpose: save the planet. Guns should become standard space-saga style guns, not generic earthly guns. Add cut-scene / cut-animation treatment during start and transition screens. Add a rocket pack and regeneration stations. Level design should be wide and tall; player sometimes needs to go up to move forward. Boss areas should feel intentionally designed, not an afterthought. Gameplay should be challenging but doable. Overall goal: fun, rewarding, beautiful.

## Direction

**Title:** MALBEC — *Last Light of Vinterra*
**Premise:** The verdant homeworld Vinterra has fallen under siege from the Hollow Swarm — a hive-mind of alien parasites devouring its biosphere. As the last Argo Ranger with a working rocket pack and prototype plasma rig, push through three blighted biomes, reach the Spire of the Brood-Queen, and reignite the planetary core.

## Worlds (3-zone arc, ends with boss)
1. **Crash Coast** — bioluminescent dunes, salvaged hull debris. Tutorial enemies (Crawlers).
2. **Spore Jungle** — towering alien fungi, acidic mists. Mid enemies (Floaters, Stingers).
3. **The Brood Spire** — obsidian arcology, vertical climb. Boss arena: Brood-Queen.

## Visual rules
- imageSmoothing disabled; chunky 4-6px logical pixels.
- Each world has tight palette (~6 colors) — cyan/orange accents allowed as plasma/energy hits.
- Parallax: deep-space starfield + nebula + foreground silhouettes.
- Procedurally drawn alien sprites: bug-like crawlers, jellyfish floaters, antennae spitters.

## Mechanics added
- **Rocket pack:** hold JUMP after apex to ignite. Fuel bar, refills on ground. Heat penalty if held too long.
- **Regen stations:** stationary sci-fi pods placed in levels — stand near to refill HP (cooldown per station).
- **Vertical traversal:** levels are taller; some progress gates require boosting up to upper platforms.
- **Cutscenes:** intro, biome transitions, boss warning, victory.

## Status (v1.13.0)
- [x] Branch `alien-space-overhaul` created
- [x] `progress.md` initialized
- [x] Full rewrite of `index.html` with cohesive 32-bit alien-space pixel-art theme
- [x] Three biomes (Crash Coast, Spore Jungle, Brood Spire) with distinct palettes
- [x] Procedurally drawn pixel sprites: Ranger (with rocket pack + visor),
      Crawler, Floater, Stinger, Brood-Queen boss, Regen Pod
- [x] Parallax starfield + alien hills + flora silhouettes; bioluminescent palette
- [x] Story-driven cutscenes (intro + two transitions) with custom canvas art
      (planet under shadow, jungle silhouette, brood spire with lightning)
- [x] Space-saga blasters: Plasma (∞), Pulse (rapid), Ion (rail, pierce), Swarm (homing).
      Muzzle flashes, glow, screen shake on heavy weapons.
- [x] Rocket pack: hold JUMP after leaving ground. Fuel + HEAT mechanics, locks
      at 80% heat until vented to 20%. Flame VFX. Audible sfx.
- [x] Regen stations (3 per zone): sci-fi pods with glow halo. Heal 35 HP,
      12s cooldown, visible countdown.
- [x] Wide+tall levels (≥6400 × ≥1800), random platform stacks, forced vertical
      traversal, weapon pickups, ammo, gem reward platforms. Lava pools.
- [x] Boss arena (Sector 3) with pillars, upper platforms, station. 3-phase
      boss with fan/spiral/aimed attacks. HP bar above boss.
- [x] Victory + Game-over screens. Restart from each.
- [x] Test hooks: `window.advanceTime(s)`, `window.render_game_to_text()`,
      `window.MALBEC` for runtime inspection.
- [x] Touch controls: LEFT/RIGHT/JET/FIRE/DASH.
- [x] Smoke-tested via Playwright: title→cutscene→playing→jet pack→firing→
      weapon switching→regen station — 0 console errors.

## Known limits / tradeoffs
- Levels are procedurally generated; rare unlucky seeds may put a weapon
  pickup on a platform that's tough to reach without jet. Mitigated by
  pickups also being placed on floor segments.
- Brood-Queen drawn with one head + animated wings rather than full
  multi-part assembly; intentional simplification for cohesive scale.
- Audio is procedural Web Audio only (no asset music).
- Mobile portrait warning shown only on coarse pointer + portrait combination.
