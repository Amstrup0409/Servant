const { app, BrowserWindow } = require('electron') 
const electron = require("electron")

const WIDTH = 750


require('electron-reload')(__dirname, {
  // Note that the path to electron may vary according to the main file
  electron: require(`${__dirname}/node_modules/electron`)
});

function createWindow() {
  let display = electron.screen.getPrimaryDisplay();
  let width = display.bounds.width;
  // Create the browser window.
  const win = new BrowserWindow({
    width: WIDTH,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.loadFile('index.html')
  // Open the DevTools.
  win.webContents.openDevTools({ mode: 'detach' });

  win.setBackgroundColor("#204240")
  win.setPosition(width-WIDTH+10, 0, false)
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow);


// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bars to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
