import config from "./config.json";
const axios = require("axios");

export async function registerUser(user) {
  const registerUser = {
    email: user.username,
    password: user.password,
    name: user.name,
  };
  return await axios.post(`${config["vidly-api"]}/users`, registerUser);
}
