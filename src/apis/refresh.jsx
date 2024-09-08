import axios from "axios";

export const refresh = async () => {
  const refreshToken = localStorage.getItem("refreshToken");
  const accessToken = localStorage.getItem("accessToken");
  const res = await axios.post(`http://43.201.199.73:8080/reissue`, { "refreshToken": refreshToken })
  if (accessToken === res.data.accessToken) return;
  else {
    localStorage.setItem("accessToken", res.data.accessToken);
    localStorage.setItem("refreshToken", res.data.refreshToken);
    window.location.reload();
  }
}