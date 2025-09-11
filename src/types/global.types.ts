type RelatedContentDTO = {
  type: "video" | "text";
  url?: string;
  description: string;
  content?: string;
};

export type ContentDTO = {
  name: string;
  related: Array<RelatedContentDTO>;
};
