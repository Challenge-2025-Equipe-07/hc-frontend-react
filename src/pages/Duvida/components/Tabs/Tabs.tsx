import { FileIcon, VideoIcon } from "@phosphor-icons/react";
import type { TabContentProps, TabsListProps } from "./Tabs.types";
import type { RelatedContentDTO } from "@/types/global.types";
import { memo, useCallback } from "react";

const TabControls = memo((props: TabsListProps) => {
  const { selectedTab, setTab, relatedContent } = props;

  const hasVideo = relatedContent?.some((content) => content.type === "VIDEO");
  const hasText = relatedContent?.some((content) => content.type === "TEXT");

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      const tabName =
        event.currentTarget.id.toUpperCase() as RelatedContentDTO["type"];
      setTab(tabName);
    },
    [setTab],
  );

  return (
    <div
      role="tablist"
      aria-labelledby="tablist-1"
      className="flex overflow-clip rounded-t-lg"
    >
      <button
        id="video"
        type="button"
        role="tab"
        aria-selected={selectedTab === "VIDEO"}
        onClick={handleClick}
        aria-controls="tabpanel-1"
        disabled={!hasVideo}
        className="flex basis-1/2 items-center justify-center gap-x-2 border-b-2 border-b-blue-500 py-2 text-blue-500 hover:not-[:disabled]:bg-blue-100 hover:not-[:disabled]:text-blue-700 disabled:border-b-gray-400 disabled:text-gray-400 [&[aria-selected=false]]:border-b-gray-300 [&[aria-selected=false]]:text-gray-500"
      >
        <VideoIcon size={24} />
        Vídeo
      </button>
      <button
        id="text"
        type="button"
        role="tab"
        aria-selected={selectedTab === "TEXT"}
        aria-controls="tabpanel-2"
        tabIndex={-1}
        onClick={handleClick}
        disabled={!hasText}
        className="flex basis-1/2 items-center justify-center gap-x-2 border-b-2 border-b-blue-500 py-2 text-blue-500 hover:not-[:disabled]:bg-blue-100 hover:not-[:disabled]:text-blue-700 disabled:border-b-gray-400 disabled:text-gray-400 [&[aria-selected=false]]:border-b-gray-300 [&[aria-selected=false]]:text-gray-500"
      >
        <FileIcon size={24} />
        Texto
      </button>
    </div>
  );
});

const TabContent = memo((props: TabContentProps) => {
  const { index, children, ...rest } = props;
  return (
    <div
      id={`tabpanel-${index}`}
      role="tabpanel"
      tabIndex={0}
      aria-labelledby={`tab-${index}`}
      {...rest}
    >
      {children}
    </div>
  );
});

export { TabControls, TabContent };
