type ElementProps = Partial<HTMLElement> & {
  className?: string;
  attrs?: Record<string, string>;
  dataset?: Record<string, string>;
};

type Child = HTMLElement | string;

export function createElement<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  props: ElementProps = {},
  children: Child[] = [],
): HTMLElementTagNameMap[K] {
  const element = document.createElement(tag);

  const { className, attrs, dataset, ...rest } = props;

  if (className) {
    element.className = className;
  }

  if (attrs) {
    for (const [key, value] of Object.entries(attrs)) {
      element.setAttribute(key, value);
    }
  }

  if (dataset) {
    for (const [key, value] of Object.entries(dataset)) {
      element.dataset[key] = value;
    }
  }

  Object.assign(element, rest);

  for (const child of children) {
    if (typeof child === "string") {
      element.append(document.createTextNode(child));
    } else {
      element.append(child);
    }
  }

  return element;
}
