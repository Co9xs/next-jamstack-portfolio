// 以下はAPI経由で取得してくるデータ以外の型定義
// APIからのレスポンスは./src/apis配下にinterfaceで定義してある

export type Work = {
  title: string,
  date: string,
  url: string,
  githubUrl: string,
  languages: string[],
  description: string
}

export type ExternalPostItem = {
  title: string
  contentSnippet: string
  link: string
  isoDate: string
  dateMiliSeconds: number
  sourceType: "zenn" | "qiita"
}

export type Skill = {
  name: string
}

export type Layout = 'Basic' | 'SideBar'