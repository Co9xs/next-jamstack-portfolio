import { CommonObject } from '../common'
import { ArticleItem } from '../blog'

export interface Methods {
  get: {
    resBody: CommonObject<ArticleItem>
  }
}