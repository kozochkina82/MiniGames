import { createElement } from "../../utils/dom.ts";
import { renderHeroSection } from "../home/sections/hero/hero-section.ts";

export function renderHomePage(): HTMLElement {
  return createElement("main", { className: "home-page" }, [
    renderHeroSection(),
  ]);
}
