import { useNavigate, useParams } from "react-router";
import { Breadcrumb } from "./components/Breadcrumb/Breadcrumb";
import { TabContent, TabControls } from "./components/Tabs/Tabs";
import { useEffect, useState } from "react";
import type { ContentDTO, RelatedContentDTO } from "@/types/global.types";
import { TextContent, VideoContent } from "./components/Content/Content";
import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react";
import { useLogin } from "@/hooks/useLogin";
import { Button } from "@/components";
import articleService from "@/services/article.service";
import { SpinnerIcon } from "@phosphor-icons/react";

const Duvida = () => {
  const { content } = useParams();
  const navigate = useNavigate();
  const { user } = useLogin();
  const [selectedTab, setSelectedTab] = useState<RelatedContentDTO["type"]>();
  const [contentResponse, setContentResponse] = useState<Array<ContentDTO>>([]);

  const [selectedContent, setSelectedContent] = useState<ContentDTO | null>(
    null,
  );

  useEffect(() => {
    const getContent = async () => {
      try {
        const fetchContent = await articleService.getArticle();
        const sortedContent = fetchContent.sort(
          (a, b) => Number(a.id) - Number(b.id),
        );

        const currentContent = sortedContent.find(
          (singleContent) => singleContent.id == content,
        );

        if (!currentContent) {
          console.error(`Content with id "${content}" not found.`);
          navigate(-1);
          return;
        }

        setSelectedContent(currentContent);
        setContentResponse(sortedContent);

        const firstRelatedItem = currentContent.related.at(0);
        setSelectedTab(firstRelatedItem?.type || "TEXT");
      } catch (error) {
        console.error("Failed to fetch content:", error);
      }
    };

    getContent();
  }, [content]);

  const currentIndex = selectedContent
    ? contentResponse.findIndex((item) => item.id === selectedContent.id)
    : -1;

  const prevArticle =
    currentIndex > 0 ? contentResponse[currentIndex - 1] : null;

  const nextArticle =
    currentIndex >= 0 && currentIndex < contentResponse.length - 1
      ? contentResponse[currentIndex + 1]
      : null;

  const handleDeleteArticle = async () => {
    if (!selectedContent) return;

    try {
      await articleService.deleteArticleById(selectedContent.id);
      navigate(-1);
    } catch (error) {
      console.error("Failed to delete content:", error);
    }
  };

  const handleNavigate = (direction: "prev" | "next") => {
    let targetArticleId;
    if (direction === "prev" && prevArticle) {
      targetArticleId = prevArticle.id;
    } else if (direction === "next" && nextArticle) {
      targetArticleId = nextArticle.id;
    }

    if (targetArticleId) {
      navigate(`/duvida/${targetArticleId}`, {
        preventScrollReset: true,
      });
    }
  };

  if (!selectedContent) {
    return (
      <div className="grid h-80 auto-rows-max place-items-center content-center gap-y-4">
        <h1 className="text-2xl text-gray-800">Carregando sua resposta</h1>
        <SpinnerIcon size={60} className="animate-spin text-blue-600" />
      </div>
    );
  }

  const isUserContent = selectedContent.userId === user?.userId;

  return (
    <section className="grid gap-y-4 px-4 pt-12 pb-8">
      <header className="page-header">
        <Breadcrumb currentUrl={selectedContent.name} />
        <h2 className="title text-gray-800">{selectedContent.name}</h2>
        {isUserContent && (
          <Button
            className="mt-4"
            variant="tertiary"
            onClick={handleDeleteArticle}
          >
            Deletar conteúdo
          </Button>
        )}
      </header>
      <div>
        <TabControls
          selectedTab={selectedTab}
          setTab={setSelectedTab}
          relatedContent={selectedContent?.related}
        />
        {selectedContent?.related?.map((selectedRelatedContent, index) => {
          const tabType = selectedRelatedContent.type;
          const tabState = tabType !== selectedTab ? "hidden" : "";
          const component =
            tabType === "TEXT" ? (
              <TextContent
                content={selectedRelatedContent.content}
                name={selectedRelatedContent.description}
              />
            ) : (
              <VideoContent
                name={selectedRelatedContent.description}
                url={selectedRelatedContent.url}
              />
            );

          return (
            <TabContent key={index} index={index + 1} className={tabState}>
              {component}
            </TabContent>
          );
        })}
      </div>

      <menu className="mt-8 flex flex-col gap-4 sm:flex-row">
        {/* The rest of your JSX logic for buttons was already correct! */}
        <li
          className={`grid basis-full auto-rows-max rounded-lg border p-4 transition-all duration-200 sm:basis-1/3 ${
            prevArticle
              ? "cursor-pointer border-blue-500 text-blue-500 hover:-translate-y-px hover:bg-blue-100 hover:text-blue-800 hover:shadow-md"
              : "border-gray-300 bg-gray-50 text-gray-400"
          }`}
        >
          <button
            className="grid w-full justify-items-start text-left disabled:cursor-not-allowed"
            onClick={() => handleNavigate("prev")}
            disabled={!prevArticle}
          >
            <div className="flex items-center gap-x-2">
              <ArrowLeftIcon size={20} />
              <strong>Passo anterior</strong>
            </div>
            <p className="mt-1 text-sm font-normal">
              {prevArticle ? prevArticle.name : "Você está no primeiro passo"}
            </p>
          </button>
        </li>

        <li
          className={`grid basis-full auto-rows-max rounded-lg border p-4 transition-all duration-200 sm:basis-2/3 ${
            nextArticle
              ? "cursor-pointer border-blue-500 text-blue-500 hover:-translate-y-px hover:bg-blue-100 hover:text-blue-800 hover:shadow-md"
              : "border-gray-300 bg-gray-50 text-gray-400"
          }`}
        >
          <button
            className="grid w-full justify-items-end text-right disabled:cursor-not-allowed"
            onClick={() => handleNavigate("next")}
            disabled={!nextArticle}
          >
            <div className="flex items-center gap-x-2">
              <strong>Passo seguinte</strong>
              <ArrowRightIcon size={20} />
            </div>
            <p className="mt-1 text-sm font-normal">
              {nextArticle ? nextArticle.name : "Você chegou ao final"}
            </p>
          </button>
        </li>
      </menu>
    </section>
  );
};

export { Duvida };
