import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import NavBar from "../../NavBar";
import Modal from "../../Modal";
import { getTestForTeacher } from "../../../actions";
import Loader from "../../Loader";
import List from "../../List";

class TestStats extends React.Component {
  state = { userId: null };

  componentDidUpdate = () => {
    if (this.state.userId === null && this.props.userId !== this.state.userId) {
      this.setState({ userId: this.props.userId });
      this.props.getTestForTeacher(this.props.match.params.id);
    }
  };

  renderListContent = (student) => {
    let status = "Checked";
    if (student.status === "Evaluate") {
      status = "Unchecked";
    }
    return (
      <React.Fragment>
        <div>
          <span className="ui subheading">Roll No = {student.rollno}</span>
        </div>
        <div>
          <span className="ui subheading">Status = {status} </span>
        </div>
        <div>
          <span className="ui subheading">Marks = {student.marksObtained}</span>
        </div>
      </React.Fragment>
    );
  };

  renderListRightContent = (student) => {
    return (
      <React.Fragment>
        <Link
          to={`/teacher/test/evaluate/${this.props.match.params.id}/${student.rollno}`}
          className="ui blue button">
          {student.status}
        </Link>
      </React.Fragment>
    );
  };

  renderModalHeader = () => {
    return (
      <div className="customui">
        <div className="row">
          <div className="column">Topic : {this.props.testPaper.topic}</div>
          <div className="column">
            Max Marks : {this.props.testPaper.maxMarks}
          </div>
          <div className="column">
            Attempted by - {" " + this.props.testPaper.attemptedBy} student(s)
          </div>
        </div>
      </div>
    );
  };

  renderModalContent = () => {
    return (
      <>
        <List
          name="Students' stats"
          items={this.props.testPaper.students}
          content={this.renderListContent}
          rightContent={this.renderListRightContent}
          type="justified"
        />
      </>
    );
  };

  renderModalActions = () => {
    return (
      <div className="actions">
        {/* <button className="ui disabled button blue">
          Show selected student
        </button> */}
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </div>
    );
  };

  renderContent = () => {
    if (this.props.testPaper == null) {
      return <Loader />;
    }
    return (
      <Modal
        header={this.renderModalHeader()}
        actions={this.renderModalActions()}
        content={this.renderModalContent()}
      />
    );
  };

  render = () => {
    return (
      <div>
        {this.renderContent()}
        <div>
          <NavBar />
        </div>
      </div>
    );
  };
}

const mapStateToProps = (state, ownProps) => {
  return {
    userId: state.auth.userId,
    testPaper: state.allTests[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { getTestForTeacher })(TestStats);
