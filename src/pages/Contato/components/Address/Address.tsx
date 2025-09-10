const Address = () => {
  return (
    <address className="grid auto-rows-max content-center gap-y-1 not-italic text-gray-900">
      <h2 className="subtitle font-bold mb-2">
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
  );
};

export { Address };
