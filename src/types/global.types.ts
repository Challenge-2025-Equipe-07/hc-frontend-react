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
  id?: string;
};

export type ArticleType = {
  articleId: number;
  name: string;
};

export type UserDTO = {
  userId: number;
  username: string;
  articles: ArticleType[];
  usernameId: string;
};
