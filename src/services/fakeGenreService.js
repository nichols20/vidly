const axios = require("axios");

export async function getGenres() {
  return await axios.get(` /genres `);
}
