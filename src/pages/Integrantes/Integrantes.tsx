import { Heading } from "../../components/Heading/Heading";

const Integrantes = () => {
  return (
    <section className="layout">
      <div className="l-member row">
        <Heading title="Integrantes" />
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
    </section>
  );
};

export { Integrantes };
