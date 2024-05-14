import { initPageWelcome } from "./pages/welcome";
import { initPageComparition } from "./pages/comparition";
import { initPanelPage } from "./pages/panel";
import { initMapsPage } from "./pages/maps";
import { initWeaponsPage } from "./pages/weapons";
import { initAgentsPage } from "./pages/agents";

const routes = [
  {
    path: /\/panel/,
    handler: initPanelPage,
  },
  {
    path: /\/welcome/,
    handler: initPageWelcome,
  },
  {
    path: /\/maps/,
    handler: initMapsPage,
  },
  {
    path: /\/agents/,
    handler: initAgentsPage,
  },
  {
    path: /\/weapons/,
    handler: initWeaponsPage,
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
