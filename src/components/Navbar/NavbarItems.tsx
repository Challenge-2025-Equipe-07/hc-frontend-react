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
          <a href="../index.html" className="link link--decorated body">
            Início
          </a>
        </li>
        <li className="c-list__item">
          <a href="./faq.html" className="link link--decorated body">
            FAQ
          </a>
        </li>
        <li className="c-list__item">
          <a href="./integrantes.html" className="link link--decorated body">
            Integrantes
          </a>
        </li>
        <li className="c-list__item">
          <a href="./contato.html" className="link link--decorated body">
            Contato
          </a>
        </li>
      </ul>
    </nav>
  );
};

export { NavbarItems };
