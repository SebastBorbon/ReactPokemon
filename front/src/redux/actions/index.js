import { LOGIN } from "./constants";

export const login = (payload) => ({
  type: LOGIN,
  payload,
});
