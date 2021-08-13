import { auth_api } from "apis";

export const login = async (email, password) => {
  try {
    const response = await auth_api.post("/login", { email, password });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const logout = async (auth_token) => {
  await auth_api.post(
    "/logout",
    {},
    { headers: { Authorization: `Token ${auth_token}` } }
  );
};
