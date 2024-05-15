import { initRouter } from "./router";
import { initCustomButton } from "./components/button";
import { initCustomText } from "./components/custom-text";
import { customHeader } from "./components/header";

(function main() {
  initCustomButton();
  initCustomText();
  customHeader();

  initRouter(document.querySelector("#root"));
})();
