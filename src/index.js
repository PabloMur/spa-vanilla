import { initRouter } from "./router";
import { initCustomButton } from "./components/button";
import { initCustomText } from "./components/custom-text";
import { customHeader } from "./components/Header";

(function main() {
  initCustomButton();
  initCustomText();
  customHeader();

  initRouter(document.querySelector("#root"));
})();
