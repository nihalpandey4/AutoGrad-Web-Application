import React from "react";

class TestStatus extends React.Component{
    state = {visible:"true"}

    renderContent = ()=>{
        return (
            <div className="ui segment">
                Test status
            </div>
        )
    }

    render=()=>{
        return this.state.visible && this.renderContent();
    }
}

export default TestStatus;