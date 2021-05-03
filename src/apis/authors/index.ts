import { CommonItem, CommonList, ImageItem } from '../common'
export interface AuthorItem extends CommonItem {
  displayName: string
  description: string
  image: ImageItem
}
export interface Methods {
  get: {
    resBody: CommonList<AuthorItem>
  }
}