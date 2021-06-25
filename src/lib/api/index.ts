import { fetchClient } from '@/apis/fetchClient';
import { CommonList, CommonObject } from '@/apis/common';
import { ArticleItem } from '@/apis/blog';
import { DraftItem } from '@/apis/blog/_contentId@string';
import { CategoryItem } from '@/apis/categories';

type ArticleArgType = {
  offset?: number
  limit?: number
  category?: CategoryItem
}

export const getArticles = async (args?: ArticleArgType): Promise<CommonList<ArticleItem>> => {
  const limit = args?.limit ? args.limit : 50
  const offset = args?.offset ? args.offset : undefined
  const filters = args?.category ? `category[equals]${args.category.id}` : undefined
  try {
    const response = await fetchClient.blog.$get({
      query: {
        limit,
        offset,
        filters
      }
    })
    return response
  } catch (e) {
    console.error(e)
    return null
  }
}

export const getDraft = async (id: string, draftKey: string): Promise<DraftItem> => {
  try {
    const response = await fetchClient.blog._contentId(id).$get({
        query: {
          draftKey
        }
      })
    return response as DraftItem
  } catch (e) {
    console.error(e)
    return  null
  }
}


export const getPopularArticles = async (): Promise<CommonObject<ArticleItem>> => {
  try {
    const response = await fetchClient.popular_articles.$get()
    return response
  } catch (e) {
    console.error(e)
    return null
  }
};

export const getArticle = async (id: string): Promise<ArticleItem> => {
  try {
    const response = await fetchClient.blog._contentId(id).$get()
    return response as ArticleItem
  } catch (e) {
    console.error(e)
    return null
  }
};

export const getCategories = async (): Promise<CommonList<CategoryItem>> => {
  try {
    const response = await fetchClient.categories.$get()
    return response
  } catch (e) {
    console.error(e)
    return null
  }
};

export const getCategory = async (id: string): Promise<CategoryItem> => {
  try {
    const response = await fetchClient.categories._contentId(id).$get()
    return response
  } catch (e) {
    console.error(e)
    return null
  }
};