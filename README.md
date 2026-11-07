# log

The website and the desktop window design for log, a Roblox script executor (Luau, runs inside the
client) and log External (a separate process that reads the game and draws an overlay). Wireframe
theme: hairline UI, a ruled grid behind the hero, sharp corners, Chivo and Chivo Mono on a putty ground
with one teal accent. The mark is a wire-drawn log (`assets/brand/log-mark.svg`).

## Website

`index.html`, built with the tasteskill 2.5 kit (MIT, `assets/LICENSE-tasteskill.txt`); `assets/` holds
only the kit files the page loads. Serve the folder over http (the scripts are ES modules, so
`file://` will not run them):

```bash
python3 -m http.server 8000      # then open http://localhost:8000
```

## Live site (GitHub Pages)

`.github/workflows/pages.yml` publishes `index.html` and `assets/` to
https://anmoltoo.github.io/Website/ on every push to the default branch that touches the site, or by
hand from the Actions tab (Deploy site to GitHub Pages, Run workflow). It needs Pages switched on once:
Settings, Pages, Build and deployment, Source: GitHub Actions.

## Desktop app (design only)

`app/` is an Electron window that draws the executor as the website shows it: the script list, the
editor with its console, the status bar, and an External view with the overlay settings beside its
preview. Nothing in it attaches to Roblox, runs, opens or saves anything; only the window dots and the
Executor / External switch respond. See `app/README.md`.

## Before going live

- `downloads/log-setup.exe`: the Free plan's download link points here; add the real installer.
- Prices ($0 and $6.49 a month), the version number (3.2.1), the 24-hour key, the 4-window Pro limit
  and the 144 fps overlay figure are placeholders to replace with the real ones.
- `sales@log.example` and `help@log.example` are placeholder addresses.
