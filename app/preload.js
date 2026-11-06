// the page gets the window controls and nothing else
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('logWindow', {
  minimize: () => ipcRenderer.send('window:minimize'),
  maximize: () => ipcRenderer.send('window:maximize'),
  close: () => ipcRenderer.send('window:close'),
  onState: (callback) => ipcRenderer.on('window:state', (_event, state) => callback(state)),
});
