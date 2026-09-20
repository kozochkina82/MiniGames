import { createElement } from "../../utils/dom.ts";

export function renderHeader(): HTMLElement {
  const logo = createElement("span", {
    className: "header__logo",
    textContent: "MiniGames",
  });

  const nav = createElement("nav", { className: "header__nav" }, [
    createElement("a", {
      className: "header__link",
      textContent: "Home",
      attrs: { href: "#" },
    }),
    createElement("a", {
      className: "header__link",
      textContent: "Library",
      attrs: { href: "#" },
    }),
    createElement("a", {
      className: "header__link",
      textContent: "Tournaments",
      attrs: { href: "#" },
    }),
    createElement("a", {
      className: "header__link",
      textContent: "Community",
      attrs: { href: "#" },
    }),
  ]);

  return createElement("header", { className: "header" }, [logo, nav]);
}
