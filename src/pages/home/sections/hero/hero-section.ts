import { createElement } from "../../../../utils/dom";
import "./hero-section.scss";

export function renderHeroSection(): HTMLElement {
  const content = createElement("div", { className: "hero__content" }, [
    createElement("h1", {
      className: "hero__title",
      textContent: "Take a short break and have fun!",
    }),
    createElement("p", {
      className: "hero__description",
      textContent:
        "Hundreds of curated casual mini-games right in your web browser.",
    }),
  ]);

  return createElement("section", { className: "hero" }, [content]);
}
