import { createElement } from "../../utils/dom.ts";

export function renderFooter(): HTMLElement {
  const logo = createElement("span", {
    className: "footer__logo",
    textContent: "MiniGames",
  });

  const nav = createElement("nav", { className: "footer__nav" }, [
    createElement("a", {
      className: "footer__link",
      textContent: "Главная",
      attrs: { href: "#" },
    }),
  ]);

  return createElement("footer", { className: "footer" }, [logo, nav]);
}
