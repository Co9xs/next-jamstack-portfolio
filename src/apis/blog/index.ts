import { CommonItem, CommonList, ImageItem } from '../common'
import { AuthorItem } from '../authors'
import { CategoryItem } from '../categories'
import { TagItem } from '../tags'
export interface ArticleItem extends CommonItem {
  title: string
  body: string
  ogimage: ImageItem
  category?: CategoryItem
  tags?: TagItem[]
  author?: AuthorItem
  related_articles?: ArticleItem[]
  emoji?: string
}

type FilterOperator = 'equals' | 'not_equals' | 'less_than' | 'greater_than' | 'contains' | 'exists' | 'not_exists' | 'begin_with'

export type ArticleFilterType<T extends keyof ArticleItem, S extends FilterOperator, U extends string> = `${T}[${S}]${U}`

export interface Methods {
  get: {
    query?: {
      limit?: number,
      offset?: number,
      filters?: ArticleFilterType<keyof ArticleItem, FilterOperator, string> | string 
      // ↑template literal types does not work?
    }
    resBody: CommonList<ArticleItem>
  }
}

export * from "./_contentId@string"