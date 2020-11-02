import React from "react";
import {Field} from "redux-form";

class QandABlock extends React.Component {

    renderInput({input,label,method}){
        let type ="text";
        if(label==="Maximum Marks"){
            type ="number";
        }
        return (
            <div className={`${method} field`}>
                <label>{label}</label>
                <input {...input} type={type} required/>
            </div>
        )
    }

    render=()=>{
        return (
            <div className="QandABlock">
                <div className="ui hidden divider"></div>
                <Field name={`Question${this.props.counter}`} component={this.renderInput} label="Question" />
                <Field name={`CorrectAnswer${this.props.counter}`} component={this.renderInput} label="Correct Answer" />
                <Field name={`MaxMarks${this.props.counter}`} component = {this.renderInput} label="Maximum Marks" method="inline" />
                <div className="ui hidden divider"></div>
            </div>
        )
    }
   
}

export default QandABlock;