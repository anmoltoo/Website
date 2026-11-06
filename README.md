# Wyrex website

A one-page site for Wyrex, a Roblox script executor (Luau, runs inside the client) and Wyrex External
(a separate process that reads the game and draws an overlay). Wireframe theme: hairline UI, a ruled
grid behind the hero, sharp corners, Chivo and Chivo Mono on a putty ground with one teal accent.

Built with the tasteskill 2.5 kit (MIT, `assets/LICENSE-tasteskill.txt`); `assets/` holds only the kit
files the page loads.

## View it

Serve the folder over http (the scripts are ES modules, so `file://` will not run them):

```bash
npx serve .            # or: python3 -m http.server 8000
```

## Before going live

- `downloads/Wyrex-Setup.exe`: the Free plan's download link points here; add the real installer.
- Prices ($0 and $6.49 a month), the version number (3.2.1), the 24-hour key, the 4-window Pro limit
  and the 144 fps overlay figure are placeholders to replace with the real ones.
- `sales@wyrex.example` and `help@wyrex.example` are placeholder addresses.
- The brand name was searched (`names.json`); no Roblox tool or software by that exact name came up.
