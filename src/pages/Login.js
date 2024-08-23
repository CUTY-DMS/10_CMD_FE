import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { AuthContext } from '../contexts/AuthContext';

const Container = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

const Form = styled.form`
  background-color: #f3f3f3;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  width: 400px;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 30px;
  color: black;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #888;
  color: white;
  border: none;
  border-radius: 4px;
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
`;

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = localStorage.getItem('username');
    const storedPass = localStorage.getItem('password');

    if (username === storedUser && password === storedPass) {
      login();
      navigate('/');
    } else {
      alert('잘못된 아이디 또는 비밀번호입니다.');
    }
  };

  return (
    <Container>
      <Form onSubmit={handleLogin}>
        <Title>로그인</Title>
        <Input 
          type="text" 
          placeholder="아이디" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
        <Input 
          type="password" 
          placeholder="비밀번호" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <Button type="submit">로그인</Button>
        <SignupLink>
          계정이 없다면? <Link to="/signup">회원가입 하기</Link>
        </SignupLink>
      </Form>
    </Container>
  );
}

export default Login;
