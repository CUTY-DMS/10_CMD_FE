import axios from "axios";

export const signUp = async (data) => {
  try { return await axios.post(`http://43.201.199.73:8080/signup/admin`, data); }
  catch(err) { alert(err); }
}