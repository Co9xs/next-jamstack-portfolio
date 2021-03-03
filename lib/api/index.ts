import { BLOG_API_ENDPOINT } from "../../utils"

const key = {
  headers: { 'X-API-KEY': process.env.API_KEY },
};

export const getArticles = async (args?: { offset: number; limit: number }) => {
  const params = args ? `?offset=${args.offset}&limit=${args.limit}` : ""
  try {
    return await fetch(`${BLOG_API_ENDPOINT}${params}`, key)
      .then((res) => res.json())
      .catch(() => null)
  } catch (error) {
    console.error(error)
  }
};