import { createElement } from "../../utils/dom.ts";

export function renderFooter(): HTMLElement {
  const logo = createElement("span", {
    className: "footer__logo",
    textContent: "MiniGames",
  });

  const nav = createElement("nav", { className: "footer__nav" }, [
    createElement("a", {
      className: "footer__text",
      textContent: "2026 MiniGames. All rights reserved",
      attrs: { href: "#" },
    }),
    createElement("a", {
      className: "footer__link",
      textContent: "RSSchool",
      attrs: { href: "#" },
    }),
  ]);

  return createElement("footer", { className: "footer" }, [logo, nav]);
}
