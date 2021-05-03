import { CommonItem, CommonList } from '../common'

export interface CategoryItem extends CommonItem {
  name: string
}

export interface Methods {
  get: {
    resBody: CommonList<CategoryItem>
  }
}