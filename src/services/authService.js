import jwtDecode from "jwt-decode";
import http from "./httpService";
const axios = require("axios");

http.setJwt(getToken());

export async function loginUser(user) {
  const userLogin = {
    email: user.username,
    password: user.password,
  };

  const { data: jwt } = await axios.post(`/auth`, userLogin);
  localStorage.setItem("token", jwt);
}

export async function logoutUser() {
  localStorage.removeItem("token");
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem("token");
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

export function getToken() {
  return localStorage.getItem("token");
}

export default {
  loginUser,
  logoutUser,
  getCurrentUser,
  getToken,
};
