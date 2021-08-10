import axios from "axios";

export const api = axios.create({
  baseURL: `${process.env.VISTAO_API_ENDPOINT}/api/v1/`,
});

export const auth_api = axios.create({
  baseURL: `${process.env.VISTAO_API_ENDPOINT}/auth/token/`,
});
