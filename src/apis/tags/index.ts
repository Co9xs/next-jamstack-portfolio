import { CommonItem, CommonList } from '../common'

export interface TagItem extends CommonItem {
  name: string
}

export interface Methods {
  get: {
    resBody: CommonList<TagItem>
  }
}