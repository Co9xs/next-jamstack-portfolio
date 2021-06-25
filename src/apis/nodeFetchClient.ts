import fetch from 'node-fetch'
import api from '@/apis/$api';
import aspida, { FetchConfig } from "@aspida/node-fetch"
import { API_ENDPOINT } from '@/utils/constants';

const fetchConfig: FetchConfig = {
  baseURL: API_ENDPOINT,
  throwHttpErrors: true,
  headers: {
    "X-API-KEY": process.env.API_KEY
  }
}

export const nodeFetchClient = api(aspida(fetch, fetchConfig))