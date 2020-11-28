import React from "react";

class Listitems extends  React.Component{
    state = {onHover:false}

    render(){
        return(
            <div className="item">
                <div className="right floated content">
                    {this.props.rightContent}
                </div>
                <div className="content">
                    {this.props.content}
                </div>
            </div>
        ) 
    }
}

export default Listitems;