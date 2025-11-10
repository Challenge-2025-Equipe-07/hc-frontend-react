import { useForm, type SubmitHandler } from "react-hook-form";
import { Textarea, Input, Button } from "@/components";
import { useNotification } from "@/hooks/useNotification";
import type { FormValues } from "./CriarArtigo.types";
import { useNavigate, useSearchParams } from "react-router";

const CriarArtigo = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const initialValues = {
    ...Array.from(searchParams.entries()).reduce(
      (acc, [key, value]) => {
        acc[key as keyof FormValues] = value;
        return acc;
      },
      {} as Partial<FormValues> & { id?: string },
    ),
  };
  const isEditing = searchParams.size > 0;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>({ defaultValues: initialValues });

  const { showNotification } = useNotification();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const { name, media, content, description } = data;
    const method = isEditing ? "PUT" : "POST";
    const path = isEditing ? "content" : `content/id=${initialValues.id}`;

    const payload = {
      name,
      userId: 1,
      related: [
        {
          type: "video",
          url: media,
          description,
          content,
        },
      ],
    };

    try {
      const postArticle = async () => {
        await fetch(`${import.meta.env.VITE_ENDPOINT}/${path}`, {
          method,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });
      };

      postArticle();

      showNotification({
        title: "Sucesso",
        message: `Seu artigo ${name} foi criado com sucesso.`,
      });

      if (isEditing) {
        setInterval(() => {
          navigate(`/duvida/${encodeURIComponent(name)}`);
        }, 2000);
      }
    } catch (error) {
      console.error(error);
      showNotification({
        title: "Erro",
        message: "Falha ao atualizar artigo",
      });
    }
  };

  const charCount = watch("content")?.length;

  return (
    <section className="grid gap-4 px-4 pb-6">
      <header>
        <h1 className="heading font-bold">Criação de artigos</h1>
        <p className="subtitle text-gray-600">
          Crie artigos informativos para ajudar os pacientes.
        </p>
      </header>
      <div className="flex flex-wrap gap-x-8 gap-y-6">
        <form
          id="schedule-form"
          onSubmit={handleSubmit(onSubmit)}
          className="grid grow-1 auto-rows-max grid-cols-2 gap-2 lg:gap-4 [&>div:first-of-type]:col-span-2 [&>div:last-of-type]:col-span-2"
        >
          <Input
            id="name"
            label="Nome do artigo"
            {...register("name", {
              required: "O campo Nome é obrigatório.",
            })}
            type="text"
            color="light"
            error={errors.name?.message}
          />
          <Input
            id="description"
            label="Descrição do artigo"
            {...register("description", {
              required: "O campo descrição é obrigatório.",
              maxLength: {
                value: 120,
                message: "A descrição pode ter no máximo 120 caracteres.",
              },
            })}
            type="text"
            color="light"
            error={errors.description?.message}
          />

          <Input
            id="media"
            label="Mídia (url do vídeo)"
            {...register("media")}
            placeholder="Exemplo: https://youtube.com/..."
            type="text"
            color="light"
            error={errors.media?.message}
          />
          <Textarea
            id="content"
            label="Conteúdo do artigo (texto)"
            {...register("content", {
              maxLength: {
                value: 1500,
                message: "Sua mensagem pode ter no máximo 1500 caracteres.",
              },
            })}
            maxLength={1500}
            color="light"
            placeholder="Digite sua mensagem aqui..."
            rows={4}
            charCount={charCount}
            error={errors.content?.message}
          />
          <Button className="col-end-3 justify-self-end">
            {isEditing ? "Editar artigo" : "Criar artigo"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export { CriarArtigo };
