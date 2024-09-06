import { styled } from 'styled-components';
import React, { useState } from 'react';
import { postAnnc } from '../apis/post/postAnnounce';
import Header from '../components/Header';

export const AnnounceWrite = () => {
  const [data, setData] = useState({
    title: "",
    content: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = () => {
    postAnnc(data).then(res => {
      if (res) {
        alert("글이 성공적으로 작성되었습니다.");
        window.location.href = "/announcement";
      }
    });
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
  background-color: #f0f0f0;
  padding-top: 70px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  background-color: white;
  margin-top: 30px;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 18px;
  border: none;
  border-bottom: 1px solid #ddd;
`;

const Text = styled.textarea`
  width: 100%;
  height: 300px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  resize: none;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 20px;
`;

const SubmitButton = styled.button`
  width: 100px;
  height: 40px;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #555;
  }
`;

export default AnnounceWrite;