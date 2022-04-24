const axios = require("axios");

export async function getGenres() {
  return await axios.get("http://localhost:3900/api/genres");
}
