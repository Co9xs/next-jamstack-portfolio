export type Category = {
  id: string,
  name: string,
  articleCount?: number
}

export type Article = {
  id: string,
  title: string,
  body: string,
  description: string,
  publishedAt: string,
  category: Category | null
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