import React, { useState } from "react";
import { styled } from "styled-components";
import { signIn } from "../apis/auth/signIn";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const [data, setData] = useState({
    accountId: "",
    password: ""
  });

  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleLogin = () => {
    signIn(data).then(res => {
      if (res) {
        localStorage.setItem("accessToken", res.data.accessToken);
        localStorage.setItem("refreshToken", res.data.refreshToken);
        window.alert("성공적으로 로그인이 완료되었습니다!"); 
        navigate("/");  
      }
    }).catch((error) => {
      console.error("로그인 오류:", error);
      window.alert("로그인에 실패했습니다. 다시 시도해주세요.");
    });
  };

  return (
    <Container>
      <Form onSubmit={(e) => e.preventDefault()}>
        <Title>로그인</Title>

        <InputWrapper>
          <Label>아이디</Label>
          <Input
            name="accountId"
            placeholder="아이디를 입력하세요"
            onChange={handleChange}
            required
          />
        </InputWrapper>
        <InputWrapper>
          <Label>비밀번호</Label>
          <Input
            name="password"
            type="password"
            placeholder="비밀번호를 입력하세요"
            onChange={handleChange}
            required
          />
        </InputWrapper>

        <LinksWrapper>
          아직 계정이 없으신가요? &nbsp; <CButton to="/SignUp">회원가입</CButton>
        </LinksWrapper>

        <Button type="button" onClick={handleLogin}>
          로그인
        </Button>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #e6e6e6;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

const Form = styled.form`
  background-color: #f2f2f2;
  padding: 30px 20px;
  border-radius: 8px;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  margin-top: 50px;
`;

const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 18px;
  color: #333;
  align-self: flex-start;
`;

const InputWrapper = styled.div`
  width: 100%;
  margin-bottom: 10px;
`;

const Label = styled.label`
  font-size: 0.9rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
  display: block;
`;

const Input = styled.input`
  width: 96%;
  padding: 8px;
  border: none;
  border-bottom: 2px solid #ccc;
  background: transparent;
  font-size: 14px;
  color: #333;
  &:focus {
    border-bottom: 2px solid #333;
    outline: none;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin-top: 15px;
  background-color: #888;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #666;
  }
`;

const LinksWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  font-size: 0.85rem;
  color: #333;
`;

const CButton = styled(Link)`
  cursor: pointer;
  color: #333;
  font-weight: bold;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export default Login;
