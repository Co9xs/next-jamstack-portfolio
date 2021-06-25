import api from './$api'
import aspida, { FetchConfig } from '@aspida/fetch'
import { API_ENDPOINT } from "@/utils/constants"

const fetchConfig: FetchConfig = {
  baseURL: API_ENDPOINT,
  throwHttpErrors: true,
  headers: {
    "X-API-KEY": process.env.API_KEY
  }
}

export const fetchClient = api(aspida(fetch, fetchConfig))
