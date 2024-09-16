import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import { getNotiDetail } from '../apis/get/getNotiDetail';
import { patchAnnc } from '../apis/post/patchAnnounce';

export const AnnounceEdit = () => {
  const { id } = useParams();
  const [data, setData] = useState({
    title: "",
    content: ""
  });

  useEffect(() => {
    getNotiDetail(id).then(res => {
      if(res) {
        setData({
          title: res.data.title,
          content: res.data.content
        });
      }
    }).catch(err => {
      console.error("Failed to fetch notice details:", err);
      alert("공지사항을 불러오는 중 오류가 발생했습니다.");
    });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = () => {
    patchAnnc(data, id).then(res => {
      if (res) {
        console.log(res);
        alert("글이 성공적으로 수정되었습니다.😎");
        window.location.href = "/Announcement";
      } else {
        alert("수정에 실패했습니다. 다시 시도해주세요.");
      }
    }).catch(err => {
      console.error("Failed to patch announcement:", err);
      alert("공지사항 수정 중 오류가 발생했습니다.");
    });
  };

  return (
    <Wrapper>
      <BoxFlex>
        <Textbox>
          <Title 
            name="title" 
            placeholder="제목" 
            value={data.title} 
            onChange={handleChange} 
          />
          <Text 
            name="content" 
            rows="25" 
            cols="155" 
            value={data.content} 
            placeholder="내용을 입력해주세요." 
            onChange={handleChange} 
          />
        </Textbox>
        <FinButton onClick={handleSubmit}>
          <img src="/imgs/Notice.svg" alt="" /> 
          <h1>작성 완료</h1>
        </FinButton>
      </BoxFlex>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 80px);
  gap: 20px;
  background-color: #f5f5f5;
`;

const BoxFlex = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
`;

const Textbox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  background-color: white;
  border-radius: 50px;
  padding: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.input`
  width: 95%;
  height: 40px;
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 20px;
  padding: 10px;
  border: none;
  border-bottom: 2px solid gray;
  outline: none;
  &:focus {
    border-bottom: 2px solid black;
  }
`;

const Text = styled.textarea`
  width: 95%;
  font-size: 16px;
  padding: 10px;
  margin-top: 5px;
  border: none;
  border-radius: 5px;
  outline: none;
  resize: vertical;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  &:focus {
    background-color: white;
  }
`;

const FinButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  align-self: flex-end;
  width: 200px;
  height: 50px;
  margin-top: 20px;
  background-color: white;
  border-radius: 10px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid transparent;
  transition: all 0.3s ease;

  &:hover {
    border: 1px solid black;
    background-color: #f0f0f0;
  }
`;

export default AnnounceEdit;
