const { ipcMain, dialog, app, BrowserWindow } = require("electron");

let timeouts = {};
let win = null;
let freeze = false;

module.exports = {
  initAndCheckReset: () => {
    ipcMain.on(
      "OPERATION_TIMER_START",
      (event, name, timeoutTime, dialogMessage, resetMessage) => {
        if (freeze) {
          return;
        }
        //no need to start an existing timer...
        if (timeouts[name]) {
          return;
        }

        timeouts[name] = setTimeout(() => {
          // let win = BrowserWindow.getFocusedWindow();
          //  win.webContents.on("render-process-gone", (event, details) => {
          //   if (details.reason == "killed") {
          //     win.webContents.loadFile("www/index.html", { hash: "reset" });
          //   }
          // });
          // win.webContents.forcefullyCrashRenderer();
          // win = new BrowserWindow({
            
          // });
          // win.webContents.loadFile("www/index.html", {hash: "reset"});
          console.log("starting the app reset process...");
          freeze = true;
          if (dialogMessage) {
            dialog.showErrorBox(dialogMessage, "");
          }
          app.relaunch({
            args: process.argv.slice(1).concat(`reset=${resetMessage || ""}`),
          });
          app.exit();
        }, timeoutTime);
      }
    );
    ipcMain.on("OPERATION_TIMER_STOP", (event, name) => {
      if (freeze) {
        return;
      }
      if (win) {
        win.destroy();
        win = null;
      }
      if (timeouts[name]) {
        clearTimeout(timeouts[name]);
        timeouts[name] = null;
      }
    });

    const checkForReset = () => {
      let reset = false;
      let resetMessage, val;
      if ((val = process.argv.find((val) => val.slice(0, 5) == "reset"))) {
        if (val.length > 6) {
          resetMessage = val.slice(6);
        }
        reset = true;
        if (resetMessage && resetMessage.length && resetMessage.length > 0) {
          let win = new BrowserWindow({
            show: true
          })
          dialog
            .showMessageBox(win, {
              title: "Operation timed out",
              type: "warning",
              message: resetMessage,
            }).then(()=>{
              win.close();
            });
  
        }
      }
      return reset;
    };

    return checkForReset();
  },
};
