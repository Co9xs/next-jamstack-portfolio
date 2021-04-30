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
  category: Category | null,
  ogimage?: string,
  tags?: Tag[],
  author?: Author
  relatedArticles: Article[]
}

export type Author = {
  displayName: string,
  description: string,
  image: string
}

export type Tag = {
  id: string,
  name: string
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