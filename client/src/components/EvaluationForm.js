import React from "react";

import EvaluationFormItem from "./EvaluationFormItem";

class EvaluationForm extends React.Component {
  handleSubmit = () => {
    this.props.handleSubmit();
  };

  updateMarks = (diff) => {
    let marks = this.props.student.marksObtained + diff;
    this.props.updateMarks(marks);
  };

  render() {
    const renderItems = this.props.student.responses.map((response) => {
      return (
        <EvaluationFormItem
          response={response}
          key={response.id}
          updateMarks={this.updateMarks}
        />
      );
    });

    return (
      <div className="AssessmentForm">
        <div className="ui hidden divider"></div>
        <div className="ui hidden divider"></div>
        <div className="ui segment">
          <form className="ui form">{renderItems}</form>
          <div className="ui hidden divider"></div>
          <div className="center">
            <button
              className="ui button large red"
              onClick={(e) => {
                this.handleSubmit(e);
              }}>
              Submit Marks
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default EvaluationForm;
