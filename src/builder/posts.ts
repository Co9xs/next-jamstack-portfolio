import fs from "fs-extra"
import Parser from "rss-parser"

export default {}

const parser = new Parser()

async function fetchFeedItems(url: string) {
  const feed = await parser.parseURL(url)
  let sourceType
  if (url.indexOf("zenn") !== -1) {
    sourceType = "zenn"
  }

  if (!feed?.items?.length) return []

  // return item which has title and link
  return feed.items
    .map(({ title, contentSnippet, link, isoDate }) => {
      return {
        title,
        contentSnippet: contentSnippet?.replace(/\n/g, ""),
        link,
        isoDate,
        dateMiliSeconds: isoDate ? new Date(isoDate).getTime() : 0,
        sourceType,
      }
    })
    .filter(({ title, link }) => title && link)
}

async function getFeedItemsFromSources(sources: undefined | string[]) {
  if (!sources?.length) return []
  let feedItems = []
  try {
    for (const url of sources) {
      const items = await fetchFeedItems(url)
      if (items) feedItems = [...feedItems, ...items]
    }
    return feedItems
  } catch (error) {}
}

const ZENN_RSS = "https://zenn.dev/co9xs/feed"

;(async function () {
  const items = (await getFeedItemsFromSources([ZENN_RSS])) ?? []
  items.sort((a, b) => b.dateMiliSeconds - a.dateMiliSeconds)
  fs.ensureDirSync(".contents")
  fs.writeJsonSync(".contents/posts.json", items)
})()
