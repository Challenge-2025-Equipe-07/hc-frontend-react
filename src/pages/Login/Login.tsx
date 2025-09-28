import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";
import { Heading, Button, Input } from "@/components";
import type { FormData } from "./Login.types.ts";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<FormData>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    if (isValid) navigate("/agendar");
  };

  return (
    <section className="justify-center0 flex min-h-100 flex-col items-center py-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md space-y-8 rounded-lg border border-gray-100 bg-white p-8 shadow-2xl"
      >
        <Heading title="Login" />
        <Input
          id="email"
          label="Email"
          {...register("email", {
            required: "O campo E-mail é obrigatório.",
            minLength: {
              value: 10,
              message: "O e-mail deve ter no mínimo 10 caracteres.",
            },
          })}
          type="email"
          color="light"
          placeholder="seuemail@exemplo.com"
          error={errors.email?.message}
          autoComplete="email"
        />
        <Input
          id="password"
          label="Senha"
          {...register("password", {
            required: "O campo senha é obrigatório.",
            minLength: {
              value: 6,
              message: "A senha deve ter no mínimo 6 caracteres.",
            },
          })}
          type="password"
          color="light"
          placeholder="Sua senha"
          autoComplete="current-password"
          error={errors.password?.message}
        />
        <Button className="justify-self-end" type="submit">
          Entrar
        </Button>
      </form>
    </section>
  );
};
