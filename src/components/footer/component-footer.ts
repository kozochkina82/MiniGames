import { createElement } from "../../utils/dom.ts";
import "./component-footer.scss";
import logoUrl from "../../assets/icons/logo.svg";

interface FooterLink {
  text: string;
  href: string;
}

function createLinkColumn(title: string, links: FooterLink[]): HTMLElement {
  const list = createElement(
    "ul",
    { className: "footer-column__list" },
    links.map((link) =>
      createElement("li", { className: "footer-column__item" }, [
        createElement("a", {
          className: "footer-column__link",
          textContent: link.text,
          attrs: { href: link.href },
        }),
      ]),
    ),
  );

  return createElement("div", { className: "footer-column" }, [
    createElement("h3", {
      className: "footer-column__title",
      textContent: title,
    }),
    list,
  ]);
}

function createSocialIcon(alt: string, href: string): HTMLElement {
  return createElement("a", {
    className: "footer-social__icon",
    attrs: {
      href,
      "aria-label": alt,
      target: "_blank",
      rel: "noopener noreferrer",
    },
  });
}

export function renderFooter(): HTMLElement {
  const brand = createElement("div", { className: "footer-brand" }, [
    createElement("div", { className: "footer__logo" }, [
      createElement("img", {
        className: "footer__logo-icon",
        attrs: { src: logoUrl, alt: "MiniGames logo" },
      }),
      createElement("span", {
        className: "footer-brand__logo",
        textContent: "MiniGames",
      }),
    ]),
    createElement("p", {
      className: "footer-brand__description",
      textContent:
        "Take a short break and have fun. Hundreds of curated casual mini-games right in your web browser. No download required.",
    }),
  ]);

  const exploreColumn = createLinkColumn("Explore", [
    { text: "Home", href: "#" },
    { text: "Library", href: "#" },
    { text: "Categories", href: "#" },
    { text: "Tournaments", href: "#" },
  ]);

  const companyColumn = createLinkColumn("Company", [
    { text: "About Us", href: "#" },
    { text: "Contact", href: "#" },
    { text: "Privacy Policy", href: "#" },
    { text: "Terms of Service", href: "#" },
  ]);

  const communityColumn = createElement("div", { className: "footer-column" }, [
    createElement("h3", {
      className: "footer-column__title",
      textContent: "Community",
    }),
    createElement("div", { className: "footer-social" }, [
      createSocialIcon("Discord", "#"),
      createSocialIcon("Twitter", "#"),
      createSocialIcon("Instagram", "#"),
    ]),
  ]);

  const linksGroup = createElement("div", { className: "footer-links" }, [
    exploreColumn,
    companyColumn,
    communityColumn,
  ]);

  const footerTop = createElement("div", { className: "footer-top" }, [
    brand,
    linksGroup,
  ]);

  const copyright = createElement("span", {
    className: "footer-bottom__item",
    textContent: "© 2026 MiniGames. All rights reserved",
  });

  function createIconLink(
    text: string,
    href: string,
    iconModifier: string,
  ): HTMLElement {
    const icon = createElement("span", {
      className: `footer-bottom__icon footer-bottom__icon-${iconModifier}`,
    });

    const label = createElement("span", {
      className: "footer-bottom__text",
      textContent: text,
    });

    return createElement(
      "a",
      {
        className: "footer-bottom__item footer-bottom__link",
        attrs: { href, target: "_blank", rel: "noopener noreferrer" },
      },
      [icon, label],
    );
  }

  const rsSchoolLink = createIconLink(
    "RS School",
    "https://rs.school",
    "rs-school",
  );
  const authorLink = createIconLink(
    "kozochkina82",
    "https://github.com/kozochkina82",
    "github",
  );

  const madeWith = createElement("span", {
    className: "footer-bottom__item",
    textContent: "Designed with love",
  });

  const footerBottom = createElement("div", { className: "footer-bottom" }, [
    copyright,
    rsSchoolLink,
    authorLink,
    madeWith,
  ]);

  return createElement("footer", { className: "footer" }, [
    footerTop,
    footerBottom,
  ]);
}
