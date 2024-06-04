import axios from "axios";

import config from "utils/config";

import { getBasicAuthHeader } from "utils/helpers";

export const httpSignal = axios.CancelToken.source();

const CancelToken = axios.CancelToken;
let requestSignal;

const { apiBaseUrl, basicAuthPassword, basicAuthUsername } = config;

const API = axios.create({
  baseURL: apiBaseUrl,
});

const authHeader = getBasicAuthHeader(basicAuthUsername, basicAuthPassword);

API.interceptors.request.use(
  (config: any) => {
    authHeader && (config.headers!.Authorization = authHeader);
    requestSignal = CancelToken.source();
    config.cancelToken = requestSignal.token;
    return config;
  },
  (error: any) => {
    Promise.reject(error);
  }
);

API.interceptors.response.use(
  async (response: any) => {
    return response;
  },
  async (error: any) => {
    const status = error?.response?.status;
    if (status === 401) {
      return Promise.reject(error);
    }

    return Promise.reject(error);
  }
);

export default API;
