import { createElement } from "../../utils/dom.ts";
import "./component-header.scss";
import logoUrl from "../../assets/icons/logo.svg";

export function renderHeader(): HTMLElement {
  const logo = createElement("div", { className: "header__brand" }, [
    createElement("img", {
      className: "header__logo-icon",
      attrs: { src: logoUrl, alt: "MiniGames logo" },
    }),
    createElement("span", {
      className: "header__logo",
      textContent: "MiniGames",
    }),
  ]);

  const nav = createElement("nav", { className: "header__nav" }, [
    createElement("a", {
      className: "header__link",
      textContent: "Home",
      attrs: { href: "#", "data-text": "Home" },
    }),
    createElement("a", {
      className: "header__link",
      textContent: "Library",
      attrs: { href: "#", "data-text": "Library" },
    }),
    createElement("a", {
      className: "header__link",
      textContent: "Tournaments",
      attrs: { href: "#", "data-text": "Tournaments" },
    }),
    createElement("a", {
      className: "header__link",
      textContent: "Community",
      attrs: { href: "#", "data-text": "Community" },
    }),
  ]);

  const loginButton = createElement("button", {
    className: "header__btn header__btn-login",
    textContent: "Log In",
    attrs: { type: "button" },
  });

  const signUpButton = createElement("button", {
    className: "header__btn header__btn-signup",
    textContent: "Sign Up",
    attrs: { type: "button" },
  });

  const actions = createElement("div", { className: "header__actions" }, [
    nav,
    loginButton,
    signUpButton,
  ]);

  return createElement("header", { className: "header" }, [logo, actions]);
}
