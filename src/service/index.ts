import axios from "axios";

const baseURL = "";

const instance = axios.create({
  baseURL,
  timeout: 3000,
});

export { baseURL };
export default instance;
