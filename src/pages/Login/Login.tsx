import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";
import { Heading, Button, Input } from "@/components";
import type { FormData } from "./Login.types.ts";
import { useLogin } from "@/hooks/useLogin.ts";
import { useNotification } from "@/hooks/useNotification.ts";
import loginService from "@/services/login.service.ts";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
    setError,
  } = useForm<FormData>();
  const navigate = useNavigate();
  const { showNotification } = useNotification();
  const { setCurrentUser } = useLogin();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      if (!isValid) throw new Error("E-mail ou senha inválidos.");
      const fetchUser = await loginService.login(data.username, data.password);

      setCurrentUser(fetchUser);

      navigate("/usuario");

      showNotification({
        title: "Login realizado com sucesso!",
        message: "Bem-vindo de volta!",
      });
    } catch (error) {
      setError("password", {
        type: "manual",
        message: error as unknown as string,
      });
      setError("username", {
        type: "manual",
        message: error as unknown as string,
      });
    }
  };

  return (
    <section className="justify-center0 flex min-h-100 flex-col items-center py-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md space-y-8 rounded-lg border border-gray-100 bg-white p-8 shadow-2xl"
      >
        <Heading title="Login" />
        <Input
          id="username"
          label="Username"
          {...register("username", {
            required: "O username é obrigatório.",
            minLength: {
              value: 2,
              message: "O nome do usuário deve ter no mínimo 10 caracteres.",
            },
          })}
          type="text"
          color="light"
          placeholder="Nome do seu usuario (sem espaços)"
          error={errors.username?.message}
          autoComplete="username"
        />
        <Input
          id="password"
          label="Senha"
          {...register("password", {
            required: "O campo senha é obrigatório.",
            minLength: {
              value: 5,
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
