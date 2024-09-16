import React, { useState } from 'react';
import { styled } from 'styled-components';
import Header from '../components/Header';

export const AnnounceWrite = () => {
  const [data, setData] = useState({
    title: "",
    content: "",
    phoneNumber: "User Name" // Simulate logged-in user's name
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = () => {
    const storedNotices = JSON.parse(localStorage.getItem('notices')) || [];
    storedNotices.push(data);
    localStorage.setItem('notices', JSON.stringify(storedNotices));
    alert("글이 성공적으로 작성되었습니다.😎");
    window.location.href = "/announcement";
  };

  return (
    <Wrapper>
      <Header />
      <ContentContainer>
        <InputContainer>
          <Title name="title" placeholder="제목" onChange={handleChange} />
          <Text name="content" rows="25" placeholder="내용을 입력하세요" onChange={handleChange} />
        </InputContainer>
        <ButtonContainer>
          <SubmitButton onClick={handleSubmit}>완료</SubmitButton>
        </ButtonContainer>
      </ContentContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #f8f9fa; /* Light gray background */
  padding-top: 70px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%; /* Adjusted width */
  background-color: #ffffff; /* White background */
  margin-top: 30px;
  padding: 30px;
  border-radius: 12px; /* Slightly rounded corners */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1); /* Subtle shadow */
`;

const InputContainer = styled.div`
  width: 94%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.input`
  width: 100%;
  padding: 12px;
  font-size: 20px; /* Increased font size for better readability */
  border: 1px solid #ced4da; /* Light border color */
  border-radius: 4px; /* Slightly rounded corners */
  outline: none;

  &:focus {
    border-color: #15181b; /* Highlight color on focus */
  }
`;

const Text = styled.textarea`
  width: 100%;
  height: 300px;
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ced4da; 
  border-radius: 4px; 
  resize: none; 
  outline: none;

  &:focus {
    border-color: #6d7379; 
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 20px;
`;

const SubmitButton = styled.button`
  width: 120px;
  height: 45px;
  background-color: #3f4142; 
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px; 
  font-weight: bold; 
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #4c4f52; 
  }
`;

export default AnnounceWrite;
