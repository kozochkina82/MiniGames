import { createElement } from "../../utils/dom.ts";

export function renderHeader(): HTMLElement {
  const logo = createElement("span", {
    className: "header__logo",
    textContent: "MiniGames",
  });

  const nav = createElement("nav", { className: "header__nav" }, [
    createElement("a", {
      className: "header__link",
      textContent: "Главная",
      attrs: { href: "#" },
    }),
  ]);

  return createElement("header", { className: "header" }, [logo, nav]);
}
