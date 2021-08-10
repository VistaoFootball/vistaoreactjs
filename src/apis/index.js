import axios from "axios";

const api = axios.create({
  baseURL: process.env.VISTAO_API_ENDPOINT,
});

export const registerUser = (userRegister) => {
  api.post("/api/v1/profile/users/register", {
    ...userRegister,
  });
};
