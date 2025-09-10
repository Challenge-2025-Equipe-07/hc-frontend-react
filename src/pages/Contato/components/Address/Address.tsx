const Address = () => {
  return (
    <address className="grid gap-y-2 not-italic">
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
  );
};

export { Address };
