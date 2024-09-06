import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";

// 날짜를 동적으로 계산하여 '2024년 9월 2주차'와 같은 형식으로 표시
const getCurrentWeek = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1; // 0부터 시작하므로 1을 더함
  const weekNumber = Math.ceil(currentDate.getDate() / 7); // 매 주차 계산
  return `${year}년 ${month}월 ${weekNumber}주차`;
};

function TimeTable() {
  const [grade, setGrade] = useState(1); // 기본 학년은 1학년
  const [classNumber, setClassNumber] = useState(1); // 기본 반은 1반

  // 학년 및 반에 따라 시간표를 선택하는 로직 (임의로 추가)
  const getSubjects = () => {
    if (grade === 1) {
      return [
        ["국어", "국어", "체육", "국어", "웹 기초"],
        ["도덕", "사회", "수학", "체육", "과학"],
        ["수학", "사회", "국어", "도덕", "수학"],
        ["영어", "자료구조", "자료구조", "과학", "국어"],
        ["웹 기초", "과학", "국어", "수학", "영어"],
        ["국어", "수학", "과학", "미술", "음악"],
        ["음악", "과학", "체육", "국어", "체육"],
      ];
    } else if (grade === 2) {
      return [
        ["사회", "과학", "체육", "국어", "수학"],
        ["수학", "국어", "영어", "체육", "과학"],
        ["도덕", "과학", "영어", "사회", "미술"],
        ["국어", "수학", "체육", "영어", "음악"],
        ["영어", "과학", "사회", "국어", "미술"],
        ["음악", "수학", "체육", "사회", "국어"],
        ["과학", "국어", "체육", "영어", "수학"],
      ];
    } else {
      return [
        ["국어", "수학", "체육", "영어", "사회"],
        ["과학", "국어", "미술", "수학", "체육"],
        ["체육", "사회", "과학", "음악", "수학"],
        ["영어", "국어", "미술", "과학", "체육"],
        ["수학", "사회", "음악", "국어", "영어"],
        ["국어", "미술", "체육", "수학", "과학"],
        ["음악", "국어", "과학", "수학", "체육"],
      ];
    }
  };

  return (
    <Wrapper>
      <Header />
      <Body>
        <MainPage>
          <TopSection>
            <DateControl>
              <DateText>{getCurrentWeek()}</DateText>
              <ControlPanel>
                <Select onChange={(e) => setGrade(parseInt(e.target.value))} value={grade}>
                  <option value={1}>1학년</option>
                  <option value={2}>2학년</option>
                  <option value={3}>3학년</option>
                </Select>
                <Select onChange={(e) => setClassNumber(parseInt(e.target.value))} value={classNumber}>
                  <option value={1}>1반</option>
                  <option value={2}>2반</option>
                  <option value={3}>3반</option>
                  <option value={4}>4반</option>
                </Select>
              </ControlPanel>
            </DateControl>
          </TopSection>
          <TableWrapper>
            <Table>
              <thead>
                <TableRow>
                  <TableHeader>시간/요일</TableHeader>
                  <TableHeader>월</TableHeader>
                  <TableHeader>화</TableHeader>
                  <TableHeader>수</TableHeader>
                  <TableHeader>목</TableHeader>
                  <TableHeader>금</TableHeader>
                </TableRow>
              </thead>
              <tbody>
                {timeSlots.map((timeSlot, index) => (
                  <TableRow key={index}>
                    <TimeCell>{timeSlot}</TimeCell>
                    {getSubjects()[index].map((subject, idx) => (
                      <SubjectCell key={idx}>{subject}</SubjectCell>
                    ))}
                  </TableRow>
                ))}
              </tbody>
            </Table>
          </TableWrapper>
        </MainPage>
      </Body>
    </Wrapper>
  );
}

const timeSlots = ["1교시", "2교시", "3교시", "4교시", "5교시", "6교시", "7교시"];

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: #f5f5f5;
  align-items: center;
  padding-top: 40px; /* 상단 여백 줄임 */
`;

const MainPage = styled.div`
  width: 80%;
  height: calc(100vh - 40px); /* 헤더 높이 만큼 조정 */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 0px; /* 위쪽 여백 감소 */
`;

const DateControl = styled.div`
  display: flex;
  align-items: center;
  gap: 8px; /* 날짜와 옵션 사이의 간격을 8픽셀로 설정 */
 // margin-bottom: 0px; /* 날짜와 시간표 사이의 간격 줄임 */
`;

const DateText = styled.div`
  margin-top: 50px;
  font-size: 28px; /* 크게 표시 */
  font-weight: bold;
  color: #333; /* 글자 색상 변경 */
`;

const ControlPanel = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Select = styled.select`
  margin-top: 50px;
  padding: 8px;
  font-size: 16px;
`;

const TableWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: auto;
`;

const Table = styled.div`
  display: table;
  border-collapse: collapse;
  width: 100%;
  background-color: #ffffff;
  border: 1px solid #ccc;
  table-layout: fixed;
`;

const TableRow = styled.div`
  display: table-row;
`;

const TableHeader = styled.div`
  display: table-cell;
  padding: 12px;
  text-align: center;
  background-color: #e0e0e0;
  border: 1px solid #ccc;
  font-weight: bold;
  font-size: 18px;
  color: #333;
  position: sticky;
  top: 0;
  z-index: 1;
`;

const TimeCell = styled.div`
  display: table-cell;
  padding: 12px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  border: 1px solid #ccc;
  background-color: #fafafa;
  color: #333;
`;

const SubjectCell = styled.div`
  display: table-cell;
  padding: 12px;
  text-align: center;
  font-size: 18px;
  border: 1px solid #ccc;
  background-color: #ffffff;
  color: #333;
`;

export default TimeTable;
