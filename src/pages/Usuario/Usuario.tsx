import { Button, Input } from "@/components";
import { useEffect, useState } from "react";
import { FaqCard } from "../Landing/components/FaqCard/FaqCard";
import type { UserDTO } from "@/types/global.types";
import userService from "@/services/user.service";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useLogin } from "@/hooks/useLogin";

type FormData = {
  username: string;
};

const Usuario = () => {
  const { user } = useLogin();
  const [userInfo, setUserInfo] = useState<UserDTO>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    if (!data.username) return;

    try {
      userService.editUserById(String(userInfo?.userId), data.username);
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  };

  useEffect(() => {
    try {
      const getContent = async () => {
        const userId = user?.userId.toString();

        if (!userId) return;
        const fetchContent = await userService.getUserById(userId);

        setUserInfo(fetchContent);
      };

      getContent();
    } catch (error) {
      console.error(error);
    }
  }, [user]);

  return (
    <section className="grid gap-4 px-4 pb-6">
      <header>
        <h1 className="heading font-bold">Área do usuário</h1>
        <p className="subtitle text-gray-600">Nome: {userInfo?.username}</p>
        <p className="subtitle text-gray-600">
          Username: {userInfo?.usernameId}
        </p>
        <p className="subtitle text-gray-600">
          Id do usuário: {userInfo?.userId}
        </p>
      </header>
      <h2 className="title mt-8">Ações</h2>
      <Button asLink to={"/agendar"} variant="secondary">
        Criar notificação
      </Button>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full max-w-md items-center space-y-8 gap-x-4 rounded-md py-2"
      >
        <Input
          id="username"
          label="Edite seu username"
          {...register("username", {
            required: "O username é obrigatório.",
            minLength: {
              value: 2,
              message: "O nome do usuário deve ter no mínimo 10 caracteres.",
            },
          })}
          type="text"
          color="light"
          placeholder="Edite o nome do seu usuario (sem espaços)"
          error={errors.username?.message}
          autoComplete="username"
        />
        <Button>Salvar</Button>
      </form>
      <h2 className="title mt-8">Artigos criados</h2>
      <div className="flex items-center gap-6 gap-x-4 overflow-x-auto pb-4">
        {userInfo?.articles.length ? (
          userInfo?.articles.map((contentItem, index) => {
            const contentColor = () => {
              if (index % 3 == 0) return "pink";
              if (index % 2 == 0) return "yellow";
              return "blue";
            };
            return (
              <FaqCard
                theme={contentColor()}
                title={contentItem.name}
                link={`/duvida/${contentItem.articleId}`}
                key={`${index}-${contentItem.name}`}
              />
            );
          })
        ) : (
          <p className="text-gray-600">Nenhum artigo criado ainda.</p>
        )}
      </div>
    </section>
  );
};

export { Usuario };
