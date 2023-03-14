import axios from "axios";

import errorResponseHandler from "./errorResponseHandler";

const instance = axios.create({
  // baseURL: `https://web-production-7cea.up.railway.app/api/v1/member`,
  baseURL: `${process.env.REACT_APP_HOST}/api/v1/member`,
});

instance.interceptors.response.use(
  (response) => response,
  errorResponseHandler
);

export default instance;
