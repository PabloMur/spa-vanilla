import { initPageWelcome } from "./pages/welcome";
import { initPageInstructions } from "./pages/instructions";
import { initPageChoose } from "./pages/choose";
import { initPageResult } from "./pages/result";
import { initPageComparition } from "./pages/comparition";

const routes = [
  {
    path: /\/desafio-m5/,
    handler: initPageWelcome,
  },
  {
    path: /\/welcome/,
    handler: initPageWelcome,
  },
  {
    path: /\/instructions/,
    handler: initPageInstructions,
  },
  {
    path: /\/choose/,
    handler: initPageChoose,
  },
  {
    path: /\/comparition/,
    handler: initPageComparition,
  },
  {
    path: /\/result/,
    handler: initPageResult,
  },
];

export function initRouter(container) {
  function goTo(path) {
    history.pushState({}, "", path);
    handleRoute(path);
  }

  function handleRoute(route) {
    for (const r of routes) {
      if (r.path.test(route)) {
        const el = r.handler({ goTo: goTo });

        if (container.firstChild) {
          container.firstChild.remove();
        }
        container.appendChild(el);
      }
    }
  }

  if (location.pathname == "/") {
    goTo("/welcome");
  } else {
    handleRoute(location.pathname);
  }

  window.addEventListener("popstate", () => {
    handleRoute(location.pathname);
  });
}
