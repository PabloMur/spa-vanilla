import { initPageWelcome } from "./pages/welcome";
import { initMarplaPage } from "./pages/marpla";
import { initMontevideoPage } from "./pages/monte";
import { initTrenquePage } from "./pages/trenque";
import { initTestPage } from "./pages/test";

const routes = [
  {
    path: /^\/welcome$/,
    handler: initPageWelcome,
  },
  {
    path: /^\/marpla$/,
    handler: initMarplaPage,
  },
  {
    path: /^\/trenque$/,
    handler: initTrenquePage,
  },
  {
    path: /^\/monte$/,
    handler: initMontevideoPage,
  },
  {
    path: /^\/test$/,
    handler: initTestPage,
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

        // Limpiar el contenedor antes de agregar el nuevo contenido
        container.innerHTML = "";
        container.appendChild(el);
        return; // Detener la iteración una vez que se encuentra la ruta
      }
    }

    // Manejar el caso cuando no se encuentra ninguna ruta válida
    console.error("Ruta no encontrada:", route);
    container.innerHTML = `<p>Error: Página no encontrada.</p>`;
  }

  // Manejar la navegación inicial
  if (location.pathname === "/" || location.pathname === "/welcome") {
    goTo("/welcome");
  } else {
    handleRoute(location.pathname);
  }

  // Escuchar eventos de navegación
  window.addEventListener("popstate", () => {
    handleRoute(location.pathname);
  });
}
