import axios from "axios";

const BASE_API_URL = "http://localhost:3301/";

export default {
  getDepo: () => axios.get(`${BASE_API_URL}get-depo`),
  getUser: () => axios.get(`${BASE_API_URL}get-user`),
  getDepoType: () => axios.get(`${BASE_API_URL}get-depo-type`),
  getLoc: () => axios.get(`${BASE_API_URL}get-loc`),
  getStation: () => axios.get(`${BASE_API_URL}get-station`),
  getWorkType: () => axios.get(`${BASE_API_URL}get-worktype`),
  getLocseri: () => axios.get(`${BASE_API_URL}get-locseri`),
  getMarsh: () => axios.get(`${BASE_API_URL}get-marsh`),
  getLocsal: () => axios.get(`${BASE_API_URL}get-locsal`),
  getPnorm: () => axios.get(`${BASE_API_URL}get-pnorm`),
  getFnorm: () => axios.get(`${BASE_API_URL}get-fnorm`),
  getSnorm: () => axios.get(`${BASE_API_URL}get-snorm`),
  getFspeed: () => axios.get(`${BASE_API_URL}get-fspeed`),
};
