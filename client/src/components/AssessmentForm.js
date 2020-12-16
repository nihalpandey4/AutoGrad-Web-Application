import React from "react";

import AssessmentFormItem from "./AssessmentFormItems";

class AssessmentForm extends React.Component {
  state = { responses: [] };

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

  handleSubmit=(e)=>{
      e.preventDefault();
      this.props.onSubmitTest(this.state.responses);
  }

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
        <form className="ui form">
          {renderItems}
          <div className="ui hidden divider"></div>
          <div className="center">
            <button className="ui button large red" onClick={(e)=>{this.handleSubmit(e)}}>Submit test</button>
          </div>
        </form>
        </div>
      </div>
    );
  }
}

export default AssessmentForm;
