import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class AssessmentFormItem extends React.Component {
  state = {
    qA: {
      Question: this.props.question,
      Answer: "",
      correctAnswer: this.props.correctAnswer,
      maxMarks:this.props.maxMarks,
      marks:0
    },
    wordCount: 0,
  };

  notifySave = ()=> toast.info("Answer saved");

  componentDidMount=()=>{
    this.autoSave();
  }

  onChange = (e) => {
    const answer = e.target.value.split(" ").slice(0,this.props.wordLimit).join(" ");
    this.setState({
      qA: { ...this.state.qA, Answer: answer },
      wordCount: answer.split(" ").length,
    });
  };

  autoSave = () => {
    setInterval(() => {
      this.onSave();
    }, 120000);
  };

  onSave = (e) => {
    if (e) {
      e.preventDefault();
    }
    this.props.onSave(this.state.qA, this.props.id);
    this.notifySave();
  };

  render() {
    return (
      <div className="">
        <ToastContainer hideProgressBar={true} autoClose={1000} />
        <div className="field">
          <label className="question">
            Question - {this.props.question} ({this.props.maxMarks} marks)
          </label>
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
            <button className="ui button blue" onClick={(e) => this.onSave(e)}>
              Save
            </button>
          </div>
        </div>
        <div className="ui hidden divider"></div>
      </div>
    );
  }
}

export default AssessmentFormItem;
