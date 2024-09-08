import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { signUp } from "../apis/auth/signUp";

const Register = () => {
  const [data, setData] = useState({
  accountId: "",
  password: "",
  email: "1",
  phonenumber: "1",
  major: "",
  classNumber: "",
  birth: "1"
  });
  const [check, setCheck] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSignUp = () => {
    if (data.password === check) {
      signUp(data).then((res) => {
        if (res) {
          alert("계정이 생성되었습니다");
          window.location.href = "/Login";
        }
      }).catch((error) => {
        console.error("회원가입 오류:", error);
      });
    } else {
      alert("비밀번호를 확인해주세요.");
    }
  };

  return (
    <Container>
      <Form onSubmit={(e) => e.preventDefault()}>
        <Title>회원가입</Title>

        {/* 아이디, 이름, 비밀번호, 비밀번호 확인  */}
        <InputWrapper>
          <Label>아이디</Label>
          <Input
            name="userId"
            placeholder="아이디를 입력하세요"
            onChange={handleChange}
            required
          />
        </InputWrapper>

        <InputWrapper>
          <Label>이름</Label>
          <Input
            name="username"
            placeholder="이름을 입력하세요"
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

        <InputWrapper>
          <Label>비밀번호 확인</Label>
          <Input
            type="password"
            placeholder="비밀번호를 입력하세요"
            onChange={(e) => setCheck(e.target.value)}
            required
          />
        </InputWrapper>

        {/* 학년, 반, 과목 필드 한 줄 배치 */}
        <OptionsRow>
          <SelectWrapper>
            <Label>학년</Label>
            <Select name="grader" onChange={handleChange}>
              <option value="" disabled>
                학년
              </option>
              <option value={1}>1학년</option>
              <option value={2}>2학년</option>
              <option value={3}>3학년</option>
            </Select>
          </SelectWrapper>

          <SelectWrapper>
            <Label>반</Label>
            <Select name="schoolClass" onChange={handleChange}>
              <option value="" disabled>
                반
              </option>
              <option value={1}>1반</option>
              <option value={2}>2반</option>
              <option value={3}>3반</option>
              <option value={4}>4반</option>
            </Select>
          </SelectWrapper>

          <SelectWrapper>
            <Label>과목</Label>
            <Select name="subjectType" onChange={handleChange}>
              <option value="" disabled>
                과목
              </option>
              <option value="KOREAN">국어</option>
              <option value="MATH">수학</option>
              <option value="SOCIAL">사회</option>
              <option value="SCIENCE">과학</option>
              <option value="ENGLISH">영어</option>
              <option value="PROGRAMMING">자료구조</option>
              <option value="WEBBASIC">웹 기초</option>
              <option value="ATHLETIC">체육</option>
              <option value="MUSIC">음악</option>
            </Select>
          </SelectWrapper>
        </OptionsRow>

        <Button type="button" onClick={handleSignUp}>
          회원가입
        </Button>

        <NoAccount>
          이미 계정이 있으신가요? <CButton to="/Login">로그인</CButton>
        </NoAccount>
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
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  margin-top: 70px;
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
  width: 96.5%;
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

const OptionsRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 15px;
`;

const SelectWrapper = styled.div`
  width: 32%;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  border: none; 
  border-bottom: 2px solid #ccc;
  background: transparent; /* 배경 투명하게 설정 */
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

const NoAccount = styled.p`
  color: #333;
  margin-top: 15px;
  font-size: 0.85rem;
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

export default Register;
