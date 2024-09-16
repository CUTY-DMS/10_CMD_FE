import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import Login from "./Page/Login";
import Header from "./components/Header";
import GlobalStyle from "./GlobalStyle";
import Register from "./Page/Register";
import STDInfo from "./Page/STDInfo";
import STDInfoSeemore from "./Page/STDInfoSeemore";
import Announcement from "./Page/Announcement";
import AnnounceRead from "./Page/AnnounceRead";
import AnnounceWrite from "./Page/AnnounceWrite";
import AnnounceEdit from "./Page/AnnounceEdit";
import MainTable from "./Page/Main";
import { AuthContext } from "./contexts/AuthContext";

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
          <Route path="/signup" element={<Register />} />
          <Route path="/studentinform" element={<STDInfo />} />
          <Route path="/seemore" element={<STDInfoSeemore />} />
          <Route path="/announcement" element={<Announcement />} />
          <Route path="/announcement/:id" element={<AnnounceRead />} />
          <Route path="/announcement/edit/:id" element={<AnnounceEdit />} />
          <Route path="/timetable" element={<MainTable />} />
          <Route path="/AnnounceWrite" element={<AnnounceWrite />} />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
