import axios, {AxiosRequestConfig, AxiosResponse} from "axios";

export interface InterfaceApiConfiguration {
  baseURL: String,
  getApiService: Function
}

const baseURL = "http://localhost:3000";

export const ApiConfig: InterfaceApiConfiguration = {
  baseURL,
  getApiService: () => {
    const service = axios.create({
      baseURL,
    })

    service.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        config.headers = config.headers ?? {};
        // const token = store.getters['authStore/getToken'];
        // if (token) {
        //   config.headers.Authorization = `Bearer ${token}`
        // }
        return config;
      },
      (err) => {
        return Promise.reject(err);
      }
    );

    service.interceptors.response.use(
      (response: AxiosResponse) => {
        return response;
      },
      (error) => {
        throw error;
      }
    );

    return service
  }
}
