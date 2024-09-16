import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import { getSTDInfo } from "../apis/get/getSTDInfo";

export const STDInfoSeemore = () => {
  const { id } = useParams();
  const [sInfo, setSInfo] = useState([]);
  const subjectInfo = {
    "SECURITY": "정보보안",
    "FRONTEND": "프론트엔드",
    "BACKEND": "백엔드",
    "AI": "인공지능",
    "EMBEDED": "임베디드",
    "IOS": "IOS",
    "DESIGN": "디자인",
    "ANDROID": "안드로이드",
    "GAME": "게임개발"
  }

  useEffect(() => {
    getSTDInfo(id).then(res => {
      if (res) {
        const data = Object.values(res.data);
        setSInfo(data);
      }
    })
  }, [id]) 

  return (
    <Wrapper>
      <Body>
        <Box>
          {
            sInfo.length !== 0 
            ? <>
              <StudentWrapper>
                <img src="/imgs/Logo.svg" alt="" width="80" height="60" />
                <StudentName>{sInfo[0]}</StudentName>
              </StudentWrapper>
              <Info>
                <InfoTitle>
                  <Name>이름</Name>
                  <Number>학번</Number>
                  <Birthday>생년월일</Birthday>
                  <Major>전공분야</Major>
                  <Club>동아리</Club>
                </InfoTitle>
                <Infos>
                  <NameA>{sInfo[0]}</NameA>
                  <NumberA>{sInfo[1]}{sInfo[2]}{sInfo[3].toString().padStart(2, '0')}</NumberA>
                  <BirthdayA>{sInfo[5]}</BirthdayA>
                  <MajorA>{subjectInfo[sInfo[6]]}</MajorA>
                  <ClubA>{sInfo[4]}</ClubA>
                </Infos>
                <Line></Line>
                <Seats></Seats>
              </Info>
            </>
            : <h1 style={{justifySelf: "center"}}>로딩중...</h1>
          }
        </Box>
      </Body>
    </Wrapper>
  );
};

const Seats = styled.div`
  width: 330px;
  height: 230px;
  background-color: black;
`;

const Line = styled.div`
  width: 2px;
  height: 330px;
  display: flex;
  margin-left: 170px;
  margin-right: 170px;
  background-color: #787878;
`;

const Infos = styled.div`
  gap: 43px;
  display: flex;
  flex-direction: column;
`;

const NameA = styled.div`
  margin-left: 80px;
  font-size: 20px;
  color: black;
  font-weight: bold;
`;

const NumberA = styled.div`
  margin-left: 80px;
  font-size: 20px;
  color: black;
  font-weight: bold;
`;

const BirthdayA = styled.div`
  margin-left: 80px;
  font-size: 20px;
  color: black;
  font-weight: bold;
`;

const MajorA = styled.div`
  margin-left: 80px;
  font-size: 20px;
  color: black;
  font-weight: bold;
`;

const ClubA = styled.div`
  margin-left: 80px;
  font-size: 20px;
  color: black;
  font-weight: bold;
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

const InfoTitle = styled.div`
  gap: 40px;
  display: flex;
  flex-direction: column;
`;

const Name = styled.div`
  font-size: 20px;
  color: #787878;
  font-weight: bold;
`;

const Number = styled.div`
  font-size: 20px;
  color: #787878;
  font-weight: bold;
`;

const Birthday = styled.div`
  font-size: 20px;
  color: #787878;
  font-weight: bold;
`;

const Major = styled.div`
  font-size: 20px;
  color: #787878;
  font-weight: bold;
`;

const Club = styled.div`
  font-size: 20px;
  color: #787878;
  font-weight: bold;
`;

const StudentWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 70px;
  margin-top: 80px;
`;

const StudentName = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-left: 25px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 89vh;
  background-color: #333;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;
  height: 450px;
  background-color: #ffffff;
  border-radius: 30px;
`;

export default STDInfoSeemore;
