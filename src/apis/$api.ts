/* eslint-disable */
// prettier-ignore
import { AspidaClient, dataToURLString } from 'aspida'
// prettier-ignore
import { Methods as Methods0 } from './authors'
// prettier-ignore
import { Methods as Methods1 } from './authors/_contentId@string'
// prettier-ignore
import { Methods as Methods2 } from './blog'
// prettier-ignore
import { Methods as Methods3 } from './blog/_contentId@string'
// prettier-ignore
import { Methods as Methods4 } from './categories'
// prettier-ignore
import { Methods as Methods5 } from './categories/_contentId@string'
// prettier-ignore
import { Methods as Methods6 } from './popular_articles'
// prettier-ignore
import { Methods as Methods7 } from './tags'
// prettier-ignore
import { Methods as Methods8 } from './tags/_contentId@string'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/authors'
  const PATH1 = '/blog'
  const PATH2 = '/categories'
  const PATH3 = '/popular_articles'
  const PATH4 = '/tags'
  const GET = 'GET'

  return {
    authors: {
      _contentId: (val1: string) => {
        const prefix1 = `${PATH0}/${val1}`

        return {
          get: (option?: { config?: T }) =>
            fetch<Methods1['get']['resBody']>(prefix, prefix1, GET, option).json(),
          $get: (option?: { config?: T }) =>
            fetch<Methods1['get']['resBody']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      get: (option?: { config?: T }) =>
        fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option).json(),
      $get: (option?: { config?: T }) =>
        fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH0}`
    },
    blog: {
      _contentId: (val1: string) => {
        const prefix1 = `${PATH1}/${val1}`

        return {
          get: (option?: { query?: Methods3['get']['query'], config?: T }) =>
            fetch<Methods3['get']['resBody']>(prefix, prefix1, GET, option).json(),
          $get: (option?: { query?: Methods3['get']['query'], config?: T }) =>
            fetch<Methods3['get']['resBody']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get'; query: Methods3['get']['query'] }) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        }
      },
      get: (option?: { query?: Methods2['get']['query'], config?: T }) =>
        fetch<Methods2['get']['resBody']>(prefix, PATH1, GET, option).json(),
      $get: (option?: { query?: Methods2['get']['query'], config?: T }) =>
        fetch<Methods2['get']['resBody']>(prefix, PATH1, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get'; query: Methods2['get']['query'] }) =>
        `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    categories: {
      _contentId: (val1: string) => {
        const prefix1 = `${PATH2}/${val1}`

        return {
          get: (option?: { config?: T }) =>
            fetch<Methods5['get']['resBody']>(prefix, prefix1, GET, option).json(),
          $get: (option?: { config?: T }) =>
            fetch<Methods5['get']['resBody']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      get: (option?: { config?: T }) =>
        fetch<Methods4['get']['resBody']>(prefix, PATH2, GET, option).json(),
      $get: (option?: { config?: T }) =>
        fetch<Methods4['get']['resBody']>(prefix, PATH2, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH2}`
    },
    popular_articles: {
      get: (option?: { config?: T }) =>
        fetch<Methods6['get']['resBody']>(prefix, PATH3, GET, option).json(),
      $get: (option?: { config?: T }) =>
        fetch<Methods6['get']['resBody']>(prefix, PATH3, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH3}`
    },
    tags: {
      _contentId: (val1: string) => {
        const prefix1 = `${PATH4}/${val1}`

        return {
          get: (option?: { config?: T }) =>
            fetch<Methods8['get']['resBody']>(prefix, prefix1, GET, option).json(),
          $get: (option?: { config?: T }) =>
            fetch<Methods8['get']['resBody']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      get: (option?: { config?: T }) =>
        fetch<Methods7['get']['resBody']>(prefix, PATH4, GET, option).json(),
      $get: (option?: { config?: T }) =>
        fetch<Methods7['get']['resBody']>(prefix, PATH4, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH4}`
    }
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
