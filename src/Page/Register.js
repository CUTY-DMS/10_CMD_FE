import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { signUp } from "../apis/auth/signUp";  // signUp 함수 임포트

const Register = () => {
  const [data, setData] = useState({
    accountId: "",
    password: "",
    email: "",
    phonenumber: "",
    major: "",
    classNumber: "",
    birth: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSignup = async (event) => {
    event.preventDefault();

    if (data.password !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.😭");
      return;
    }

    try {
      await signUp(data);
      navigate("/login");  // 회원가입 성공 시 로그인 페이지로 이동
    } catch (err) {
      console.error("회원가입 요청 실패:", err);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSignup}>
        <Title>회원가입</Title>

        <InputRow>
          <InputWrapper>
            <Label>아이디</Label>
            <Input
              name="accountId"
              placeholder="아이디를 입력하세요."
              onChange={handleChange}
              required
            />
          </InputWrapper>

          <InputWrapper>
            <Label>이메일</Label>
            <Input
              name="email"
              placeholder="이메일을 입력하세요."
              onChange={handleChange}
              required
            />
          </InputWrapper>
        </InputRow>

        <InputRow>
          <InputWrapper>
            <Label>비밀번호</Label>
            <Input
              name="password"
              type="password"
              placeholder="비밀번호를 입력하세요."
              onChange={handleChange}
              required
            />
          </InputWrapper>

          <InputWrapper>
            <Label>비밀번호 확인</Label>
            <Input
              type="password"
              placeholder="비밀번호 확인"
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </InputWrapper>
        </InputRow>

        <InputRow>
          <InputWrapper>
            <Label>이름</Label>
            <Input
              name="phonenumber"
              placeholder="이름을 입력하세요."
              onChange={handleChange}
              required
            />
          </InputWrapper>

          <InputWrapper>
            <Label>전공</Label>
            <Input
              name="major"
              placeholder="전공을 입력하세요."
              onChange={handleChange}
              required
            />
          </InputWrapper>
        </InputRow>

        <InputRow>
          <InputWrapper>
            <Label>학번</Label>
            <Input
              name="classNumber"
              placeholder="학년과 반을 입력하세요. (ex: 1100 => 1학년 1반)"
              onChange={handleChange}
              required
            />
          </InputWrapper>

          <InputWrapper>
            <Label>생년월일</Label>
            <Input
              name="birth"
              placeholder="생년월일을 입력하세요. (ex: 080101)"
              onChange={handleChange}
              required
            />
          </InputWrapper>
        </InputRow>

        <Button type="submit">회원가입</Button>

        <NoAccount>
          이미 계정이 있으신가요? <CButton to="/login">로그인</CButton>
        </NoAccount>
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
  padding: 0; /* 위, 아래 여백 제거 */
  margin: 0;
  overflow: hidden; /* 스크롤 제거 */
`;

const Form = styled.form`
  background-color: #f2f2f2;
  padding: 40px 30px;
  border-radius: 8px;
  width: 680px; /* 폼 너비를 더 넓게 조정 */
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* 입력 필드와 버튼을 왼쪽 정렬 */
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  margin-top: 70px; /* 폼을 화면 중앙보다 아래로 이동 */
`;

const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 30px; /* 제목과 첫 입력 필드 사이의 간격을 넓힘 */
  color: #333;
  align-self: flex-start; /* 제목을 왼쪽 정렬 */
`;

const InputRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px; /* 필드 간 간격 조정 */
`;

const InputWrapper = styled.div`
  width: 45%; /* 입력 필드 너비를 줄여서 컴팩트하게 만듦 */
`;

const Label = styled.label`
  font-size: 0.9rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 8px;
  display: block;
`;

const Input = styled.input`
  width: 90%;
  padding: 10px;
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
  padding: 12px;
  margin-top: 25px;
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

const NoAccount = styled.p`
  color: #333;
  margin-top: 20px;
  font-size: 0.85rem;
  text-align: center; /* 가운데 정렬 */
  width: 100%; /* 가운데 정렬을 위해 전체 너비 사용 */
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

export default Register;