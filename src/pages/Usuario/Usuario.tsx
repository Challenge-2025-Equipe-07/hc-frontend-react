import { Button } from "@/components";
import { useLogin } from "@/hooks/useLogin";
import { useEffect, useState } from "react";
import { FaqCard } from "../Landing/components/FaqCard/FaqCard";
import type { ContentDTO } from "@/types/global.types";

const Usuario = () => {
  const { user } = useLogin();
  const [userArticles, setUserArticles] = useState<Array<ContentDTO>>([]);
  const ENDPOINT = import.meta.env.VITE_ENDPOINT;
  useEffect(() => {
    try {
      const getContent = async () => {
        const fetchContent = await fetch(
          `${ENDPOINT}/content?userId=${user?.userId}`,
        );
        const parseJson = await fetchContent.json();

        setUserArticles(parseJson);
      };

      getContent();
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <section className="grid gap-4 pb-6">
      <header>
        <h1 className="heading font-bold">Área do usuário</h1>
        <p className="subtitle text-gray-600">{user?.email}</p>
      </header>
      <h2 className="title mt-8">Ações</h2>
      <div className="flex gap-x-4">
        <Button to={"/artigo/criar"} asLink>
          Criar artigos
        </Button>
        <Button asLink to={"/agendar"} variant="secondary">
          Criar notificação
        </Button>
      </div>
      <h2 className="title mt-8">Artigos criados</h2>
      <div className="flex flex-wrap items-center gap-x-4">
        {userArticles.length ? (
          userArticles.map((contentItem, index) => {
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
