import React from 'react';
import styled from 'styled-components';

const TimetableContainer = styled.div`
  padding: 20px;
  background-color: #f0f0f0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Timetable = () => {
  return (
    <TimetableContainer>
      <h2>시간표</h2>
    </TimetableContainer>
  );
};

export default Timetable;
