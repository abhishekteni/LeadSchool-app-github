import React from "react";
import "./Sidebar.css";
import Home from "@material-ui/icons/Home";
import Create from "@material-ui/icons/Create";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/">
              <li className="sidebarListItem">
                <Home className="sidebarIcon" />
                <p className="Linktext">View Students</p>
              </li>
            </Link>
            <Link to="/add">
              <li
                className="sidebarListItem"
                style={{ textDecoration: "none" }}
              >
                <Create className="sidebarIcon" />
                Add Students
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
