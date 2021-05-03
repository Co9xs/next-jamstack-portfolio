import { CommonItem, CommonList } from '../common'

export interface AuthorItem extends CommonItem {
  displayName: string
  description: string
  image: ImageItem
}

interface ImageItem {
  url: string
  width: number
  height: number
}

export interface Methods {
  get: {
    resBody: CommonList<AuthorItem>
  }
}