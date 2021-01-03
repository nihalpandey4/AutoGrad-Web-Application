import React from "react";
import { connect } from "react-redux";

import { getTestForTeacher } from "../../../actions";
import AssessmentHeader from "../../AssessmentHeader";
import NavBar from "../../NavBar";

class Evauation extends React.Component {
  state = { userId: null, student: null, testPaper: null };

    componentDidMount=()=> {
        if (this.props.userId !== this.state.userId) {
            this.props.getTestForTeacher(this.props.match.params.id);
            this.setState({ userId: this.props.userId });
        }    
    }

  componentDidUpdate = () => {
    if (this.props.userId !== this.state.userId) {
      this.props.getTestForTeacher(this.props.match.params.id);
      this.setState({ userId: this.props.userId });
    }
    if (this.state.testPaper !== this.props.testPaper) {
      this.setState({testPaper: this.props.testPaper});
      if (this.props.testPaper) {
        this.setState({
          student: this.props.testPaper.students[
            this.props.match.params.rollno
          ],
        });
      }
    }
  };

  renderAssessmentHeader=()=>{
      return (
          <>
            <div>Max Marks : {this.state.testPaper.maxMarks}</div>
            <div>{this.state.testPaper.topic}</div>
            <div style={{ display: "flex" }}>
                Marks Obtained : {this.state.student.marksObtained}
            </div>
          </>
      )
  }

  renderAssessmentForm=()=>{
      if(this.state.student && this.state.testPaper){
        return <AssessmentHeader
        upperHeader={this.renderAssessmentHeader()}
        student={this.state.student}
      />;
      }
  }

  render=()=> {
    return (
      <div className="Evaluation">
        <NavBar />
        {this.renderAssessmentForm()}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  return { userId: state.auth.userId, testPaper: state.allTests[id] };
};

export default connect(mapStateToProps, { getTestForTeacher })(Evauation);
