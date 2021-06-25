import fetch from 'node-fetch'
import api from '@/apis/$api';
import aspida, { FetchConfig } from "@aspida/node-fetch"
import { API_ENDPOINT } from '@/utils/constans';

const fetchConfig: FetchConfig = {
  baseURL: API_ENDPOINT,
  throwHttpErrors: true
}

export const nodeFetchClient = api(aspida(fetch, fetchConfig))