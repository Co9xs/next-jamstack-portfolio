// microCMS上のリスト形式の型
export type CommonList<T extends CommonItem> = {
  contents: T[]
  totalCount: number
  offset: number
  limit: number
}

// microCMSのオブジェクト形式の型
export type CommonObject<T> = Omit<CommonItem, 'id'> & {contents: T[]}

// microCMS上のアイテムの型
export type CommonItem = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string,
}

// microCMS上にアップロードした画像の型
export interface ImageItem {
  url: string
  width: number
  height: number
}