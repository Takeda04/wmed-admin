//todo Import packages
import axios, { AxiosInstance, AxiosResponse } from "axios";

const $axios: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_KEY as string,
});

$axios.interceptors.request.use(
  // eslint-disable-next-line
  async (request: any) => ({
    ...request,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("ac")}`,
      "Accept-Language": localStorage.getItem("i18nextLng") || "uz",
    },
  }),
  (error) => Promise.reject(error)
);

$axios.interceptors.response.use(
  (res: AxiosResponse) => res?.data,
  async (error) => {
    if (
      error.response.status === 401 &&
      error.config.url !== "/wmed/user/token/refresh/"
    ) {
      if (localStorage.getItem("re")) {
        try {
          const refreshRes: { access: string } = await $axios.post(
            `/wmed/user/token/refresh/`,
            { refresh: localStorage.getItem("re") }
          );

          localStorage.setItem("ac", refreshRes.access);

          $axios.defaults.headers.common.Authorization = refreshRes.access;

          if (error.config.headers) {
            error.config.headers.Authorization = refreshRes.access;
          }
          return await $axios(error.config);
        } catch (err) {
          console.error(err);
        }
      } else {
        localStorage.clear();
      }
    } else if (error.response.status === 401) {
      localStorage.clear();
      window.location.reload();
    }
    return Promise.reject(error);
  }
);

export default $axios;
