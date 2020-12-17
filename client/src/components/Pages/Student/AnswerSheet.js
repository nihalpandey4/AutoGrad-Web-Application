import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getTestForAssessment, submitTest } from "../../../actions";
import "./answerSheet.css";
import AssessmentHeader from "../../AssessmentHeader";
import Modal from "../../Modal";
import Loader from "../../Loader";
import AssessmentForm from "../../AssessmentForm";

class AnswerSheet extends React.Component {
  state = {
    student: {
      name: "",
      rollno: "",
      consent: "",
    },
    testPaper: null,
  };

  componentDidMount = () => {
    this.props.getTestForAssessment(this.props.match.params.id);
  };

  componentDidUpdate = () => {
    if (this.state.testPaper === null) {
      this.setState({ testPaper: { ...this.props.testPaper } });
    }
  };

  updateStudentDetails = (property, value) => {
    let temp = this.state.student;
    temp[property] = value;
    this.setState({ student: temp });
  };

  renderModalHeader = () => {
    return (
      <div className="customui">
        <div className="row">
          <div className="column">Topic :</div>
          <div className="column">{this.state.testPaper.topic}</div>
        </div>
        <div className="row">
          <div className="column">Time Limit :</div>
          <div className="column">{this.state.testPaper.timeLimit} minutes</div>
        </div>
      </div>
    );
  };

  renderContent = () => {
    return (
      <div className="ui form">
        <form onSubmit={(e) => this.startTest(e)}>
          <div className="two fields">
            <div className="field">
              <label>Name</label>
              <input
                type="text"
                placeholder="Enter Name"
                value={this.state.student.name}
                onChange={(e) =>
                  this.updateStudentDetails("name", e.target.value)
                }
                required
              />
            </div>
            <div className="field">
              <label>Roll Number</label>
              <input
                type="number"
                placeholder="Enter Roll Number"
                onChange={(e) =>
                  this.updateStudentDetails("rollno", e.target.value)
                }
                required
              />
            </div>
            <button type="submit" style={{ display: "none" }} />
          </div>
        </form>
      </div>
    );
  };

  startTest = async (e) => {
    if (e) {
      e.preventDefault();
    }
    try {
      if (this.state.testPaper.students[Number(this.state.student.rollno)]) {
        alert("Already attempted by this user");
        return;
      }
    } catch (e) {
      this.setState({ testPaper: { ...this.state.testPaper, students: {} } });
    }
    await this.setState({ student: { ...this.state.student, consent: "yes" } });
  };

  renderActions = () => {
    return (
      <div className="actions">
        <button className="ui button green" onClick={() => this.startTest()}>
          Start Test
        </button>
        <Link to="/" className="ui button">
          Go back to login
        </Link>
      </div>
    );
  };

  onSubmitTest = async (formValues) => {
    console.log(formValues);
    let students = this.state.testPaper.students;
    const rollno = this.state.student.rollno;
    students[rollno] = { ...this.state.student, responses: formValues };
    const count = this.state.testPaper.attemptedBy;
    await this.setState({
      testPaper: {
        ...this.state.testPaper,
        attemptedBy: count + 1,
        students: students,
      },
    });
    this.props.submitTest(this.state.testPaper.testId, this.state.testPaper);
  };

  renderComponent = () => {
    if (this.state.testPaper === null) {
      return <Loader />;
    }
    if (!this.state.student.consent) {
      return (
        <Modal
          header={this.renderModalHeader()}
          actions={this.renderActions()}
          content={this.renderContent()}
        />
      );
    } else {
      return (
        <>
          <AssessmentHeader
            testPaper={this.state.testPaper}
            student={this.state.student}
          />
          <div className="ui hidden divider"></div>
          <AssessmentForm
            qA={this.state.testPaper.qA}
            wordLimit={Number(this.state.testPaper.wordLimit)}
            onSubmitTest={this.onSubmitTest}
          />
        </>
      );
    }
  };

  render() {
    return <div className="answerSheet">{this.renderComponent()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { testPaper: state.testPaper };
};

export default connect(mapStateToProps, { getTestForAssessment, submitTest })(
  AnswerSheet
);
