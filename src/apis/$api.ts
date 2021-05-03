/* eslint-disable */
// prettier-ignore
import { AspidaClient, dataToURLString } from 'aspida'
// prettier-ignore
import { Methods as Methods0 } from './blog'
// prettier-ignore
import { Methods as Methods1 } from './blog/_contentId@string'
// prettier-ignore
import { Methods as Methods2 } from './categories'
// prettier-ignore
import { Methods as Methods3 } from './categories/_contentId@string'
// prettier-ignore
import { Methods as Methods4 } from './popular_articles'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/blog'
  const PATH1 = '/categories'
  const PATH2 = '/popular-articles'
  const GET = 'GET'

  return {
    blog: {
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
      get: (option?: { query?: Methods0['get']['query'], config?: T }) =>
        fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option).json(),
      $get: (option?: { query?: Methods0['get']['query'], config?: T }) =>
        fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get'; query: Methods0['get']['query'] }) =>
        `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    categories: {
      _contentId: (val1: string) => {
        const prefix1 = `${PATH1}/${val1}`

        return {
          get: (option?: { config?: T }) =>
            fetch<Methods3['get']['resBody']>(prefix, prefix1, GET, option).json(),
          $get: (option?: { config?: T }) =>
            fetch<Methods3['get']['resBody']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      get: (option?: { config?: T }) =>
        fetch<Methods2['get']['resBody']>(prefix, PATH1, GET, option).json(),
      $get: (option?: { config?: T }) =>
        fetch<Methods2['get']['resBody']>(prefix, PATH1, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH1}`
    },
    popular_articles: {
      get: (option?: { config?: T }) =>
        fetch<Methods4['get']['resBody']>(prefix, PATH2, GET, option).json(),
      $get: (option?: { config?: T }) =>
        fetch<Methods4['get']['resBody']>(prefix, PATH2, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH2}`
    }
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
