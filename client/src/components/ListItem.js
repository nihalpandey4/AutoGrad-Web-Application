import React from "react";

class Listitems extends  React.Component{
    render(){
        return(
            <div className="item">
                <div className="right floated content">
                    <div className="ui button">Edit</div>
                    <div className="ui blue button">Share</div>
                    <div className="ui red button">Delete</div>
                </div>
                <div className="content">
                    {this.props.content}
                </div>
            </div>
        ) 
    }
}

export default Listitems;