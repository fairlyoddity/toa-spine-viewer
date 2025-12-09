// main.js
const { app, BrowserWindow } = require('electron');
const path = require('path');

app.commandLine.appendSwitch('disable-features', 'VaapiVideoDecoder');

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    resizable: true,
    webPreferences: {
      nodeIntegration: true,    // ✅ allow fs/path in renderer
      contextIsolation: false
    }
  });

  win.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

