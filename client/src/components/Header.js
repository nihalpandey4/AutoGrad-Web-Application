import React from "react";

import "./header.css";

const Header =(props)=>{
    return(
        <div className="ui header">
            <div className=" huge header headerItem">
                Minutes Remaining : {props.time}
            </div>
            <div className="headerItem">
                sheet
            </div>
            <div className="headerItem">
                <button className="ui button red">Submit test</button>
            </div>
        </div>
    )
}

export default Header;