# log: desktop window (design only)

The log executor window, drawn to match the website's pictures of it. It is a design: the buttons,
script list, editor, console and overlay settings are static. The only live parts are the three window
dots (close, minimise, maximise) and the Executor / External switch in the title bar.

```bash
npm install
npm start            # opens the window
npm run dist         # a Windows installer with electron-builder (run it on Windows)
```

- `main.js` opens one frameless 1200 x 740 window (minimum 960 x 600) and blocks navigation and new
  windows; `preload.js` hands the page the window controls and nothing else (context isolation and
  the sandbox are on, Node is not in the page).
- `renderer/` holds the page: `index.html`, `styles.css`, `app.js`. Chivo and Chivo Mono are bundled
  from `@fontsource`, so the window needs no network.
- `build/icon.png` is the log mark; electron-builder turns it into the Windows icon.
