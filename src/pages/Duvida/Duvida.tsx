const Duvida = () => {
  return (
    <section className="l-response">
      <header className="page-header">
        <h2 className="title">Primeiro acesso ao portal do paciente</h2>
      </header>
      <ul className="l-response__content">
        <li className="c-response">
          <menu className="c-response__header" data-js="card-tab">
            <li>
              <button className="c-tab c-tab--active">
                <i className="fa fa-play-circle"></i>
                <strong>Video</strong>
              </button>
            </li>
            <li>
              <button className="c-tab">
                <i className="fa fa-file-text"></i>
                <strong>Texto</strong>
              </button>
            </li>
          </menu>
          <div
            className="c-response__tab c-response__tab--video"
            aria-disabled="false"
            data-js="tab"
          >
            <video
              width="100%"
              height="100%"
              data-js="video-embed"
              src="../assets/videos/compressed_primeiro-acesso.mp4"
              className="c-video"
              preload="true"
            ></video>
            <div className="c-response__controls">
              <select
                name="velocity"
                id="velocity"
                className="c-video__speed"
                data-js="video-speed"
                aria-label="Velocidade do vídeo - 1x (padrão)"
              >
                <option value="2">2x</option>
                <option value="1.5">1.5x</option>
                <option value="1" selected>
                  1x
                </option>
                <option value="1">0.5x</option>
              </select>
              <button
                data-js="video-controls"
                aria-label="Iniciar vídeo"
                className="c-button c-video__play"
              >
                <i className="fa fa-play"></i>
              </button>
              <div className="c-video__volume">
                <button
                  className="c-button c-button--tertiary c-video__volume-button"
                  aria-label="Volume do vídeo"
                  data-js="volume-button"
                >
                  <i className="fa fa-volume-up"></i>
                </button>
                <div
                  className="c-video__volume-tooltip"
                  data-js="volume-container"
                >
                  <input
                    className="c-video__volume-slider"
                    type="range"
                    data-js="volume-slider"
                    min="0"
                    max="1"
                    value="1"
                    step="0.01"
                    aria-label="Escolher volume do vídeo"
                  />
                </div>
              </div>
            </div>
            <div className="c-video__slider">
              <input
                className="c-video__timeline"
                data-js="video-timeline"
                type="range"
                min="0"
                max="100"
                value="0"
                step="0.1"
              />
            </div>
          </div>
          <div
            className="c-response__tab c-response__tab--text"
            aria-disabled="true"
            data-js="tab"
          >
            <ol className="c-steps">
              <li>Abra o aplicativo portal do paciente no seu celular</li>
              <li>Na tela inicial clique em acessar portal</li>
              <li>
                Uma mensagem perguntará se você deseja utilizar usp.br para
                iniciar sessão, clique em continuar
              </li>
              <li>
                Na nova tela que se abrir, clique em cadastrar senha, insira o
                CPF do paciente e clique em localizar paciente
              </li>
              <li>
                Preencha os dados pessoais solicitados e crie uma senha segura,
                com pelo menos 8 caracteres incluindo letras, números e
                caracteres especiais
              </li>
              <li>Revise as informações e clique em "Cadastrar senha"</li>
              <li>Por fim, selecione a opção acessar agora para continuar</li>
            </ol>
          </div>
        </li>
        <li className="c-response">
          <menu className="c-response__header" data-js="card-tab">
            <li>
              <button className="c-tab c-tab--active">
                <i className="fa fa-play-circle"></i>
                <strong>Video</strong>
              </button>
            </li>
            <li>
              <button className="c-tab">
                <i className="fa fa-file-text"></i>
                <strong>Texto</strong>
              </button>
            </li>
          </menu>
          <div
            className="c-response__tab c-response__tab--video"
            aria-disabled="false"
            data-js="tab"
          >
            <video
              width="100%"
              height="100%"
              data-js="video-embed"
              src="../assets/videos/compressed_teleatendimento-orientação-aos-pacientes.mp4"
              className="c-video"
              preload="true"
            ></video>
            <div className="c-response__controls">
              <select
                name="velocity"
                id="velocity"
                className="c-video__speed"
                data-js="video-speed"
                aria-label="Velocidade do vídeo - 1x (padrão)"
              >
                <option value="2">2x</option>
                <option value="1.5">1.5x</option>
                <option value="1" selected>
                  1x
                </option>
                <option value="1">0.5x</option>
              </select>
              <button
                data-js="video-controls"
                aria-label="Iniciar vídeo"
                className="c-button c-video__play"
              >
                <i className="fa fa-play"></i>
              </button>
              <div className="c-video__volume">
                <button
                  className="c-button c-button--tertiary c-video__volume-button"
                  aria-label="Volume do vídeo"
                  data-js="volume-button"
                >
                  <i className="fa fa-volume-up"></i>
                </button>
                <div
                  className="c-video__volume-tooltip"
                  data-js="volume-container"
                >
                  <input
                    className="c-video__volume-slider"
                    type="range"
                    data-js="volume-slider"
                    min="0"
                    max="1"
                    value="1"
                    step="0.01"
                    aria-label="Escolher volume do vídeo"
                  />
                </div>
              </div>
            </div>
            <div className="c-video__slider">
              <input
                className="c-video__timeline"
                data-js="video-timeline"
                type="range"
                min="0"
                max="100"
                value="0"
                step="0.1"
              />
            </div>
          </div>
          <div
            className="c-response__tab c-response__tab--text"
            aria-disabled="true"
            data-js="tab"
          >
            <p className="body">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Praesentium eum repellendus numquam optio deserunt blanditiis
              quisquam voluptatibus expedita repudiandae possimus aperiam,
              facere vel non impedit quidem nemo molestiae! Quaerat, ab!
            </p>
          </div>
        </li>
        <li className="c-response">
          <menu className="c-response__header" data-js="card-tab">
            <li>
              <button className="c-tab c-tab--active">
                <i className="fa fa-play-circle"></i>
                <strong>Video</strong>
              </button>
            </li>
            <li>
              <button className="c-tab">
                <i className="fa fa-file-text"></i>
                <strong>Texto</strong>
              </button>
            </li>
          </menu>
          <div
            className="c-response__tab c-response__tab--video"
            aria-disabled="false"
            data-js="tab"
          >
            <video
              width="100%"
              height="100%"
              data-js="video-embed"
              src="../assets/videos/compressed_acesso-ao-portal.mp4"
              className="c-video"
              preload="true"
            ></video>
            <div className="c-response__controls">
              <select
                name="velocity"
                id="velocity"
                className="c-video__speed"
                data-js="video-speed"
                aria-label="Velocidade do vídeo - 1x (padrão)"
              >
                <option value="2">2x</option>
                <option value="1.5">1.5x</option>
                <option value="1" selected>
                  1x
                </option>
                <option value="1">0.5x</option>
              </select>
              <button
                data-js="video-controls"
                aria-label="Iniciar vídeo"
                className="c-button c-video__play"
              >
                <i className="fa fa-play"></i>
              </button>
              <div className="c-video__volume">
                <button
                  className="c-button c-button--tertiary c-video__volume-button"
                  aria-label="Volume do vídeo"
                  data-js="volume-button"
                >
                  <i className="fa fa-volume-up"></i>
                </button>
                <div
                  className="c-video__volume-tooltip"
                  data-js="volume-container"
                >
                  <input
                    className="c-video__volume-slider"
                    type="range"
                    data-js="volume-slider"
                    min="0"
                    max="1"
                    value="1"
                    step="0.01"
                    aria-label="Escolher volume do vídeo"
                  />
                </div>
              </div>
            </div>
            <div className="c-video__slider">
              <input
                className="c-video__timeline"
                data-js="video-timeline"
                type="range"
                min="0"
                max="100"
                value="0"
                step="0.1"
              />
            </div>
          </div>
          <div
            className="c-response__tab c-response__tab--text"
            aria-disabled="true"
            data-js="tab"
          >
            <p className="body">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Praesentium eum repellendus numquam optio deserunt blanditiis
              quisquam voluptatibus expedita repudiandae possimus aperiam,
              facere vel non impedit quidem nemo molestiae! Quaerat, ab!
            </p>
          </div>
        </li>
      </ul>
      <ol className="l-response__counter" data-js="counter-dots">
        <li className="l-response__dots l-response__dots--active"></li>
        <li className="l-response__dots"></li>
        <li className="l-response__dots"></li>
      </ol>
      <menu className="l-response__swiper">
        <li className="l-response__swipe dim">
          <button className="l-response__btn" data-js="prev">
            <strong>Passo anterior</strong>
            <p>
              <i className="fa fa-arrow-left"></i> Voltar
            </p>
          </button>
        </li>
        <li className="l-response__swipe">
          <button className="l-response__btn" data-js="next">
            <strong>Passo seguinte</strong>
            <p>
              Saiba mais<i className="fa fa-arrow-right"></i>
            </p>
          </button>
        </li>
      </menu>
    </section>
  );
};

export { Duvida };
