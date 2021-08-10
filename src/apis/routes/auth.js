import { auth_api } from "apis";

export const login = async () => {
  await auth_api.post("/login", {});
};

export const logout = async () => {
  await auth_api.post("/logout", {});
};
