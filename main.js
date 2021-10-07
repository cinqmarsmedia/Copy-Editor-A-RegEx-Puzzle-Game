const { app, BrowserWindow, screen, Menu, ipcMain } = require("electron");
const path = require("path");
// const { initAndCheckReset } = require("./operation-timer");

function createWindow() {
  // let reset = initAndCheckReset();
  let { width, height } = screen.getPrimaryDisplay().workAreaSize;
  // width = Math.round(0.8 * width);
  // height = Math.round(0.8 * height);



  const win = new BrowserWindow({
    width: Math.round(0.8*width),
    height: Math.round(0.8*height),
    frame: false,
    transparent: false,
    vibrancy:"menu",
    backgroundColor: '#1d1d1d',
    fullscreen: false,
    webPreferences: {
      nodeIntegration: false,
      sandbox: true,
      contextIsolation: true,
      enableRemoteModule: false,
      preload: path.join(__dirname, "preload.js"),
    },
  });
  win.setFullScreenable(true);
  win.setFullScreen(true);
  const isMac = process.platform === "darwin";
  const template = [
    // { role: 'appMenu' }
    ...(isMac
      ? [
          {
            label: app.name,
            submenu: [
              { role: "about" },
              { type: "separator" },
              { role: "services" },
              { type: "separator" },
              { role: "hide" },
              { role: "hideothers" },
              { role: "unhide" },
              { type: "separator" },
              { role: "quit" },
            ],
          },
        ]
      : []),
    // { role: 'fileMenu' }
    {
      label: "File",
      submenu: [isMac ? { role: "close" } : { role: "quit" }],
    },
    // { role: 'editMenu' }
    {
      label: "Edit",
      submenu: [
        { role: "undo" },
        { role: "redo" },
        { type: "separator" },
        { role: "cut" },
        { role: "copy" },
        { role: "paste" },
        ...(isMac
          ? [{ role: "delete" }, { role: "selectAll" }]
          : [{ role: "delete" }, { type: "separator" }, { role: "selectAll" }]),
      ],
    },
    // { role: 'viewMenu' }
    {
      label: "View",
      submenu: [{ role: "togglefullscreen" }],
    },
    // { role: 'windowMenu' }
    {
      label: "Window",
      submenu: [
        { role: "minimize" },
        ...(isMac
          ? [
              { type: "separator" },
              { role: "front" },
              { type: "separator" },
              { role: "window" },
            ]
          : [{ role: "close" }]),
      ],
    },
    {
      role: "help",
      submenu: [
        {
          label: "Learn More",
          click: async () => {
            const { shell } = require("electron");
            await shell.openExternal("https://cinqmarsmedia.com");
          },
        },
      ],
    },
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);

  ipcMain.on("FULLSCREEN", () => {
    // dialog.showMessageBox(null, win.isFullScreen());
    win.setFullScreen(!win.isFullScreen());
  });

  ipcMain.on("QUIT", () => {
    app.quit();
  });

  win.setMenuBarVisibility(false);
  win.setMenu(null);
  // win.webContents.openDevTools();
  // if (reset) {
  //   win.loadFile("www/index.html", { hash: "reset" });
  // } else {
  win.loadFile("www/index.html");

  // }
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

//(.*)+a(.*)a(.*)a
