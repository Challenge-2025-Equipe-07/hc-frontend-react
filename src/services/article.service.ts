import type { ContentDTO } from "@/types/global.types";

const BASE_URL = import.meta.env.VITE_SERVER_URL;

class ArticleService {
  async getArticle(): Promise<Array<ContentDTO>> {
    const response = await fetch(`${BASE_URL}/article`);

    if (!response.ok) {
      throw new Error("Article failed");
    }

    const data = await response.json();
    return data;
  }
  async getArticleById(id: ContentDTO["id"]): Promise<ContentDTO> {
    const response = await fetch(`${BASE_URL}/article/${id}`);

    if (!response.ok) {
      throw new Error(`Article ${id} failed`);
    }

    const data = await response.json();
    return data;
  }

  async deleteArticleById(id: ContentDTO["id"]): Promise<void> {
    return fetch(`${BASE_URL}/article/${id}`, {
      method: "DELETE",
    }).then((response) => {
      if (!response.ok) {
        throw new Error(`Delete article ${id} failed`);
      }
    });
  }
}

export default new ArticleService();
