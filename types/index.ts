export type Category = {
  name: string
}

export type Article = {
  id: string,
  title: string,
  body: string,
  description: string,
  publishedAt: string,
  category: Category | null
}