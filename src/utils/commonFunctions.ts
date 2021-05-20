import cheerio from 'cheerio';
import highlight from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import json from 'highlight.js/lib/languages/json';
import css from 'highlight.js/lib/languages/css';
import go from 'highlight.js/lib/languages/go';
import python from 'highlight.js/lib/languages/python';
import scss from 'highlight.js/lib/languages/scss';
import 'highlight.js/styles/night-owl.css';

highlight.registerLanguage('javascript', javascript);
highlight.registerLanguage('json', json);
highlight.registerLanguage('css', css);
highlight.registerLanguage('scss', scss);
highlight.registerLanguage('go', go);
highlight.registerLanguage('python', python);

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
    const result = highlight.highlightAuto($(elm).text())
    $(elm).html(result.value)
    $(elm).addClass('hljs')
  })
  return $.html()
}