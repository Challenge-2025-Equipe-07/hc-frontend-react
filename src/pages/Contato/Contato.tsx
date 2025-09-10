import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import type { FormValues } from "./Contato.types";
import { Button, Heading, Input, Textarea } from "@/components";
import { Address } from "./components/Address/Address";

const Contato = () => {
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Form data submitted:", data);
  };

  return (
    <section className="grid gap-y-12 my-8">
      <Heading
        title="Dúvidas, perguntas ou suporte?"
        subtitle="Acesse nosso FAQ ou envie sua pergunta pelo e-mail através do formulário abaixo"
      />
      <div className="relative grid grid-cols-1 gap-x-8 gap-y-4 rounded-xl bg-blue-300 px-12 py-6 lg:grid-cols-2">
        <h1 className="absolute top-0 left-0 -translate-y-3/5 text-6xl font-bold text-blue-500 lg:text-9xl">
          Contato
        </h1>
        <Address />

        <form onSubmit={handleSubmit(onSubmit)} className="max-lg:mr-auto grid w-full gap-y-4 max-w-80 justify-self-end">
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
          <Button>Enviar</Button>
        </form>
      </div>
    </section>
  );
};

export { Contato };
