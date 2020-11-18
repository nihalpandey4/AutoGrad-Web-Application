import React from "react";
import {connect} from "react-redux";
import history from "../../history"

class AnswerSheet extends React.Component{

    render(){
        return(
            <div>Answer sheet</div>
        )
    }
}

const mapStateToProps=(state)=>{
    return {testPaper:state.testPaper}
}

export default connect(mapStateToProps)(AnswerSheet);