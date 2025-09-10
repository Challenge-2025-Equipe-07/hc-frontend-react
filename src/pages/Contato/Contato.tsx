import { Heading, Input, Textarea } from "@/components";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import type { FormValues } from "./Contato.types";
import { Address } from "./components/Address/Address";

const Contato = () => {
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Form data submitted:", data);
  };

  return (
    <section className="grid">
      <div className="l-contact__col stack">
        <Heading
          title="Dúvidas, perguntas ou suporte?"
          subtitle="Acesse nosso FAQ ou envie sua pergunta pelo e-mail através do formulário abaixo"
        />
        <h1 className="l-contact__title">Contato</h1>
        <Address />
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
        <Textarea
          id="message"
          label="Mensagem"
          name="message"
          register={register}
          placeholder="Digite sua mensagem aqui..."
          rows={4}
          maxLength={500}
          required
        />
      </form>
    </section>
  );
};

export { Contato };
