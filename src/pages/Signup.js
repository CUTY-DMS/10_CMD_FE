import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

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
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 30px;
  color: #333;
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

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    alert('회원가입이 완료되었습니다.');
    navigate('/login');
  };

  return (
    <Container>
      <Form onSubmit={handleSignup}>
        <Title>회원가입</Title>
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
        <Button type="submit">회원가입</Button>
      </Form>
    </Container>
  );
}

export default Signup;
