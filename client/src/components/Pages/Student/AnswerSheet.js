import React from "react";
import {connect} from "react-redux";

import {getTestForAssessment} from "../../../actions"
import "./answerSheet.css";
import Header from "../../Header";

class AnswerSheet extends React.Component{
    componentDidMount=()=>{
        this.props.getTestForAssessment(this.props.match.params.id);
    }

    render(){
        console.log(this.props.testPaper);
        return(
            <div className= "answerSheet">
                <Header time={this.props.testPaper.timeLimit} />
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return {testPaper:state.testPaper}
}

export default connect(mapStateToProps,{getTestForAssessment})(AnswerSheet);