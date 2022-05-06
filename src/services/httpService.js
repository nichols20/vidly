import axios from "axios";

//this line of code tells axios that whenever a http request is called it will include these headers in the request

export function setJwt(jwt) {
  axios.defaults.headers.common["x-auth-token"] = jwt;
}

export default {
  setJwt,
};
