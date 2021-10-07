// const { contextBridge, ipcRenderer } = require('electron')

// const timeouts = {};

// contextBridge.exposeInMainWorld(
//   'electron',
//   {
//     startOperationTimer: (name, timeoutTime, dialog, resetDialog) => ipcRenderer.send("OPERATION_TIMER_START", name, timeoutTime, dialog, resetDialog),//timeouts[name]=setTimeout(()=>{ipcRenderer.send('OPERATION_TIMED_OUT', name, dialog)}, timeoutTime),
//     stopOperationTimer: name=>ipcRenderer.send("OPERATION_TIMER_STOP", name)
//   }
// )

const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electron", {
  quit: () => {
    ipcRenderer.send("QUIT");
  },
  fullscreen: () => {
    ipcRenderer.send("FULLSCREEN");
  },
});
