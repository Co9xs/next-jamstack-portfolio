import { ArticleItem } from '../index'

export type DraftItem = Omit<ArticleItem, 'publishedAt' | 'revisedAt'>
export interface Methods {
  get: {
    query?: {
      draftKey?: string
    }
    resBody: ArticleItem | DraftItem
  }
}