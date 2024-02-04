import axios, { AxiosInstance } from 'axios';
import { SearchModel } from './models/search.model';

const BASE_URL = import.meta.env.VITE_BING_SERVICE_BASE_URL;
const SUBSCRIPTION_KEY = import.meta.env.VITE_BING_SERVICE_SUBSCRIPTION_KEY;

const bingApiService: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const search = async (query: string) => {
  const response = await bingApiService.get<SearchModel>(
    `/v7.0/search?q=${encodeURIComponent(query)}`,
    {
      headers: {
        'Ocp-Apim-Subscription-Key': SUBSCRIPTION_KEY,
      },
    },
  );
  return response.data;
};

export default bingApiService;
