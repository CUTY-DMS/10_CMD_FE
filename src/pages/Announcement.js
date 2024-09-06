import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { getNotiList } from "../apis/get/getNotiList";
import { Announce } from "../components/Announce";
import Plus from "../assets/Vector.png";

export const Announcement = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    getNotiList().then(res => {
      if(res) setAnnouncements(res.data); 
    });
  }, []);

  return (
    <Wrapper>
      <Announcements>
        <Write to="/AnnounceWrite">
          <img src={Plus} alt="Add" /> 
          <h1>글쓰기</h1>
        </Write>
        {
          announcements.length !== 0 ? ( 
            announcements.map((announcement, index) => (
              <Announce
                key={index}
                id={announcement.id}
                title={announcement.title.length >= 20 ? `${announcement.title.substr(0, 20)}..` : announcement.title}
              />
            ))
          ) : ( 
            <h1>로딩중...</h1>
          )
        }
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

export default Announcement;
