import config from "./config.json";
const axios = require("axios");

export async function loginUser(user) {
  const userLogin = {
    email: user.username,
    password: user.password,
  };
  return await axios.post(`${config["vidly-api"]}/auth`, userLogin);
}
