import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AuthContext } from '../contexts/AuthContext';

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
  z-index: 1000; /* 다른 콘텐츠보다 위에 있도록 설정 */
`;

const LogoLink = styled(Link)`
  font-size: 24px;
  font-weight: bold;
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
`;

const LogoImage = styled.div`
  width: 50px;
  height: 50px;
  background-size: contain;
  margin-right: 10px;
  animation: rotate-vertical 5s linear infinite;

  @keyframes rotate-vertical {
    from {
      transform: rotateX(0deg);
    }
    to {
      transform: rotateX(360deg);
    }
  }
`;

const NavLinks = styled.div`
  a {
    color: white;
    margin-left: 20px;
    text-decoration: none;
  }
`;

const Header = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <HeaderContainer>
      <LogoLink to="/">
        <LogoImage />
        CMD
      </LogoLink>
      <NavLinks>
        <Link to="/timetable">시간표</Link>
        <Link to="/noticeBoard">게시판</Link>
        <Link to="/studentinform">학생정보</Link>
        {isAuthenticated ? (
          <Link to="/" onClick={logout}>로그아웃</Link>
        ) : (
          <Link to="/login">로그인</Link>
        )}
      </NavLinks>
    </HeaderContainer>
  );
};

export default Header;
