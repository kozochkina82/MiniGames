import { createElement } from "../../utils/dom.ts";

export function renderHomePage(): HTMLElement {
  return createElement("main", { className: "home-page" }, [
    createElement("h1", {
      className: "home-page__title",
      textContent: "Добро пожаловать",
    }),
  ]);
}
