import { Category } from "../../types";
import { BLOG_API_ENDPOINT } from "../../utils"
import { CATEGORY_API_ENDPOINT } from "../../utils"

const key = {
  headers: { 'X-API-KEY': process.env.API_KEY },
};

export const getArticles = async (args?: { offset: number; limit: number}, category?: Category) => {
  const base_params = args ? `?offset=${args.offset}&limit=${args.limit}` : ""
  const category_params = category ? `&filters=category[equals]${category.id}` : ""
  const params = base_params + category_params
  try {
    return await fetch(`${BLOG_API_ENDPOINT}${params}`, key)
      .then((res) => res.json())
      .catch(() => null)
  } catch (error) {
    console.error(error)
  }
};

export const getArticle = async (id: string) => {
  try {
    return await fetch(`${BLOG_API_ENDPOINT}/${id}`, key)
      .then((res) => res.json())
      .catch(() => null)
  } catch (error) {
    console.error(error)
  }
};

export const getCategories = async (args?: { offset: number; limit: number }) => {
  const params = args ? `?offset=${args.offset}&limit=${args.limit}` : ""
  try {
    return await fetch(`${CATEGORY_API_ENDPOINT}${params}`, key)
      .then((res) => res.json())
      .catch(() => null)
  } catch (error) {
    console.error(error)
  }
};

export const getCategory = async (id: string) => {
  try {
    return await fetch(`${CATEGORY_API_ENDPOINT}/${id}`, key)
      .then((res) => res.json())
      .catch(() => null)
  } catch (error) {
    console.error(error)
  }
};