import { CommonItem, CommonList } from '../common'

interface TagItem extends CommonItem {
  name: string
}

interface CategoryItem extends CommonItem {
  name: string
}

interface AuthorItem extends CommonItem {
  displayName: string
  description: string
  image: string
}

interface ImageItem {
  url: string
  width: number
  height: number
}

export interface ArticleItem extends CommonItem {
  title: string
  body: string
  ogimage: ImageItem
  category: CategoryItem
  tags: TagItem[]
  author: AuthorItem
  related_articles: ArticleItem[]
}

type FilterOperator = 'equals' | 'not_equals' | 'less_than' | 'greater_than' | 'contains' | 'exists' | 'not_exists' | 'begin_with'

export type ArticleFilterType<T extends keyof ArticleItem, S extends FilterOperator, U extends string> = `${T}[${S}]${U}`

export interface Methods {
  get: {
    query?: {
      limit?: number,
      offset?: number,
      filters?: ArticleFilterType<keyof ArticleItem, FilterOperator, string> | string
    }
    resBody: CommonList<ArticleItem>
  }
}