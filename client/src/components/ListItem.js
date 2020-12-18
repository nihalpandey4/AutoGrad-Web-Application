import React from "react";

class Listitems extends  React.Component{
    state = {onHover:false}

    render(){
        return(
            <div className={`item ${this.props.type}`}>
                <div className="right floated content">
                    {this.props.rightContent}
                </div>
                <div className="content">
                    {this.props.content}
                </div>
                {this.props.renderTestStatus}
            </div>
        ) 
    }
}

export default Listitems;