import React from "react";
import styled from "styled-components";
import Logo from "../assets/CMD_logo(dark)png 2 (1).png";

const STDInfoSeemore = () => {
  return (
    <Main>
      <Div>
        <Set2>
          <Set>
            <Circle>
              <Log src={Logo}></Log>
            </Circle>
            <Name>
              <b>김이름</b>
            </Name>
          </Set>

          <Ul>
            <Li>
              <Box>
                <L1>이름</L1>
              </Box>
              <L2>김이름</L2>
            </Li>
            <Li>
              <Box>
                <L1>학번</L1>
              </Box>
              <L2>1101</L2>
            </Li>
            <Li>
              <Box>
                <L1>생년월일</L1>
              </Box>
              <L2>2000.01.01</L2>
            </Li>
            <Li>
              <Box>
                <L1>전공분야</L1>
              </Box>
              <L2>프론트엔드</L2>
            </Li>
            <Li>
              <Box>
                <L1>전공동아리</L1>
              </Box>
              <L2>DMS</L2>
            </Li>
          </Ul>
        </Set2>
        <Set3>
          <Ul1>
            <li>
              <A></A>
            </li>
            <li>
              <A></A>
            </li>
            <li>
              <A></A>
            </li>
            <li>
              <A></A>
            </li>
            <li>
              <A></A>
            </li>
          </Ul1>
          <Ul1>
            <li>
              <A></A>
            </li>
            <li>
              <A></A>
            </li>
            <li>
              <A></A>
            </li>
            <li>
              <A></A>
            </li>
            <li>
              <A></A>
            </li>
          </Ul1>
          <Ul1>
            <li>
              <A></A>
            </li>
            <li>
              <A></A>
            </li>
            <li>
              <B></B>
            </li>
            <li>
              <A></A>
            </li>
          </Ul1>
          <Ul1>
            <li>
              <A></A>
            </li>
            <li>
              <A></A>
            </li>
            <li>
              <A></A>
            </li>
            <li>
              <A></A>
            </li>
          </Ul1>
          <Ul1>
            <li>
              <A></A>
            </li>
            <li>
              <A></A>
            </li>
            <li>
              <A></A>
            </li>
            <li>
              <A></A>
            </li>
          </Ul1>
        </Set3>
      </Div>
    </Main>
  );
};

const Set3 = styled.div`
  margin: 0;
`;
const B = styled.div`
  background-color: #000000;
  width: 30px;
  height: 20px;
`;

const A = styled.div`
  background-color: #b0b0b0;
  width: 30px;
  height: 20px;
`;

const Set2 = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 3%;
  gap: 14px;
  margin-top: 5%;
`;

const Box = styled.div`
  width: 83px;
`;
const L2 = styled.p`
  color: #000000;
  font-size: 112%;
`;

const L1 = styled.p`
  color: #787878;
  font-size: 110%;
`;

const Li = styled.li`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;
const Circle = styled.div`
  background-color: #333333;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
`;

const Set = styled.div`
  display: flex;
  flex-direction: row;
  gap: 14px;

  margin-left: 7%;
  width: 240px;
  height: 100px;
`;
const Main = styled.div`
  background: linear-gradient(180deg, rgba(17, 17, 17, 0.07) 0.28%, rgba(17, 17, 17, 0.07) 100%);
  width: 100vw;
  height: 100vh;
  margin: 0px;
  padding: 0px;
  display: flex;
  justify-content: center;
`;

const Div = styled.div`
  background-color: #ffffff;
  width: 68%;
  display: flex;
  /* align-items: center; */
  margin-top: 6.5%;
  margin-bottom: 5%;
  border-radius: 2em;
`;

const Name = styled.div`
  color: #111111;
  display: flex;
  align-items: center;
  font-size: 165%;
`;
const Log = styled.img`
  height: 72px;
`;

const Ul = styled.ul`
  height: auto;
  width: 450px;
  border-right: solid;
`;

const Ul1 = styled.ul`
  height: auto;
  list-style: none;
  display: flex;
  gap: 5px;

  flex-direction: column;
`;

const Jari = styled.div``;
export default STDInfoSeemore;
