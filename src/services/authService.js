import config from "./config.json";
import jwtDecode from "jwt-decode";
const axios = require("axios");

export async function loginUser(user) {
  const userLogin = {
    email: user.username,
    password: user.password,
  };

  const { data: jwt } = await axios.post(
    `${config["vidly-api"]}/auth`,
    userLogin
  );
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

export default {
  loginUser,
  logoutUser,
  getCurrentUser,
};
