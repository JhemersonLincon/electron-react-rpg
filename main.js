const { app, BrowserWindow } = require("electron");

const width = 300;
const createWindow = () => {
  const win = new BrowserWindow({
    width,
    webPreferences: {
      nodeIntegration:true
    },
    frame:false,
    transparent:true,
    alwaysOnTop:true,
    resizable:false,
    movable:true,
  })

  win.loadURL('http://localhost:3000');
  win.setPosition(1050, 100)
}


app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})