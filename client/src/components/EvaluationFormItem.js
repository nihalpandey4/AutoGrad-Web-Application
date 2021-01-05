import React from "react";
import "react-toastify/dist/ReactToastify.css";

import "./EvaluationFormItem.css"

class EvaluationFormItem extends React.Component {
  state={marks:0}

  componentDidMount=()=>{
    let marks =Number(this.props.response.marks);
    this.setState({marks:marks});
  }
  
  onChange=async(e)=>{
    let mark = e.target.value;
    await this.props.updateOneMark(this.props.response.id,mark)
    let diff = e.target.value-this.state.marks
    await this.props.updateMarks(diff);
    this.setState({marks:mark})
  }

  render() {
    let autograd="loading..."
    let plagiarism="loading..."
    if(this.props.response.autograd){
      autograd=this.props.response.autograd;
    }
    if(this.props.response.plagiarism){
      plagiarism=this.props.response.plagiarism;
    }
    return (
      <div className="EvaluationFormItem ui segment">
        <div className="bottom inline fields">
          <div className="three wide field">
            <label>Question -</label>
          </div>
          <div className="eleven wide field">
            {this.props.response.Question}
          </div>

          <div className="two wide field">
            <label>({this.props.response.maxMarks} marks)</label>
          </div>
        </div>

        <div className="bottom inline fields">
          <div className="three wide field">
            <label>Reference Answer - </label>
          </div>
          <div className="thirteen wide field">
            {this.props.response.correctAnswer}
          </div>
        </div>

        <div className="inline fields">
          <div className="three wide field">
            <label >Student's Response - </label>
          </div>
          <div className="thirteen wide field">
            {this.props.response.Answer}
          </div>
        </div>


        <div className="bottom inline fields">
          <div className="six wide field">
            <label className="quesiton">Plagiarism - {plagiarism}% </label>
          </div>
          <div className="six wide field">
            <label>Suggested by AutoGrad : {autograd} </label>
          </div>
          <div className="four wide field">
            <label>Marks Awarded: </label>
            <input type="number" min="0" max={this.props.response.maxMarks} onChange={(e)=>this.onChange(e)} value={this.state.marks} />
          </div>
        </div>
      </div>
    );
  }
}

export default EvaluationFormItem;
