//make a localstorage key, change errors to log them to the server automatically.
//log them to the server under that key name.

const loggingServerURL = "errorServer";

function initErrorLogging(appName, appVersion, os) {
  if (!os) {
    os = navigator.platform;
  }

  let id = localStorage.getItem("_key_logs");

  if (!id) {
    id = uuidv4();
    localStorage.setItem("_key_logs", id);
  }

  let browser = navigator.userAgent;

  window.onerror = function (message, url, line) {
    logToServer(id, message, url, line, os, browser, appVersion, appName);
  };
}

let errorLoggingServerCount = 0;

function logToServer(id, message, url, line, os, browser, version, app) {
  if (errorLoggingServerCount++ > 100) {
    return;
  }

  line = "" + line;

  let json = {
    id,
    message,
    url,
    line,
    os,
    browser,
    version,
    app,
  };

  fetch(loggingServerURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(json),
  });
}

function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}
