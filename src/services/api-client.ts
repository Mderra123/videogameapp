import axios from "axios";

const ApiClient = axios.create({
  baseURL: `https://api.rawg.io/api`,
});

export default ApiClient;
