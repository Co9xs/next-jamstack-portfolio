import aspida from '@aspida/fetch'
import api from '../../apis/$api'
import { Article } from "@/types";
import { BLOG_API_ENDPOINT, CATEGORY_API_ENDPOINT, config, KEY } from "@/utils"
import { CommonList, CommonObject } from '@/apis/common';
import { ArticleItem } from '@/apis/blog';
import { CategoryItem } from '@/apis/categories';

type ArticleArgType = {
  offset?: number
  limit?: number
  category?: CategoryItem
}

const url = "https://shima.microcms.io/api/v1"

export const getArticles = async (args?: ArticleArgType): Promise<CommonList<ArticleItem>> => {
  const limit = args?.limit ? args.limit : 50
  const offset = args?.offset ? args.offset : 0
  const filters = args?.category ? `category[equals]${args.category.id}` : ''
  const _fetch = api(aspida(fetch, { baseURL: url, throwHttpErrors: true }))
  try {
    const response = await _fetch.blog.$get(
      {
        config,
        query: {
          limit,
          offset,
          filters
        }
      })
    return response
  } catch (e) {
    console.error(e)
  }
}

export const getPopularArticles = async (): Promise<CommonObject<ArticleItem>> => {
  const _fetch = api(aspida(fetch, { baseURL: url, throwHttpErrors: true }))
  try {
    const response = await _fetch.popular_articles.$get(
      {
        config,
      })
    return response
  } catch (e) {
    console.error(e)
  }
};

export const getArticle = async (id: string): Promise<ArticleItem> => {
  const _fetch = api(aspida(fetch, { baseURL: url, throwHttpErrors: true }))
  try {
    const response = await _fetch.blog._contentId(id).$get(
      {
        config,
      })
    return response
  } catch (e) {
    console.error(e)
  }
};

export const getCategories = async (): Promise<CommonList<CategoryItem>> => {
  const _fetch = api(aspida(fetch, { baseURL: url, throwHttpErrors: true }))
  try {
    const response = await _fetch.categories.$get(
      {
        config,
      })
    return response
  } catch (e) {
    console.error(e)
  }
};

export const getCategory = async (id: string): Promise<CategoryItem> => {
  const _fetch = api(aspida(fetch, { baseURL: url, throwHttpErrors: true }))
  try {
    const response = await _fetch.categories._contentId(id).$get(
      {
        config,
      })
    return response
  } catch (e) {
    console.error(e)
  }
};