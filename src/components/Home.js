import React from "react";
import ViewStudent from "./Pages/ViewStudent";
import Sidebar from "./Sidebar/Sidebar";
import Topbar from "./Topbar/Topbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Add from "./Pages/Add";
import Edit from "./Pages/Edit";
const Home = ({ handleLogout }) => {
  return (
    <>
      <Router>
        <Topbar handleLogout={handleLogout} />
        <div className="container">
          <Sidebar />
          <Routes>
            <Route path="/" element={<ViewStudent />} />
            <Route path="/add" element={<Add />} />
            <Route path="/edit/:id" element={<Edit />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default Home;
