import axios from "axios";

export const signUp = async (data) => {
  try { return await axios.post(`http://52.65.160.119:8080/signup/admin`, data); }
  catch(err) { alert(err); }
}