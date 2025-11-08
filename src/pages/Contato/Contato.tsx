import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import type { FormValues } from "./Contato.types";
import { Button, Heading, Input, Textarea } from "@/components";
import { Address } from "./components/Address/Address";

const Contato = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormValues>();
  const charCount = watch("message")?.length;
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Form data submitted:", data);
  };

  return (
    <section className="my-8 grid gap-y-16 px-4">
      <Heading
        title="Dúvidas, perguntas ou suporte?"
        subtitle="Acesse nosso FAQ ou envie sua pergunta pelo e-mail através do formulário abaixo"
      />
      <div className="relative grid grid-cols-1 gap-x-8 gap-y-4 rounded-xl bg-blue-300 px-12 py-6 lg:grid-cols-2">
        <h1 className="absolute top-0 left-0 -translate-y-3/5 text-6xl font-bold text-blue-500 lg:text-9xl">
          Contato
        </h1>
        <Address />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid w-full max-w-80 gap-y-4 justify-self-end max-lg:mr-auto"
        >
          <Input
            id="nome"
            label="Nome"
            {...register("name", {
              required: "O campo Nome é obrigatório.",
              minLength: {
                value: 1,
                message: "O nome deve ter no mínimo 1 letra.",
              },
            })}
            placeholder="Nome e sobrenome"
            autoComplete="name"
            type="text"
            error={errors.name?.message}
          />
          <Input
            id="email"
            label="Email"
            {...register("email", {
              required: "O campo Email é obrigatório.",
              minLength: {
                value: 11,
                message: "O nome deve ter no mínimo 1 letra.",
              },
            })}
            placeholder="Seu e-mail principal"
            required
            autoComplete="email"
            type="email"
            error={errors.email?.message}
          />
          <Textarea
            id="message"
            label="Mensagem"
            {...register("message", {
              maxLength: {
                value: 500,
                message: "Sua mensagem pode ter no máximo 500 caracteres.",
              },
            })}
            placeholder="Digite sua mensagem aqui..."
            rows={4}
            charCount={charCount}
            error={errors.message?.message}
          />
          <Button className="justify-self-end">Enviar</Button>
        </form>
      </div>
    </section>
  );
};

export { Contato };
