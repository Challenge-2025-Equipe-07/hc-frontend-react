import type { ContentDTO } from "@/types/global.types";

const BASE_URL = import.meta.env.VITE_ENDPOINT;

class ArticleService {
  async getArticle(): Promise<Array<ContentDTO>> {
    const response = await fetch(`${BASE_URL}/article`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("Article failed");
    }

    const data = await response.json();
    return data;
  }
  async getArticleById(id: ContentDTO["articleId"]): Promise<ContentDTO> {
    const response = await fetch(`${BASE_URL}/article/${id}`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`Article ${id} failed`);
    }

    const data = await response.json();
    return data;
  }
}

export default new ArticleService();
