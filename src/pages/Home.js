import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from '../assets/CMD_logo 4.svg';

const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: #f0f0f0;
`;

const StyledImg = styled.img`
  width: 450px;
  height: 400px;
  margin-right: 50px;
  margin-top: 30px;
  position: absolute;
  left: 15%;
`;

const TextContainer = styled.div`
  text-align: center;
  font-size: 42px;
  font-weight: bold;
  position: absolute;
  right: 20%;
  color: #333;
`;

const SubText = styled.p`
  display: block;
  font-size: 22px;
  margin-top: 10px;
  font-weight: normal;
  color: #333; 
`;

const LoginLink = styled(Link)`
  color: #333;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  border-bottom: 1px solid #333;
`;

const Home = () => {
  return (
    <HomeContainer>
      <StyledImg src={Logo} alt='Logo' />
      <TextContainer>
        Class Mate Data
        <SubText>
          서비스 이용을 위하여 <LoginLink to="/login">로그인</LoginLink> 하기
        </SubText>
      </TextContainer>
    </HomeContainer>
  );
};

export default Home;
