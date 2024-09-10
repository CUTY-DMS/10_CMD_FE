import axios from "axios";

export const signUp = async (data) => {
  try {
    const response = await axios.post(`http://43.201.199.73:8080/signup/admin`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (err) {
    
    console.error("회원가입 에러:", err.response ? err.response.data : err.message);
    alert(`회원가입 실패: ${err.response ? err.response.data.message : err.message}`);
    throw err; 
  }
};
