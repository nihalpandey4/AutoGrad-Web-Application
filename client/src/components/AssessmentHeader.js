import React from "react";
import { Timer } from "react-countdown-clock-timer";

import "./AssessmentHeader.css";

const Header = (props) => {
  return (
    <div className="customHeader">
      <div className="ui header spacebetween segment">
        <div>Max Marks : {props.testPaper.maxMarks}</div>
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

      <div className="ui spacebetween segment">
        <div className="textWithbutton"> Attendee's Name : {props.student.name} </div>
        <div className="textWithbutton"> Attendee's Roll no : {props.student.rollno} </div>
      </div>
      
    </div>
  );
};

export default Header;