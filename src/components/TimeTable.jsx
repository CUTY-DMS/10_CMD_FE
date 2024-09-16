// TimeTable.js
import { styled } from "styled-components";

export const TimeTable = ({ Day, Subs }) => {
  return (
    <Wrapper>
      <DayHeader>{Day}</DayHeader>
      <Table>
        {Subs.map((data, index) => (
          <TableRow key={index}>
            <TableCell>{index + 1}교시</TableCell>
            <TableCell>{data}</TableCell>
          </TableRow>
        ))}s
      </Table>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; /* 상단 정렬 */
  width: 280px;
  height: 650px;
  background: white;
  border-radius: 10px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  padding: 20px 10px;
  box-sizing: border-box;
  gap: 10px;
`;

const DayHeader = styled.h1`
  font-size: 24px;
  color: #585858;
  margin: 0;
  text-align: center;
`;

const Table = styled.div`
  width: 100%;
  border-collapse: collapse; /* 테이블 테두리 합치기 */
`;

const TableRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid #e0e0e0; /* 각 행 사이에 선 추가 */
  padding: 5px 0; /* 행 간 간격 */
`;

const TableCell = styled.div`
  width: 50%;
  font-size: 16px; /* 글씨 크기 조정 */
  text-align: center;
  color: #333;
`;
