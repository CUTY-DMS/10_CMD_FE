import { refresh } from "./refresh";
import axios from "axios";

export const instance = axios.create({
  baseURL: "http://43.201.199.73:8080",
  timeout: 1000,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`
  }
})

instance.interceptors.response.use(
  function (res) { return res; },
  function (err) { 
    if(err.response.status === 401 || err.response.status === 403) refresh();
    else {
      alert(`${err.response.status}: ${err.response.data.message}`);
      window.location.reload();
    }
  }
)

export default instance;