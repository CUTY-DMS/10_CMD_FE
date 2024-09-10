import axios from "axios";

export const signIn = async (data) => {
  try {
    const response = await axios.post(`http://43.201.199.73:8080/signin`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data; 
  } catch (err) {
    
    console.error("로그인 에러:", err.response ? err.response.data : err.message);
    alert(`로그인 실패: ${err.response ? err.response.data.message : err.message}`);
    throw err; 
  }
};
