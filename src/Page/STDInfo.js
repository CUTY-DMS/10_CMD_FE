import { styled } from "styled-components";
import React, { useState, useEffect } from "react";
import { getSTDList } from "../apis/get/getSTD"; 

export const STDInfo = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getSTDList().then(res => {
      if (res) {
        const data = localStorage.getItem("userInfo").split(',');
        const filteredStudents = res.data.currentStudent
          .sort((a, b) => a.number - b.number)
          .filter(student => 
            student.grader === Number(data[0]) &&
            student.schoolClass === Number(data[1])
          );

        setStudents(filteredStudents);
      }
    })
  }, [])

  return (
    <Wrapper>
      <StudentGrid>
        {
          students.length !== 0
          ? students.map((student, index) => (
            <StudentCard key={index}>
              <Circle>CMD</Circle>
              <Info>
                <ClassID>{`${student.grader}${student.schoolClass}${student.number.toString().padStart(2, '0')}`}</ClassID>
                <Name>{student.userName}</Name>
                <More>더보기</More>
              </Info>
            </StudentCard>
          ))
          : <LoadingMessage>로딩중...</LoadingMessage>
        }
      </StudentGrid>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 30px;
`;

const StudentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  width: 80%;
`;

const StudentCard = styled.div`
  display: flex;
  align-items: center;
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Circle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #000;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
`;

const Info = styled.div`
  margin-left: 15px;
`;

const ClassID = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const Name = styled.div`
  font-size: 16px;
  margin-top: 5px;
`;

const More = styled.div`
  font-size: 14px;
  color: #999;
  margin-top: 5px;
`;

const LoadingMessage = styled.h1`
  font-size: 24px;
  text-align: center;
  width: 100%;
`;

export default STDInfo;
