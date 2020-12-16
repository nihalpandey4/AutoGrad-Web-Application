import React from "react";

class AssessmentFormItem extends React.Component {
  state = {
    qA: {
      Question: this.props.question,
      Answer: "",
      correctAnswer:this.props.correctAnswer
    },
    wordCount: 0,
  };

  onChange = (e) => {
      if(this.props.wordLimit-1<this.state.wordCount){
          return ;
      }
      const answer = e.target.value;
      this.setState({
        qA: { ...this.state.qA, Answer: answer },
        wordCount: answer.split(" ").length,
      });
  }

  onSave=(e)=>{
      e.preventDefault();
      this.props.onSave(this.state.qA,this.props.id);
  }

  render() {
    return (
      <div className="">
        <div className="field">
          <label className="question">Question - {this.props.question}  ({this.props.maxMarks} marks)</label>
        </div>
        <div className="inline fields">
          <div className="fourteen wide field">
            <input
              type="text"
              placeholder="Enter your answer here"
              value={this.state.qA.Answer}
              onChange={(e) => this.onChange(e)}
            />
          </div>
          <div className="two wide field">
            <label>
              {this.state.wordCount}/{this.props.wordLimit}
            </label>
            <button className="ui button blue" onClick={(e)=>this.onSave(e)}>Save</button>
          </div>
        </div>
        <div className="ui hidden divider"></div>
      </div>
    );
  }
}

export default AssessmentFormItem;
