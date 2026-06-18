import { a as applyTranslation } from "../assets/utils-BZMHhtPK.js";
function setupPlugin() {
  window.Asc.plugin.init = () => {
  };
  window.Asc.plugin.onTranslate = () => {
    applyTranslation("antidote-connction-error-heading", "Antidote Connection Error");
    applyTranslation("antidote-connection-error-message", "Please make sure that the port number is correct or that Antidote Connector is installed.");
  };
}
setupPlugin();
