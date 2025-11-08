import { Button } from "@/components";
import { useLogin } from "@/hooks/useLogin";
import { useEffect, useState } from "react";
import { FaqCard } from "../Landing/components/FaqCard/FaqCard";
import type { ArticleType } from "@/types/global.types";
import userService from "@/services/user.service";

const Usuario = () => {
  const { user } = useLogin();
  const [userArticles, setUserArticles] = useState<Array<ArticleType>>([]);
  useEffect(() => {
    try {
      const getContent = async () => {
        const fetchContent = await userService.getUserById(
          user?.userId!.toString()!,
        );

        setUserArticles(fetchContent.articles || []);
      };

      getContent();
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <section className="grid gap-4 px-4 pb-6">
      <header>
        <h1 className="heading font-bold">Área do usuário</h1>
        <p className="subtitle text-gray-600">{user?.username}</p>
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
      <div className="flex items-center gap-6 gap-x-4 overflow-x-auto pb-4">
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
