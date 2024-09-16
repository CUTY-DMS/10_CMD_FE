import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import Plus from '../assets/Vector.png';

export const Announcement = () => {
  const [announcements, setAnnouncements] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedNotices = JSON.parse(localStorage.getItem('notices')) || [];
    setAnnouncements(storedNotices);
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    if (!isNaN(date)) {
      return `${date.getFullYear()}.${('0' + (date.getMonth() + 1)).slice(-2)}.${('0' + date.getDate()).slice(-2)} ${date.getHours()}:${('0' + date.getMinutes()).slice(-2)}`;
    }
    return '';
  };

  const handleViewDetail = (id) => {
    navigate(`/AnnounceRead/${id}`);
  };

  const handleEdit = (id) => {
    navigate(`/AnnounceEdit/${id}`);
  };

  const handleDelete = (id) => {
    const updatedAnnouncements = announcements.filter((_, index) => index !== id);
    setAnnouncements(updatedAnnouncements);
    localStorage.setItem('notices', JSON.stringify(updatedAnnouncements));
    alert("삭제되었습니다.");
  };

  return (
    <Wrapper>
      <Announcements>
        <Write to="/AnnounceWrite">
          <img src={Plus} alt="Add" />
          <h1>글쓰기</h1>
        </Write>
        {announcements.length !== 0 ? (
          announcements.map((announcement, index) => (
            <AnnounceBox key={index} onClick={() => handleViewDetail(index)}>
              <h3>{announcement.title.length >= 20 ? `${announcement.title.substr(0, 20)}...` : announcement.title}</h3>
              <p>{formatDate(announcement.date)}</p>
              <Buttons>
                <EditButton onClick={(e) => { e.stopPropagation(); handleEdit(index); }}>수정</EditButton>
                <DeleteButton onClick={(e) => { e.stopPropagation(); handleDelete(index); }}>삭제</DeleteButton>
              </Buttons>
            </AnnounceBox>
          ))
        ) : (
          <h1>게시물이 없습니다.</h1>
        )}
      </Announcements>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  gap: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin-top: 70px;
`;

const Announcements = styled.div`
  gap: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 65%;
`;

const Write = styled(Link)`
  gap: 10px;
  display: flex;
  align-items: center;
  align-self: flex-end;
  justify-content: center;
  padding: 5px;
  cursor: pointer;
  transition: 0.2s;
  border-radius: 15px;
  color: black;
  font-size: 15px;

  img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
`;

const AnnounceBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 20px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f9f9f9;
  }

  h3 {
    margin: 0;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }

  p {
    margin: 5px 0 0 0;
    font-size: 14px;
    color: #777;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

const EditButton = styled.button`
  padding: 5px 10px;
  background-color: #555855;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 12px;

  &:hover {
    background-color: #5d615d;
  }
`;

const DeleteButton = styled.button`
  padding: 5px 10px;
  background-color: #575252;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 12px;

  &:hover {
    background-color: #6b6969;
  }
`;

export default Announcement;
