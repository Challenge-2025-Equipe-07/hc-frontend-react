import type { ContentDTO } from "@/types/global.types";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

class ArticleService {
  async getAllArticles(): Promise<ContentDTO[]> {
    const response = await fetch(`${BASE_URL}/article`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "true",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch articles");
    }

    const data = await response.json();
    return data.articles;
  }

  async getArticleById(articleId: string): Promise<ContentDTO> {
    const response = await fetch(`${BASE_URL}/article/${articleId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "true",
      },
    });
    if (!response.ok) {
      throw new Error("Failed to get article");
    }

    const data = await response.json();
    return data.article;
  }

  async deleteArticleById(articleId: string) {
    const response = await fetch(`${BASE_URL}/article/${articleId}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Failed to delete article");
    }

    console.log("Article deleted");
    return;
  }

  async updateArticleById(articleId: string): Promise<ContentDTO> {
    const response = await fetch(`${BASE_URL}/article/${articleId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ articleId }),
    });
    if (!response.ok) {
      throw new Error("Failed to update article");
    }

    console.log("Article updated");
    const data = await response.json();
    return data.article;
  }

  async createArticle(article: ContentDTO): Promise<ContentDTO> {
    const response = await fetch(`${BASE_URL}/article`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ article }),
    });

    if (!response.ok) {
      throw new Error("Failed to create article");
    }

    const data = await response.json();
    return data.article;
  }
}

export default new ArticleService();
