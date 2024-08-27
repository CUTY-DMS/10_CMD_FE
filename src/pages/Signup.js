import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; 
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

const ErrorMessage = styled.p`
  color: red;
  margin-top: 10px;
`;

const SignUp = () => {
  const navigate = useNavigate();

  const [accountId, setAccountId] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [major, setMajor] = useState('');
  const [message, setMessage] = useState('');

  const handleSignUp = () => {
    const userData = {
      accountId,
      password,
      email,
      phonenumber: "1", 
      major,
      classNumber: "1", 
      birth: "1", 
    };

    axios
      .post('/users/signup', userData)
      .then((response) => {
        console.log(response);

        const { access_token, refresh_token } = response.data;

        localStorage.setItem('access_token', access_token);
        localStorage.setItem('refresh_token', refresh_token);

        alert('회원가입 성공');
        if (response.status === 200) {
          navigate('/mylogin');
        }
      })
      .catch((err) => {
        if (err.response && err.response.status === 400) {
          setMessage('잘못된 요청입니다. 입력 정보를 다시 확인해주세요.');
        } else {
          setMessage('회원가입에 실패했습니다.');
        }
        console.log(err);
      });
  };

  return (
    <Container>
      <Form>
        <Title>회원가입</Title>
        <Input
          type="text"
          placeholder="아이디"
          value={accountId}
          onChange={(e) => setAccountId(e.target.value)}
        />
        <Input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="text"
          placeholder="전공"
          value={major}
          onChange={(e) => setMajor(e.target.value)}
        />
        {message && <ErrorMessage>{message}</ErrorMessage>}
        <Button type="button" onClick={handleSignUp}>
          회원가입
        </Button>
      </Form>
    </Container>
  );
};

export default SignUp;
