import config from "./config.json";

const axios = require("axios");

export async function getGenres() {
  return await axios.get(` ${config["vidly-api"]}/genres `);
}
