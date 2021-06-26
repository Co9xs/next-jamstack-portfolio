import marked from 'marked'
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

export const markdownToHtml = (markdown: string): string => {
  marked.setOptions({
    gfm: true,
    breaks: true,
  });
  return marked(markdown)
}

export const createOgpUrl = (title: string) => {
  return `https://res.cloudinary.com/fujishima/image/upload/l_text:Sawarabi%20Gothic_90_bold:${encodeURI(title)},co_rgb:FFF,w_1200,c_fit/v1622604816/ogp/OgpImage_1_fdwdbv.png`
}