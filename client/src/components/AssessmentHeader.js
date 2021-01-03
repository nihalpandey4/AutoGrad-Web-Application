import React from "react";

import "./AssessmentHeader.css";

const Header = (props) => {
  return (
    <div className="customHeader">
      <div className="ui header spacebetween segment">
        {props.upperHeader}
      </div>

      <div className="ui hidden divider"></div>

      <div className="ui spacebetween segment">
        <div className="textWithbutton"> Student's Name : {props.student.name} </div>
        <div className="textWithbutton"> Student's Roll no : {props.student.rollno} </div>
      </div>
      
    </div>
  );
};

export default Header;