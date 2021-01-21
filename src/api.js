import axios from "axios";

const BASE_API_URL = "http://localhost:3301/";

export default {
  getDepo: () => axios.get(`${BASE_API_URL}get-depo`),
  getUser: () => axios.get(`${BASE_API_URL}get-user`),
  getDepoType: () => axios.get(`${BASE_API_URL}get-depo-type`),
};
