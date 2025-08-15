const Footer = () => {
  return (
    <footer className="c-footer stack">
      <div className="c-footer__body">
        <div className="stack">
          <img
            src="../assets/images/LogomarcaWhite.svg"
            alt=""
            className="c-footer__logo"
          />
          <h2 className="body">
            <strong>Ajuda HC</strong>
          </h2>
        </div>
        <ul className="c-list" id="menuList" aria-labelledby="menuButton">
          <li className="c-list__item">
            <a href="../index.html" className="link link--decorated body">
              Início
            </a>
          </li>
          <li className="c-list__item">
            <a href="#" className="link link--decorated body">
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
        <ul
          className="c-footer__social c-list row"
          id="menuList"
          aria-labelledby="menuButton"
        >
          <li className="c-list__item">
            <a
              href="#"
              className="link link--decorated body"
              aria-label="Perfil do instagram do HC"
            >
              <i className="fa fa-instagram"></i>
            </a>
          </li>
          <li className="c-list__item">
            <a
              href="#"
              className="link link--decorated body"
              aria-label="Perfil do youtube do HC"
            >
              <i className="fa fa-youtube"></i>
            </a>
          </li>
          <li className="c-list__item">
            <a
              href="#"
              className="link link--decorated body"
              aria-label="Perfil do Linkedin do HC"
            >
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
      <hr className="c-separator" />
      <small className="small">
        Desenvolvido com por Camilo, Carlos e Guilherme - Github
      </small>
    </footer>
  );
};

export { Footer };
