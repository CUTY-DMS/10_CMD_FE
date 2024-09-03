import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

import { AuthContext } from "../contexts/AuthContext";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 190px;
`;

const Form = styled.form`
  background-color: #f3f3f3;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 30px;
  color: #333;
`;

const Input = styled.input`
  width: 95.5%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const Button = styled.button`
  margin-top: 20px;
  width: 100%;
  padding: 12px;
  background-color: #888;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    background-color: #666;
  }
`;

const SignupLink = styled.div`
  text-align: center;
  margin-top: 20px;
  color: gray;
  border-bottom: 1px solid #333;
`;

const ErrorMessage = styled.p`
  color: red;
  margin-top: 10px;
`;

const LogintoSign = styled.p`
  // 로그인에서 회원가입으로 이동할 때 언더라인 구현
  border-bottom: 1px solid #333;
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/login", { email, password });
      localStorage.setItem("Token", response.headers.authorization);
      login(); // AuthContext의 login 함수 호출
      navigate("/posts");
    } catch (err) {
      setMessage(err.response?.data?.message || "로그인에 실패했습니다.");
    }
  };

  return (
    <Container>
      <Form onSubmit={handleLogin}>
        <Title>로그인</Title>
        <Input
          type="text"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={!message ? "inputLogin" : "err_password"}
        />
        <Input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={!message ? "inputLogin" : "err_password"}
        />
        {message && <ErrorMessage>{message}</ErrorMessage>}
        <Button type="submit">로그인</Button>
        <SignupLink>
          계정이 없다면?{" "}
          <Link to={"/signup"}>
            <LogintoSign to="/signup">회원가입</LogintoSign> 하기
          </Link>
        </SignupLink>
      </Form>
    </Container>
  );
};

export default Login;
