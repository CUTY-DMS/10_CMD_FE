import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

export const AnnounceRead = () => {
  const { id } = useParams(); // URL에서 id 파라미터 가져오기
  const [data, setData] = useState({
    title: "",
    content: "",
    date: "",
    author: ""
  });
  const [error, setError] = useState(null); // 에러 상태 추가

  useEffect(() => {
    const storedNotices = JSON.parse(localStorage.getItem('notices')) || [];

    // id가 없거나 잘못된 경우 에러 처리
    if (!id || !storedNotices[id]) {
      setError("공지사항을 찾을 수 없습니다.");
      return;
    }

    const noticeDetail = storedNotices[id];
    if (noticeDetail) {
      setData({
        title: noticeDetail.title || "제목 없음",
        content: noticeDetail.content || "내용 없음",
        date: noticeDetail.date || "날짜 정보 없음", // 날짜가 없을 때 기본값
        author: noticeDetail.author || "작성자 정보 없음" // 작성자가 없을 때 기본값
      });
    } else {
      setError("공지사항을 찾을 수 없습니다.");
    }
  }, [id]);

  // 공지사항 변경 사항이 생길 때마다 localStorage에 저장
  useEffect(() => {
    if (data.title || data.content) {
      const storedNotices = JSON.parse(localStorage.getItem('notices')) || [];
      storedNotices[id] = data;
      localStorage.setItem('notices', JSON.stringify(storedNotices));
    }
  }, [data, id]);

  if (error) {
    return (
      <Wrapper>
        <ErrorMessage>{error}</ErrorMessage>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <ContentContainer>
        <TitleSection>
          <TitleInput
            value={data.title}
            onChange={(e) => setData({ ...data, title: e.target.value })}
          />
          <AuthorDate>
            <Author>작성자: {data.author}</Author>
            <Date>{data.date}</Date>
          </AuthorDate>
        </TitleSection>
        <ContentSection>
          <ContentInput
            value={data.content}
            onChange={(e) => setData({ ...data, content: e.target.value })}
          />
        </ContentSection>
      </ContentContainer>
    </Wrapper>
  );
};

// 스타일링
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

const AuthorDate = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #777;
`;

const Author = styled.span``;

const Date = styled.span``;

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

const ErrorMessage = styled.div`
  color: red;
  font-size: 18px;
`;

export default AnnounceRead;
