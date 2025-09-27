import { useNavigate, useParams } from "react-router";
import { Breadcrumb } from "./components/Breadcrumb/Breadcrumb";
import { TabContent, TabControls } from "./components/Tabs/Tabs";
import { useEffect, useState } from "react";
import type { ContentDTO, RelatedContentDTO } from "@/types/global.types";
import { TextContent, VideoContent } from "./components/Content/Content";
import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react";

const Duvida = () => {
  const { content } = useParams();
  const navigate = useNavigate();
  const contentName = decodeURIComponent(content || "");
  const [selectedTab, setSelectedTab] = useState<RelatedContentDTO["type"]>();
  const [contentResponse, setContentResponse] = useState<Array<ContentDTO>>([]);
  const ENDPOINT = import.meta.env.VITE_JSON_ENDPOINT;
  useEffect(() => {
    const getContent = async () => {
      try {
        const fetchContent = await fetch(ENDPOINT);
        const parseJson: Array<ContentDTO> = await fetchContent.json();

        const selectedContent = parseJson.find(
          (singleContent) => singleContent.name === contentName,
        );

        if (!selectedContent) {
          console.error(`Content with name "${contentName}" not found.`);
          navigate(-1);
          return;
        }

        const firstRelatedItem = selectedContent.related.at(0);

        setSelectedTab(firstRelatedItem?.type || "text");
        setContentResponse(parseJson);
      } catch (error) {
        console.error("Failed to fetch content:", error);
      }
    };

    getContent();
  }, [content, navigate]);

  const currentIndex = contentResponse.findIndex(
    (item) => item.name === contentName,
  );

  const prevArticle =
    currentIndex > 0 ? contentResponse[currentIndex - 1] : null;
  const nextArticle =
    currentIndex > -1 && currentIndex < contentResponse.length - 1
      ? contentResponse[currentIndex + 1]
      : null;

  const handleNavigate = (article: ContentDTO | null) => {
    if (article) {
      navigate(`/duvida/${encodeURIComponent(article.name)}`, {
        preventScrollReset: true,
      });
    }
  };

  const selectedContent = contentResponse[currentIndex];

  if (!selectedContent) {
    return <div>Carregando...</div>;
  }

  return (
    <section className="grid gap-y-4 pt-12 pb-8">
      <header className="page-header">
        <Breadcrumb currentUrl={contentName} />
        <h2 className="title text-gray-800">{contentName}</h2>
      </header>
      <div>
        <TabControls
          selectedTab={selectedTab}
          setTab={setSelectedTab}
          relatedContent={selectedContent?.related}
        />
        {selectedContent?.related.map((selectedRelatedContent, index) => {
          const tabType = selectedRelatedContent.type;
          const tabState = tabType !== selectedTab ? "hidden" : "";
          const component =
            tabType === "text" ? (
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
        <li
          className={`grid basis-full auto-rows-max rounded-lg border p-4 transition-all duration-200 sm:basis-1/3 ${
            prevArticle
              ? "cursor-pointer border-blue-500 text-blue-500 hover:-translate-y-px hover:bg-blue-100 hover:text-blue-800 hover:shadow-md"
              : "border-gray-300 bg-gray-50 text-gray-400"
          }`}
        >
          <button
            className="grid w-full justify-items-start text-left disabled:cursor-not-allowed"
            onClick={() => handleNavigate(prevArticle)}
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
            onClick={() => handleNavigate(nextArticle)}
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
