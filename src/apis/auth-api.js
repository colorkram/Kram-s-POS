import axios from "../config/axios";

export const register = input =>
  axios.post("http://localhost:8888/user/register", input);
export const login = input =>
  axios.post("http://localhost:8888/user/login", input);
export const getMe = () => axios.get("http://localhost:3000/auth/me");
