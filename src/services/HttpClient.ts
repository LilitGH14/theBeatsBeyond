import axios from "axios";

const headers = {
  "content-type": "application/json",
  "access-control-allow-origin": "*",
};

export const instance = axios.create({});

const onFulfilled = (response: any): any => response?.data;

const BASE_URL = "http://localhost:3331";

const setHeaders = (needToken: boolean): void => {
  const token = localStorage?.getItem("token");

  if (token && needToken) {
    instance.defaults.headers["authorization"] = token;
  } else {
    delete instance.defaults.headers["authorization"];
  }
};

export const HttpClient = {
  get: async (
    url: string,
    needToken = true,
    config?: any,
    useBase: boolean = true
  ) => {
    setHeaders(needToken);
    return await instance
      .get((useBase ? BASE_URL : "") + url, { ...config, ...headers })
      .then(onFulfilled);
  },
  post: async (
    url: string,
    data?: any,
    needToken = true,
    config?: any
  ): Promise<any> => {
    setHeaders(needToken);

    return await instance
      .post(BASE_URL + url, data, { ...config })
      .then(onFulfilled);
  },
  patch: async (
    url: string,
    data?: any,
    config?: any,
    needToken = true
  ): Promise<any> => {
    setHeaders(needToken);
    return await instance
      .patch(BASE_URL + url, data, { ...config })
      .then(onFulfilled);
  },
};

export default HttpClient;
