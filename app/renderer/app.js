// log, design only. Two things move: the window dots (through the preload's window controls) and the
// Executor / External switch, which shows the other view. Every other control is drawn, not wired.
const controls = window.logWindow;

document.querySelectorAll('[data-window]').forEach((dot) => {
  dot.addEventListener('click', () => controls?.[dot.dataset.window]?.());
});

controls?.onState((state) => document.body.classList.toggle('is-maximized', state === 'maximized'));
document.querySelector('.titlebar').addEventListener('dblclick', (event) => {
  if (!event.target.closest('button')) controls?.maximize();
});

const tabs = [...document.querySelectorAll('[data-view-to]')];
function show(name) {
  document.body.dataset.view = name;
  tabs.forEach((tab) => tab.setAttribute('aria-selected', String(tab.dataset.viewTo === name)));
  document.querySelectorAll('[data-view-name]').forEach((view) => { view.hidden = view.dataset.viewName !== name; });
}
tabs.forEach((tab) => tab.addEventListener('click', () => show(tab.dataset.viewTo)));
