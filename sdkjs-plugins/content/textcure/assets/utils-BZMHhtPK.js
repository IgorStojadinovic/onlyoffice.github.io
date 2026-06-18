(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) return;
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) processPreload(link);
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") continue;
      for (const node of mutation.addedNodes) if (node.tagName === "LINK" && node.rel === "modulepreload") processPreload(node);
    }
  }).observe(document, {
    childList: true,
    subtree: true
  });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials") fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep) return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
let antidotePort;
let updateDelayMS;
let forceSetPort;
function loadSettings() {
  const _antidotePort = window.localStorage.getItem("ANTIDOTE_PORT");
  antidotePort = _antidotePort ? Number(_antidotePort) : 49152;
  const _updateDelayMS = window.localStorage.getItem("UPDATE_DELAY_MS");
  updateDelayMS = _updateDelayMS ? Number(_updateDelayMS) : 200;
  const _forceSetPort = window.localStorage.getItem("FORCE_SET_PORT");
  forceSetPort = _forceSetPort === "true" ? true : false;
}
function getAntidotePort() {
  if (antidotePort) return antidotePort;
  loadSettings();
  return antidotePort;
}
function setAntidotePort(port) {
  antidotePort = port;
  window.localStorage.setItem("ANTIDOTE_PORT", port.toString());
}
function getUpdateDelayMS() {
  if (updateDelayMS) return updateDelayMS;
  loadSettings();
  return updateDelayMS;
}
function setUpdateDelayMS(delay) {
  updateDelayMS = delay;
  window.localStorage.setItem("UPDATE_DELAY_MS", delay.toString());
}
function getForceSetPort() {
  if (forceSetPort) return forceSetPort;
  loadSettings();
  return forceSetPort;
}
function setForceSetPort(force) {
  forceSetPort = force;
  window.localStorage.setItem("FORCE_SET_PORT", force.toString());
}
const Settings = {
  getAntidotePort,
  setAntidotePort,
  getUpdateDelayMS,
  setUpdateDelayMS,
  getForceSetPort,
  setForceSetPort
};
function setupPlugin() {
  let inputAntidotePort;
  let inputForceSetPort;
  let inputUpdateDelayMS;
  window.Asc.plugin.init = function() {
    inputAntidotePort = document.getElementById(
      "antidotePort"
    );
    inputUpdateDelayMS = document.getElementById(
      "updateDelayMS"
    );
    inputForceSetPort = document.getElementById(
      "forceSetPort"
    );
    if (inputAntidotePort) {
      inputAntidotePort.value = Settings.getAntidotePort().toString();
    }
    if (inputUpdateDelayMS) {
      inputUpdateDelayMS.value = Settings.getUpdateDelayMS().toString();
    }
    if (inputForceSetPort) {
      inputForceSetPort.checked = Settings.getForceSetPort();
    }
  };
  window.Asc.plugin.button = (_id, _windowId) => {
    const _antidotePort = Number(inputAntidotePort.value);
    const _updateDelayMS = Number(inputUpdateDelayMS.value);
    const _forceSetPort = inputForceSetPort.checked;
    Settings.setAntidotePort(_antidotePort);
    Settings.setUpdateDelayMS(_updateDelayMS);
    Settings.setForceSetPort(_forceSetPort);
    window.Asc.plugin.executeCommand("close", "");
  };
  window.Asc.plugin.onTranslate = () => {
    applyTranslation("lblAntidotePort", "Websocket Port:");
    applyTranslation("lblUpdateDelayMS", "Update Delay (ms):");
    applyTranslation("lblForceSetPort", "Disable Automatic Port Detection");
  };
}
async function getWebSocketPort() {
  const portMiminum = 49152;
  const numberOfValidPorts = 12;
  let portWebSocket = null;
  const testWebSocketPort = (port, initPort) => {
    return new Promise((resolve) => {
      const currentPort = initPort ?? port;
      let ws = new WebSocket(`ws://localhost:${currentPort}`);
      ws.addEventListener("open", (_event) => {
        portWebSocket = currentPort;
        resolve(true);
      });
      ws.addEventListener("error", (_event) => {
        if (port <= portMiminum + numberOfValidPorts) {
          testWebSocketPort(initPort ? port : port + 1).then(resolve);
        } else {
          resolve(false);
        }
      });
    });
  };
  const hasWebSocketPort = await testWebSocketPort(
    portMiminum,
    Settings.getAntidotePort()
  );
  if (!hasWebSocketPort || portWebSocket === null)
    throw new Error("No WebSocket port found");
  Settings.setAntidotePort(portWebSocket);
  return portWebSocket;
}
function applyTranslation(id, text) {
  const element = document.getElementById(id);
  if (element) {
    element.innerHTML = window.Asc.plugin.tr(text);
  }
}
function getFullUrl(name) {
  const location = window.location;
  const start = location.pathname.lastIndexOf("/") + 1;
  const file = location.pathname.slice(start);
  return location.href.replace(file, name);
}
function callCommand(func, isClose = false, isCalc = true) {
  return new Promise((resolve) => {
    window.Asc.plugin.callCommand(func, isClose, isCalc, (res) => {
      resolve(res);
    });
  });
}
function executeMethod(name, params) {
  return new Promise((resolve) => {
    window.Asc.plugin.executeMethod(name, params, (res) => {
      resolve(res);
    });
  });
}
async function getDocumentTitle() {
  switch (window.Asc.plugin.info.editorType) {
    case "word":
      return callCommand(
        () => {
          const oDocument = Api.GetDocument();
          const oDocumentInfo = oDocument.GetDocumentInfo();
          return oDocumentInfo.Title;
        },
        false,
        false
      );
    case "slide":
      return callCommand(
        () => {
          const oPresentation = Api.GetPresentation();
          const oDocumentInfo = oPresentation.GetDocumentInfo();
          const title = oDocumentInfo.Title;
          return title;
        },
        false,
        false
      );
    case "cell":
      return callCommand(
        () => {
          const oDocumentInfo = Api.GetDocumentInfo();
          const title = oDocumentInfo.Title;
          return title;
        },
        false,
        false
      );
  }
  throw new Error("Unsupported editor type");
}
export {
  Settings as S,
  applyTranslation as a,
  getDocumentTitle as b,
  callCommand as c,
  getWebSocketPort as d,
  executeMethod as e,
  getFullUrl as g,
  setupPlugin as s
};
