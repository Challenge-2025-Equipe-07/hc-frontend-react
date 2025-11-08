export type RelatedContentDTO = {
  type: "VIDEO" | "TEXT";
  url?: string;
  description: string;
  content?: string;
};

export type ContentDTO = {
  name: string;
  related: Array<RelatedContentDTO>;
  userId?: number;
  articleId?: string;
};
