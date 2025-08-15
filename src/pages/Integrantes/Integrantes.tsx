
const Integrantes = () => {
  return (
    <>
      
      <main className="layout">
        <div className="l-member row">
          <header className="page-header">
            <h2 className="heading">Integrantes</h2>
          </header>
          <article className="c-member-card">
            <img
              src="../assets/images/compressed_CamiloMicheletto.png"
              alt="Camilo Micheletto"
              className="c-member-card__img"
            />
            <h2 className="title">Camilo Micheletto</h2>
            <p className="body">RM: 564113 | 1TDSPW</p>
            <ul className="c-list row">
              <li className="c-list__item">
                <a
                  href="https://github.com/allyhere"
                  className="c-social"
                  target="_blank"
                  aria-label="github do integrante"
                >
                  <i className="fa fa-github"></i>
                </a>
              </li>
              <li className="c-list__item">
                <a
                  href="https://www.linkedin.com/in/ukarlito/"
                  className="c-social"
                  target="_blank"
                  aria-label="linkedin do integrante"
                >
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </article>
          <article className="c-member-card">
            <img
              src="../assets/images/compressed_CarlosAndre.png"
              alt="Camilo Micheletto"
              className="c-member-card__img"
            />
            <h2 className="title">Carlos André</h2>
            <p className="body">RM: 564968 | 1TDSPW</p>
            <ul className="c-list row">
              <li className="c-list__item">
                <a
                  href="https://github.com/uKarlito"
                  className="c-social"
                  target="_blank"
                  aria-label="github do integrante"
                >
                  <i className="fa fa-github"></i>
                </a>
              </li>
              <li className="c-list__item">
                <a
                  href="https://linkedin.com/in/camilo-micheletto"
                  className="c-social"
                  target="_blank"
                  aria-label="linkedin do integrante"
                >
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </article>
          <article className="c-member-card">
            <img
              src="../assets/images/compressed_GuilhermeRibeiro.png"
              alt="Camilo Micheletto"
              className="c-member-card__img"
            />
            <h2 className="title">Guilherme Ribeiro</h2>
            <p className="body">RM: 562700 | 1TDSPW</p>
            <ul className="c-list row">
              <li className="c-list__item">
                <a
                  href="https://github.com/WillahelmGui"
                  className="c-social"
                  target="_blank"
                  aria-label="github do integrante"
                >
                  <i className="fa fa-github"></i>
                </a>
              </li>
              <li className="c-list__item">
                <a
                  href="https://www.linkedin.com/in/willahelm-ribeiro/"
                  className="c-social"
                  target="_blank"
                  aria-label="linkedin do integrante"
                >
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </article>
        </div>
      </main>
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
              <a
                href="./integrantes.html"
                className="link link--decorated body"
              >
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
    </>
  );
};
