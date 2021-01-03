import React from "react";
import { connect } from "react-redux";

import NavBar from "../../NavBar";
import Modal from "../../Modal";
import { getTestForTeacher } from "../../../actions";
import Loader from "../../Loader";

class TestStats extends React.Component {
  state = { userId: null};

  componentDidUpdate = () => {
    if (this.state.userId === null && this.props.userId !== this.state.userId) {
      this.setState({ userId: this.props.userId });
      this.props.getTestForTeacher(this.props.match.params.id);
    }
  };

  renderModalHeader = () => {
    return (
      <div className="customui">
        <div className="row">
          <div className="column">Topic : {this.props.testPaper.topic}</div>
          <div className="column">
            Attempted by - {" "+this.props.testPaper.attemptedBy} student(s)
          </div>
        </div>
      </div>
    );
  };

  renderContent = () => {
    if (this.props.testPaper==null) {
      return <Loader />;
    }
    return <Modal header={this.renderModalHeader()}  />;
  };

  render = () => {
    return (
        <div>
          {this.renderContent()}
          <div><NavBar/></div>
        </div>
    )
  };
}

const mapStateToProps = (state, ownProps) => {
  return {
    userId: state.auth.userId,
    testPaper: state.allTests[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { getTestForTeacher })(TestStats);
