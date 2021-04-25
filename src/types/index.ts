export type Category = {
  id: string,
  name: string,
  articleCount?: number
}

export type CategoryData = {
  contents: Category[],
  totalCount: number
}

export type Article = {
  id: string,
  title: string,
  body: string,
  publishedAt: string,
  category: Category | null
}

export type ArticleData = {
  contents: Article[],
  totalCount: number
}

export type Work = {
  title: string,
  date: string,
  url: string,
  githubUrl: string,
  languages: string[],
  description: string
}

export type Skill = {
  name: string
}