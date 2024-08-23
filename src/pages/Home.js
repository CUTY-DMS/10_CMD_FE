import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: #f0f0f0;
`;

const StyledImg = styled.img`
  height: 380px;
  position: fixed;
  top: 0;
  left: 0;
  width: 413px;
`;


const LoginLink = styled(Link)`
  position: absolute;
  top: 50%;
  right: 25%;
  transform: translate(50%, -50%);
  font-size: 24px;
  color: black;
  text-decoration: none;
`;

const Home = () => {
  return (
    <HomeContainer>
      <StyledImg src='Images/CMD_logo 4.png' alt='Logo' />
      <LoginLink to="/login">서비스 이용을 위해 로그인 하기</LoginLink>
    </HomeContainer>
  );
};

export default Home;
