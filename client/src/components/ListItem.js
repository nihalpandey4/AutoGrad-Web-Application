import React from "react";

class Listitems extends  React.Component{
    render(){
        return(
            <div className="item">
                <div className="right floated content">
                    <div className="ui button">Edit</div>
                    <div className="ui button">Delete</div>
                </div>
                <div className="content">
                    
                </div>
            </div>
        ) 
    }
}

export default Listitems;