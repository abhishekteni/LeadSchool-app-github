import React from "react";
import Notification from "@material-ui/icons/NotificationImportantOutlined";
import Person from "@material-ui/icons/Person";
import Exit from "@material-ui/icons/ExitToApp";

import "./Topbar.css";
const Topbar = ({ handleLogout }) => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Leadschool</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <Notification />
            <span className="topIconBadge ">2</span>
          </div>
          <div className="topbarIconContainer">
            <Person />
            {/* <span className="topIconBadge ">2</span> */}
          </div>
          <div className="topbarIconContainer">
            <Exit onClick={handleLogout} />
            {/* <span className="topIconBadge ">2</span> */}
          </div>
        </div>
      </div>
    </div>
    // <section className="home">
    //   <nav>
    //     <h2>Welcome</h2>
    //     <button onClick={handleLogout}>Logout</button>
    //   </nav>
    // </section>
  );
};

export default Topbar;
