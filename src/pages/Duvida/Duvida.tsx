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

  useEffect(() => {
    const getContent = async () => {
      const fetchContent = await fetch("http://localhost:3000/content");
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
    };

    getContent();
  }, [content]);

  const selectedContent = contentResponse.find(
    (singleContent) => singleContent.name === contentName,
  );

  return (
    <section className="grid gap-y-4 pt-12 pb-8">
      <header className="page-header">
        <Breadcrumb currentUrl={content || ""} />
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
      <menu className="mt-6 flex gap-x-4 text-blue-500">
        <li className="grid basis-1/3 auto-rows-max gap-y-2 rounded-lg border border-blue-500 px-4 py-2">
          <button className="grid justify-items-start text-left" data-js="prev">
            <strong>Passo anterior</strong>
            <p className="flex gap-x-2">
              <ArrowLeftIcon size={24} /> Voltar
            </p>
          </button>
        </li>
        <li className="grid basis-2/3 auto-rows-max gap-y-2 rounded-lg border border-blue-500 px-4 py-2">
          <button className="grid justify-items-end text-right" data-js="next">
            <strong>Passo seguinte</strong>
            <p className="flex gap-x-2">
              Saiba mais <ArrowRightIcon size={24} />
            </p>
          </button>
        </li>
      </menu>
    </section>
  );
};

export { Duvida };
