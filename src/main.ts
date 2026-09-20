import { createElement } from "../src/utils/dom.ts";
import { renderHeader } from "../src/components/header/component-header.ts";
import { renderFooter } from "../src/components/footer/";
import { renderHomePage } from "../src/pages/home/home-page.ts";

function initApp(): void {
  const root = createElement("div", { id: "app" });

  root.append(renderHeader(), renderHomePage(), renderFooter());

  document.body.append(root);
}

initApp();
