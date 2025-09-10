import { Heading, Input } from "@/components";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";

type FormValues = {
  name: string;
  email: string;
};

const Contato = () => {
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Form data submitted:", data);
  };

  return (
    <section className="l-contact__wrapper">
      <div className="l-contact__col stack">
        <Heading
          title="Dúvidas, perguntas ou suporte?"
          subtitle="Acesse nosso FAQ ou envie sua pergunta pelo e-mail através do formulário abaixo"
        />
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
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-8">
        <Input
          id="nome"
          label="Nome"
          name="name"
          register={register}
          placeholder="Nome e sobrenome"
          required
          minLength={1}
          autoComplete="name"
          type="text"
        />
        <Input
          id="email"
          label="Email"
          name="email"
          register={register}
          placeholder="Nome e sobrenome"
          required
          autoComplete="email"
          type="text"
        />
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
