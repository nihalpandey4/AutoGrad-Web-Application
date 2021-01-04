import React from "react";
import { connect } from "react-redux";

import { getTestForTeacher,submitTest } from "../../../actions";
import AssessmentHeader from "../../AssessmentHeader";
import NavBar from "../../NavBar";
import EvaluationForm from "../../EvaluationForm";

class Evauation extends React.Component {
  state = { userId: null, student: null, testPaper: null };

  componentDidMount = () => {
    if (this.props.userId !== this.state.userId) {
      this.props.getTestForTeacher(this.props.match.params.id);
      this.setState({ userId: this.props.userId });
    }
  };

  componentDidUpdate = () => {
    if (this.props.userId !== this.state.userId) {
      this.props.getTestForTeacher(this.props.match.params.id);
      this.setState({ userId: this.props.userId });
    }
    if (this.state.testPaper !== this.props.testPaper) {
      this.setState({ testPaper: this.props.testPaper });
      if (this.props.testPaper) {
        this.setState({
          student: this.props.testPaper.students[
            this.props.match.params.rollno
          ],
        });
      }
    }
  };

  renderAssessmentHeader = () => {
    return (
      <>
        <div>Max Marks : {this.state.testPaper.maxMarks}</div>
        <div>{this.state.testPaper.topic}</div>
        <div style={{ display: "flex" }}>
          Marks Obtained : {this.state.student.marksObtained}
        </div>
      </>
    );
  };

  updateOneMark=async(id,marks)=>{
      let responses  = this.state.student.responses;
      let totalMarks=0
      responses.map(response=>{
          if(response.id===id){
              response.marks=marks;
          }
          totalMarks=Number(totalMarks)+Number(response.marks);
          return response;
      })
      await this.setState({student:{...this.state.student,responses:responses,marksObtained:totalMarks}});
  }

  updateMarks=(marks)=>{
    this.setState({student:{...this.state.student,marksObtained:marks}});
  }

  handleSubmit = async()=>{
      let testPaper= this.state.testPaper;
      await this.setState({student:{...this.state.student,status:"Re-evaluate"}})
      testPaper.students[this.state.student.rollno]=this.state.student;
      await this.setState({testPaper:testPaper});
      this.props.submitTest(this.state.testPaper.testId,this.state.testPaper,`/teacher/${this.props.match.params.id}`);
  }

  renderAssessmentForm = () => {
    if (this.state.student && this.state.testPaper) {
      return (
        <>
          <AssessmentHeader
            upperHeader={this.renderAssessmentHeader()}
            student={this.state.student}
          />
           <EvaluationForm
            questionPaper={this.state.testPaper.qA}
            student={this.state.student}
            updateMarks={this.updateMarks}
            handleSubmit={this.handleSubmit}
            updateOneMark={this.updateOneMark}
          /> 
          <div className="ui hidden divider"></div>
        </>
      );
    }
  };

  render = () => {
    return (
      <div className="Evaluation">
        <NavBar activeElement={this.props.match.params.id} to={`/teacher/${this.props.match.params.id}`} />
        {this.renderAssessmentForm()}
      </div>
    );
  };
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  return { userId: state.auth.userId, testPaper: state.allTests[id] };
};

export default connect(mapStateToProps, { getTestForTeacher,submitTest })(Evauation);
