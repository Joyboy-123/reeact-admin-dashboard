import React from "react";
import "./topbar.css";
import { Language, NotificationsNone, Settings } from "@mui/icons-material";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">MONKEY D. LUFFY</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">4</span>
          </div>
          <div className="topbarIconContainer">
            <Language/>
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings/>
          </div>
         <img src="https://i.pinimg.com/originals/6e/52/c7/6e52c7fe2447e34bc447b027cc20ea7d.png" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
