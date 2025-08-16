const Contato = () => {
  return (
    <section className="l-contact__wrapper">
      <div className="l-contact__col stack">
        <h1 className="l-contact__title">Contato</h1>
        <address className="l-contact__info">
          <h2 className="body">
            <strong> Informações gerais </strong>
          </h2>
          <p>
            <strong> Telefone fixo: </strong>
            (11) 2661-8114.
          </p>
          <p>
            <strong> Móvel com WhatsApp: </strong>
            (11) 95695-1613.
          </p>
          <p>
            <strong> E-mail: </strong>
            <a href="mailto:ssimrea@hc.fm.usp.br">ssimrea@hc.fm.usp.br</a>
          </p>
          <p>
            <strong> Endereço: </strong>
            Portaria 3 do INRAD, 1º andar, Eixo Rosa do Complexo HC.
          </p>
          <p>
            <strong> Horário de funcionamento: </strong>
            <time>Segunda a sexta-feira das 07h às 18h</time>.
          </p>
        </address>
        <div>
          <h2 className="body">
            <strong>Redes sociais</strong>
          </h2>
          <ul className="c-list row" id="menuList" aria-labelledby="menuButton">
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
      </div>
      <form action="" className="c-contact stack" data-js="contact-form">
        <label htmlFor="name" className="c-label">
          Nome
          <input
            className="c-input"
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            required
            minLength={1}
          />
          <span className="c-error"></span>
        </label>
        <label htmlFor="email" className="c-label">
          E-mail
          <input
            className="c-input"
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            required
          />
          <span className="c-error"></span>
        </label>
        <label htmlFor="message" className="c-label">
          Mensagem
          <textarea
            className="c-textarea"
            id="message"
            name="message"
            rows={4}
            autoComplete="off"
            maxLength={500}
            required
            data-js="message-textarea"
          ></textarea>
          <span className="c-error"></span>
          <span className="c-textarea__count small" data-js="message-count">
            0/500
          </span>
        </label>
        <button className="c-button c-button--primary">Enviar!</button>
      </form>
    </section>
  );
};

export { Contato };
