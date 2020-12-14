import React from "react";
import { Timer } from "react-countdown-clock-timer";

import "./header.css";

const Header = (props) => {
  return (
    <div className="customHeader">
      <div className="ui header spacebetween">
        <div>Max Marks : 20</div>
        <div>{props.testPaper.topic}</div>
        <div style={{ display: "flex" }}>
          Time Remaining : &nbsp;
          <Timer
            durationInSeconds={props.testPaper.timeLimit * 60}
            formatted={true}
            isPaused={false}
            onStart={() => {
              alert(` You have ${props.testPaper.timeLimit} minutes`);
            }}
            onFinish={() => {
              alert("Times up!");
            }}
          />
        </div>
      </div>

      <div className="ui hidden divider"></div>

      <div className="ui form"></div>
    </div>
  );
};

export default Header;
