import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getTimeTable } from '../apis/get/getTimeTable';
import { getWeekNumber } from '../utils/getWeekNumber';
import { getEndDate } from '../utils/getEndDate';

export const MainTable = () => {
  const days = ["월", "화", "수", "목", "금"];
  const [timeTable, setTimeTable] = useState([]);
  const [date, setDate] = useState(new Date());
  
  const month = date.getMonth() + 1;
  const weekNum = getWeekNumber();

  useEffect(() => {
    const startOfWeek = new Date();
    startOfWeek.setDate(startOfWeek.getDate() - (startOfWeek.getDay() || 7) + 1);
    setDate(startOfWeek);
  }, []);

  useEffect(() => {
    const fetchTimeTables = async () => {
      const newTimeTable = [];
      let day = Number(`${date.getFullYear()}${(date.getMonth() + 1).toString().padStart(2, "0")}${date.getDate().toString().padStart(2, "0")}`);

      for (let i = 0; i < days.length; i++) {
        let table = [days[i]];
        if ((day + 1) % 100 > getEndDate()) {
          day = day + 100 - getEndDate();
        }

        try {
          const res = await getTimeTable(day.toString(), 1, 3);
          const arr = res.data.hisTimetable?.[1]?.row || [];
          for (let j = 0; j < 7; j++) {
            table[j + 1] = arr[j] ? arr[j].ITRT_CNTNT : "-";
          }
        } catch (error) {
          console.error('Error fetching timetable:', error);
          for (let j = 0; j < 7; j++) {
            table[j + 1] = "-";
          }
        }

        newTimeTable.push(table);
        day += 1;
      }

      setTimeTable(newTimeTable);
    };

    fetchTimeTables();
  }, [date]);

  return (
    <Wrapper>
      <TableWrapper>
        <Title>2024년 {month}월 {weekNum}주차</Title>
        <Table>
          <TableRow>
            <TableHeader>시간/요일</TableHeader>
            {days.map((day, index) => (
              <TableHeader key={index}>{day}</TableHeader>
            ))}
          </TableRow>
          {[...Array(7)].map((_, period) => (
            <TableRow key={period}>
              <TableHeader>{period + 1}교시</TableHeader>
              {timeTable.map((dayData, dayIndex) => (
                <TableCell key={dayIndex}>{dayData[period + 1]}</TableCell>
              ))}
            </TableRow>
          ))}
        </Table>
      </TableWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #f0f0f0;
  position: relative;
  overflow: hidden;
`;

const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 65%;
  position: relative;
  margin-top: 10px;
`;

const Table = styled.div`
  display: table;
  border-collapse: collapse;
  width: 100%;
  margin-top: 20px;
  background-color: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const TableRow = styled.div`
  display: table-row;
  border-bottom: 1px solid #e0e0e0;
`;

const TableHeader = styled.div`
  display: table-cell;
  padding: 14px;
  background-color: #f7f7f7;
  font-weight: bold;
  text-align: center;
  border: 1px solid #ddd;
  font-size: 16px;
  color: #333;
`;

const TableCell = styled.div`
  display: table-cell;
  padding: 14px;
  text-align: center;
  border: 1px solid #ddd;
  font-size: 16px;
  color: #333;
`;

const Title = styled.h1`
  font-size: 30px;
  color: #333;
  margin: 0;
  position: absolute;
  top: -50px;
  left: 0;
  text-align: left;
  margin-top: 10px;
`;

export default MainTable;
