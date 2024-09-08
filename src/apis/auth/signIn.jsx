import axios from "axios";

export const signIn = async (data) => {
  try { return await axios.post(`http://43.201.199.73:8080/login/admin`, data); }
  catch(err) { alert(err); }
}