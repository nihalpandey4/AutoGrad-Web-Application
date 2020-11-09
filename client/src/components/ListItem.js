import React from "react";

class Listitems extends  React.Component{
    render(){
        const item = this.props.item;
        return(
            <div className="item">
                <div className="right floated content">
                    <div className="ui button">Edit</div>
                    <div className="ui blue button">Share</div>
                    <div className="ui red button">Delete</div>
                </div>
                <div className="content">
                    <div>
                        <span className="ui subheading">Test Id = </span>{item.testId}
                    </div>
                    <div>
                        <span className="ui subheading">Attempted By = </span>{item.attemptedBy}
                    </div>
                </div>
            </div>
        ) 
    }
}

export default Listitems;