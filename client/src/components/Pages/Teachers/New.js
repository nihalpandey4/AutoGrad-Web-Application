import React from 'react'
import NavBar from "../../NavBar";
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

    renderNumberInput =({input,label,type,width})=>{
        return(
            <div className={`${width} wide field center`}>
                <label>{label}</label>
                <input className="field" {...input} type={type} required />
            </div>
        );
    }

    onSubmit=(formValues)=>{
        let maxMarks=0 ;
        const testId=uuidv4();
        const userId = this.props.userId;
        let request={};
        request.createdBy=userId;
        request.attemptedBy=0;
        request.testId = testId;
        request.timeLimit =formValues.timeLimit;
        request.wordLimit = formValues.wordLimit;
        request.topic = formValues.topic;
        request.qA=[];
        let i=0;
        while(formValues[`Question${i}`]){
            let sample = {};
            sample[`Question`]=formValues[`Question${i}`];
            sample[`CorrectAnswer`]=formValues[`CorrectAnswer${i}`];
            sample[`MaxMarks`]=formValues[`MaxMarks${i}`];
            maxMarks = maxMarks + Number(sample[`MaxMarks`])
            request.qA.push(sample);
            i=i+1;
        }
        request["maxMarks"] =maxMarks;
        this.props.createTest(request);
    }

    render(){
        const renderedQuestions = this.state.list.map((waste,index)=>{
            return <QandABlock counter={index} key={index} />
        })
        return (
            <div > 
                <NavBar activeElement = {"New Test"} to="/teacher/new"/>
                <h4 style={{textAlign:"center"}}>All Fields are necessary</h4>
                <form className="ui form" onSubmit={this.props.handleSubmit(this.onSubmit)}>

                    <div className="ui hidden divider"></div>

                    <div className="fields">
                            <Field name="wordLimit" label="Word Limit" type="number" width="three" component={this.renderNumberInput} />
                            <Field  name="topic" label="Topic of the Test" type="text" width="eight"  component={this.renderNumberInput} />
                            <Field name="timeLimit" label="Time Limit(in minutes)" type="number" width="three" component={this.renderNumberInput} />
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
                        <button className="ui button huge red" type="submit">
                            Create Test Id
                        </button>
                    </div>

                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {userId:state.auth.userId}
}

const wrappedForm= reduxForm({
    form:"createNewTest"
})(New);

export default connect(mapStateToProps,{
    createTest
})(wrappedForm)