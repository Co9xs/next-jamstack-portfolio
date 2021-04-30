import { Article, ArticleData, Category, CategoryData } from "@/types";
import { BLOG_API_ENDPOINT, CATEGORY_API_ENDPOINT, KEY } from "@/utils"

type ArticleArgType = {
  offset: number
  limit: number
  category?: Category
}

type CategoryArgType = {
  offset?: number
  limit?: number
}

export const getArticles = async (args?: ArticleArgType): Promise<ArticleData> => {
  const base_params = args ? `?offset=${args.offset}&limit=${args.limit}` : ""
  const category_params = args?.category ? `&filters=category[equals]${args.category.id}` : ""
  const params = base_params + category_params
  try {
    return await fetch(`${BLOG_API_ENDPOINT}${params}`, KEY)
      .then((res) => res.json())
      .catch(() => null)
  } catch (error) {
    console.error(error)
  }
};

export const getPoplarArticles = async (): Promise<any> => {
  try {
    return await fetch(`https://shima.microcms.io/api/v1/popular-articles`, KEY)
      .then((res) => res.json())
      .catch(() => null)
  } catch (error) {
    console.error(error)
  }
};

export const getArticle = async (id: string): Promise<Article> => {
  try {
    return await fetch(`${BLOG_API_ENDPOINT}/${id}`, KEY)
      .then((res) => res.json())
      .catch(() => null)
  } catch (error) {
    console.error(error)
  }
};

export const getCategories = async (args?: CategoryArgType): Promise<CategoryData> => {
  const limitParams = args?.limit ? `limit=${args.limit}` : ""
  const offsetParams = args?.offset ? `offset=${args.offset}` : ""
  const params = '?' + [limitParams, offsetParams].join('&')
  try {
    return await fetch(`${CATEGORY_API_ENDPOINT}${params}`, KEY)
      .then((res) => res.json())
      .catch(() => null)
  } catch (error) {
    console.error(error)
  }
};

export const getCategory = async (id: string): Promise<Category> => {
  try {
    return await fetch(`${CATEGORY_API_ENDPOINT}/${id}`, KEY)
      .then((res) => res.json())
      .catch(() => null)
  } catch (error) {
    console.error(error)
  }
};