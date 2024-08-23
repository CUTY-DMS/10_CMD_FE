import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Timetable from './pages/Timetable';
import Header from './components/Header';
import GlobalStyle from './GlobalStyle';
import Signup from './pages/Signup';

import { AuthContext } from './contexts/AuthContext';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      <GlobalStyle />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/timetable" element={<Timetable />} />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
