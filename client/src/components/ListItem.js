import React from "react";
import {Link} from "react-router-dom";

class Listitems extends  React.Component{
    render(){
        return(
            <div className="item">
                <div className="right floated content">
                    <div className="ui button">Edit</div>
                    <div className="ui blue button">Share</div>
                    <Link to={`teacher/delete/${this.props.id}`} className="ui red button">Delete</Link>
                </div>
                <div className="content">
                    {this.props.content}
                </div>
            </div>
        ) 
    }
}

export default Listitems;