import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { signIn } from "../apis/auth/signIn";

export const Login = () => {
  const [data, setData] = useState({
    userId: "",
    userName: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleLogin = () => {
    signIn(data).then((res) => {
      if (res) {
        localStorage.setItem("accessToken", res.data.accessToken);
        localStorage.setItem("refreshToken", res.data.refreshToken);
        window.location.href = "/";
      }
    }).catch((error) => {
      console.error("로그인 오류:", error);
    });
  };

  return (
    <Container>
      <Form onSubmit={(e) => e.preventDefault()}>
        <Title>로그인</Title>

        {/* 아이디 입력 필드 */}
        <InputWrapper>
          <Label>아이디</Label>
          <Input
            name="userId"
            placeholder="아이디를 입력하세요"
            onChange={handleChange}
            required
          />
        </InputWrapper>

        {/* 계정명 입력 필드 */}
        <InputWrapper>
          <Label>이름</Label>
          <Input
            name="userName"
            placeholder="이름을 입력하세요"
            onChange={handleChange}
            required
          />
        </InputWrapper>

        {/* 비밀번호 입력 필드 */}
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

        {/* 계정 관련 링크들 */}
        <LinksWrapper>
          <CButton to="/SignUp">회원가입</CButton>
          <Separator>|</Separator>
          <CButton to="/findPassword">비밀번호 찾기</CButton>
        </LinksWrapper>

        {/* 로그인 버튼 */}
        <Button type="button" onClick={handleLogin}>
          로그인
        </Button>
      </Form>
    </Container>
  );
};

// 스타일 정의

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
  margin-bottom: 18px; /* 제목과 입력 필드 간격 조정 */
  color: #333;
  align-self: flex-start; /* 왼쪽 정렬 */
`;

const InputWrapper = styled.div`
  width: 100%;
  margin-bottom: 10px; /* 입력 필드 간격 조정 */
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
  border: none; /* 상하좌우 경계선 제거 */
  border-bottom: 2px solid #ccc; /* 밑줄만 표시 */
  background: transparent; /* 배경 투명하게 설정 */
  font-size: 14px;
  color: #333;
  &:focus {
    border-bottom: 2px solid #333; /* 포커스 시 밑줄 색상 변경 */
    outline: none; /* 기본 포커스 아웃라인 제거 */
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

const Separator = styled.span`
  color: #333;
  font-weight: bold;
  margin: 0 8px;
`;

const CButton = styled(Link)`
  cursor: pointer;
  color: #333;
  font-weight: bold;
  text-decoration: none; /* 기본 상태에서 언더라인 없음 */
  &:hover {
    text-decoration: underline; /* 호버 시 언더라인 추가 */
  }
`;

export default Login;
