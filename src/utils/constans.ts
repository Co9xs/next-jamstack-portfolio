export const API_ENDPOINT: string = 'https://shima.microcms.io/api/v1';
export const ARTICLES_PER_PAGE: number = 6;
export const CATEGORIES_PER_PAGE: number = 10;
export const DEAFULT_HEADER_HEIGHT: number = 103;
export const config = {
  headers: { 'X-API-KEY': process.env.API_KEY },
};