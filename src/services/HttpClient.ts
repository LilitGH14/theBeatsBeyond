import axios from 'axios';

const headers = {
  "content-type": "application/json",
  "access-control-allow-origin": "*",
};

export const instance = axios.create({});

const onFulfilled = (response: any): any => response?.data;

const token = "";

const setHeaders = (needToken: boolean): void => {
  if (token && needToken) {
    instance.defaults.headers["x-access-token"] = token;
  } else {
    delete instance.defaults.headers["x-access-token"];
  }
};

export const HttpClient = {
  get: async (url: string, needToken = true, config?: any) => {
    setHeaders(needToken);
    return await instance.get(url, { ...config, ...headers }).then(onFulfilled);
  },
  post: async (
    url: string,
    data?: any,
    needToken = true,
    config?: any
  ): Promise<any> => {
    setHeaders(needToken);
    return await instance.post(url, data, { ...config }).then(onFulfilled);
  },
  patch: async (
    url: string,
    data?: any,
    config?: any,
    needToken = true
  ): Promise<any> => {
    setHeaders(needToken);
    return await instance.patch(url, data, { ...config }).then(onFulfilled);
  },
};

export default HttpClient;
