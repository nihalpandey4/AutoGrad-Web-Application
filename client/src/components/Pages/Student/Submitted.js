import React from "react";
import {connect} from "react-redux";

import {evaluate} from "../../../actions"
class Submitted extends React.Component{
    componentDidMount=()=> {
        let testId = this.props.match.params.id;
        let testPaper = this.props.submittedTest;
        try{
            this.props.evaluate(testPaper,testId);
        }
        catch(e){
            console.log(e);
        }
    }

    render=()=> {
        return (
                <div className="ui container">
                    <div className="ui center aligned huge header">
                        <h1 className="center">Test Submitted</h1>
                    </div>
                    <div className="ui hidden divider"></div>
                    <div className="ui center segment">
                        <h3 className="center"><a href="http://localhost:3000/">Click here to continue</a></h3>
                    </div>
                </div>    
        )
    }
}

const mapStateToProps =(state)=>{
    return {submittedTest:state.submittedTest}
}

export default connect(mapStateToProps,evaluate)(Submitted);