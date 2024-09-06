import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getNotiDetail } from '../apis/get/getNotiDetail';

export const AnnounceRead = () => {
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
    });
  }, [id]);

  return (
    <Wrapper>
      <ContentContainer>
        <TitleSection>
          <TitleInput value={data.title} readOnly />
        </TitleSection>
        <ContentSection>
          <ContentInput value={data.content} readOnly />
        </ContentSection>
      </ContentContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 80px);
  background-color: #f4f4f4;
`;

const ContentContainer = styled.div`
  width: 60%;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const TitleSection = styled.div`
  width: 100%;
  border-bottom: 2px solid #ddd;
  padding-bottom: 20px;
  margin-bottom: 20px;
`;

const TitleInput = styled.input`
  width: 100%;
  border: none;
  font-size: 24px;
  font-weight: bold;
  color: #333;
  outline: none;
  padding: 10px;
  background: none; 
`;

const ContentSection = styled.div`
  width: 100%;
  height: 400px;
  overflow-y: auto;
`;

const ContentInput = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  font-size: 18px;
  line-height: 1.6;
  color: #555;
  outline: none;
  resize: none;
  background: none; 
`;

export default AnnounceRead;
