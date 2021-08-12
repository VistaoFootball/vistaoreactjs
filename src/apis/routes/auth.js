import { auth_api } from "apis";

export const login = async (email, password) => {
  const response = await auth_api.post("/login", { email, password });
  return response.data;
};

export const logout = async (auth_token) => {
  await auth_api.post(
    "/logout",
    {},
    { headers: { Authorization: `Token ${auth_token}` } }
  );
};
