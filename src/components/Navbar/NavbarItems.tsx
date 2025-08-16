import { LinkItem } from "../LinkItem/LinkItem";

const NavbarItems = () => {
  return (
    <nav role="navigation" className="c-navigation__menu">
      <button
        className="c-button c-button--tertiary squared"
        data-js="mobile-button"
        aria-label="Abrir menu"
        aria-expanded="false"
        aria-controls="menuList"
        id="menuButton"
      >
        <i className="fa fa-bars" aria-hidden="true"></i>
      </button>
      <ul className="c-list" id="menuList" aria-labelledby="menuButton">
        <li className="c-list__item">
          <LinkItem route="/">Início</LinkItem>
        </li>
        <li className="c-list__item">
          <LinkItem route="/faq">FAQ</LinkItem>
        </li>
        <li className="c-list__item">
          <LinkItem route="/integrantes">Integrantes</LinkItem>
        </li>
        <li className="c-list__item">
          <LinkItem route="/contato">Contato</LinkItem>
        </li>
      </ul>
    </nav>
  );
};

export { NavbarItems };
