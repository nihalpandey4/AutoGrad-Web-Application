import React from 'react'
import Header from "../../Header";
import {Field,reduxForm} from "redux-form";
import {connect} from "react-redux";
import {v4 as uuidv4} from "uuid";

import QandABlock from "../../QandABlock";
import {createTest} from "../../../actions";

class New extends React.Component {
    state ={list:[1]}

    addQuestion=()=>{
        let temp =this.state.list;
        temp.push(1);
        this.setState({list:temp});
    }

    renderNumberInput =({input,label})=>{
        return(
            <div className="three wide field">
                <label>{label}</label>
                <input {...input} type="number" required />
            </div>
        );
    }

    onSubmit=(formValues)=>{
        const testId=uuidv4();
        const userId = this.props.userId;
        let request={};
        request.createdBy=userId;
        request.attemptedBy=0;
        request.testId = testId;
        request.timeLimit =formValues.timeLimit;
        request.wordLimit = formValues.wordLimit;
        request.qA=[];
        let i=0;
        while(formValues[`Question${i}`]){
            let sample = {};
            sample[`Question`]=formValues[`Question${i}`];
            sample[`CorrectAnswer`]=formValues[`CorrectAnswer${i}`];
            sample[`MaxMarks`]=formValues[`MaxMarks${i}`];
            request.qA.push(sample);
            i=i+1;
        }
        this.props.createTest(request);
    }

    render(){
        const renderedQuestions = this.state.list.map((waste,index)=>{
            return <QandABlock counter={index} key={index} />
        })
        return (
            <div > 
                <Header activeElement = {"New Test"} to="/teacher/new"/>
                <h4 style={{textAlign:"center"}}>All Fields are necessary</h4>
                <form className="ui form" onSubmit={this.props.handleSubmit(this.onSubmit)}>

                    <div className="ui hidden divider"></div>

                    <div className="fields">
                            <Field name="wordLimit" label="Word Limit" component={this.renderNumberInput} />
                            <div className="ten wide field"></div>
                            <Field name="timeLimit" label="Time Limit(in minutes)" component={this.renderNumberInput} />
                    </div>

                    <div className="ui hidden divider"></div>

                    {renderedQuestions}

                    <div style={{display:"flex",justifyContent:"center"}}>
                        <div className="circular ui button primary" onClick={this.addQuestion}>
                            <h1>+</h1>
                        </div>
                    </div>

                    <div className="ui hidden divider"></div>
                    <div className="ui hidden divider"></div>

                    <div className="field" style={{textAlign:"center"}}>
                        <button className="ui button huge red" type="submit" onClick={()=>{console.log("submission initiated")}}>
                            Create Test Id
                        </button>
                    </div>

                </form>
            </div>
        )
    }
}

const wrappedForm= reduxForm({
    form:"createNewTest"
})(New);

export default connect(null,{
    createTest
})(wrappedForm)