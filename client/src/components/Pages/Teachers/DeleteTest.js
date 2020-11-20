import React from "react";
import Modal from "../../Modal";
import { connect } from "react-redux";

import { getTestForTeacher, deleteTest } from "../../../actions";

class TestDelete extends React.Component {
  componentDidMount() {
    this.props.getTestForTeacher(this.props.match.params.id);
  }

  renderContent = () => {
    if (!this.props.test) {
      return "Loading ...";
    }
    return (
      <React.Fragment>
        <h5>{`Topic :  "${this.props.test.topic}" `}</h5>
        <h5>{`Test id :  ${this.props.test.testId} ?`}</h5>
      </React.Fragment>
    );
  };

  onActionClicked = () => {
    this.props.deleteTest(this.props.test.testId);
  };

  render = () => {
    return (
      <div>
        <Modal
          header="Are you sure you want to delete this test ?"
          content={this.renderContent()}
          cancelUrl="/"
          actionText="Delete"
          onActionClicked={this.onActionClicked}
        />
      </div>
    );
  };
}

const mapStateToProps = (state, ownProps) => {
  return { test: state.allTests[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { getTestForTeacher, deleteTest })(
  TestDelete
);
