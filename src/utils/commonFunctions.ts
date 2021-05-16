import cheerio from 'cheerio';
import hljs from 'highlight.js'
import 'highlight.js/styles/night-owl.css';

export const convertDateToString = (dt: Date): string => {
  const year = dt.getFullYear();
  const month = ("00" + (dt.getMonth()+1)).slice(-2);
  const date = ("00" + dt.getDate()).slice(-2);
  return `${year}/${month}/${date}`;
}

// ex. range(0, 4) -> [0,1,2,3,4]
export const range = (start: number, end: number): number[] => {
  return [...Array(end - start+1)].map((_, i) => start + i)
}

export const calcReadingTime = (wordsCount: number): number => {
  return Math.ceil(wordsCount / 500)
}

export const applyHighlight = (html: string | Buffer, options?: cheerio.CheerioParserOptions): string => {
  const $ = cheerio.load(html, options);
  $('pre code').each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text())
    $(elm).html(result.value)
    $(elm).addClass('hljs')
  })
  return $.html()
}