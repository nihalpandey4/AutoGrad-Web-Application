import React from "react";

import AssessmentFormItem from "./AssessmentFormItems";
import Modal from "./Modal";

class AssessmentForm extends React.Component {
  state = { responses: [],modal:false };

  componentDidMount=()=> {
    document.addEventListener("visibilitychange",async()=>{
      if(document.visibilityState==="hidden"){
        this.setState({modal:true})
      }
    })
  }

  renderModalAction=()=>{
    
    return (
      <div className="actions">
        <button className="ui button green" onClick={() => this.handleSubmit()}>
          Submit Test
        </button>
      </div>
    );
  }

  renderModal = ()=>{
    if (this.state.modal===false){
      return ;
    }
    return (
      <Modal 
      header = "Tab switching detected, Submiting test. Press ok to save responses"
      actions = {this.renderModalAction()}
      />
    )
  }

  componentWillUnmount=()=>{
    document.removeEventListener("visibilitychange",()=>{
      console.log("Unmounting Tab detection");
    });
  }

  onSave = async (responseBlock, id) => {
    let flag = "n";
    const responses = this.state.responses;
    responses.map((response) => {
      if (response.id === id) {
        response.Answer = responseBlock.Answer;
        flag = "y";
      }
      return response;
    });
    if (flag === "n") {
      responses.push({ ...responseBlock, id });
    }
    await this.setState({ responses: responses });
  };

  handleSubmit =async (e) => {
    if (e) {
      e.preventDefault();
    }
    await this.props.saveResponses(this.state.responses);
    this.props.onSubmitTest();
  };



  render() {
    const renderItems = this.props.qA.map((item, index) => {
      return (
        <AssessmentFormItem
          correctAnswer={item.CorrectAnswer}
          onSave={this.onSave}
          key={index}
          id={index}
          question={item.Question}
          maxMarks={item.MaxMarks}
          wordLimit={this.props.wordLimit}
        />
      );
    });
    return (
      <div className="AssessmentForm">
        <div className="ui segment">
          {this.renderModal()}
          <form className="ui form">
            {renderItems}
            <div className="ui hidden divider"></div>
          </form>
          <div className="center">
            <button
              className="ui button large red"
              onClick={(e) => {
                this.handleSubmit(e);
              }}>
              Submit test
            </button>
            <div className="hiddenDiv" >{this.props.timer(this.handleSubmit)}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default AssessmentForm;
