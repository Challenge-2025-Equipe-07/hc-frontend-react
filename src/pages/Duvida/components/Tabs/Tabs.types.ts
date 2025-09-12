import type { RelatedContentDTO } from "@/types/global.types";
import type { Dispatch, SetStateAction } from "react";

export type TabsListProps = {
  selectedTab?: RelatedContentDTO["type"];
  setTab: Dispatch<SetStateAction<RelatedContentDTO["type"] | undefined>>;
  relatedContent?: Array<RelatedContentDTO>;
};

export type TabContentProps = {
  children: React.ReactNode;
  index: number;
} & React.ComponentProps<"div">;
