import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AuthContext } from '../contexts/AuthContext';
import { getAdminInfo } from '../apis/get/getAdminInfo';
import logo from '../assets/CMD_logo(dark)png 2 (1).png';

const Header = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    if (isAuthenticated) {
      if (!localStorage.getItem('userInfo')) {
        getAdminInfo().then(res => {
          if (res) {
            const data = res.data;
            const grader = data.classNumber.slice(0, 1); 
            const schoolClass = data.classNumber.slice(1); 
            const subjectType = data.major; 
            const username = data.phonenumber; 

            const userData = [grader, schoolClass, subjectType, username];
            setUserInfo(userData);
            localStorage.setItem('userInfo', JSON.stringify(userData));
          }
        });
      } else {
        const storedData = JSON.parse(localStorage.getItem('userInfo'));
        setUserInfo(storedData);
      }
    }
  }, [isAuthenticated]);

  const handleLogOut = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('userInfo');
    logout();
  };

  return (
    <HeaderContainer>
      <LogoLink to="/">
        <LogoImage src={logo} alt="CMD Logo" />
      </LogoLink>
      <NavLinks>
        <Link to="/timetable">시간표</Link>
        <Link to="/announcement">게시판</Link>
        <Link to="/studentinform">학생정보</Link>
        {isAuthenticated ? (
          <UserInfo>
            <UserName to="/MyProfile">
              {userInfo[0] || '학년'} - {userInfo[1] || '반'} {userInfo[3] || '이름'}
            </UserName>
            <Logout onClick={handleLogOut}>로그아웃</Logout>
          </UserInfo>
        ) : (
          <LoginLink to="/login">로그인</LoginLink>
        )}
      </NavLinks>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  background-color: #333;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 50px;
  height: 50px;
  margin-left: 10px;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  a {
    color: white;
    margin-left: 20px;
    text-decoration: none;
    position: relative;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const UserInfo = styled.div`
  color: white;
  display: flex;
  align-items: center;
`;

const UserName = styled(Link)`
  color: white;
  margin-right: 20px;
  text-decoration: none;
`;

const Logout = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`;

const LoginLink = styled(Link)`
  color: white;
  margin-left: 20px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
