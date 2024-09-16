import axios from "axios";

export const signUp = async (data) => { 
  try {
    const response = await axios.post(`http://43.201.199.73:8080/auth/signup/admin`, data, {
    });
    
    alert("회원가입이 성공적으로 완료되었습니다.😆");
    return response.data;  
  } catch (err) {
    console.error("회원가입 에러:", err.response ? err.response.data : err.message);
    alert(`회원가입 실패: ${err.response ? err.response.data.message : err.message}`);
    throw err; 
  }
};
