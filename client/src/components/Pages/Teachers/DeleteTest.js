import React from "react";
import { connect } from "react-redux";
import {Link} from "react-router-dom";

import Header from "../../Header";
import Modal from "../../Modal";
import { getTestForTeacher, deleteTest } from "../../../actions";
import Loader from "../../Loader"

class TestDelete extends React.Component {
  state = { currUserId: null };
  //this state is just created to rerender this component till the user is verified

  componentDidUpdate = () => {
    if (this.props.userId !== this.state.curr) {
      this.setState({ curr: this.props.userId });
      this.props.getTestForTeacher(this.props.match.params.id);
    }
  };

  renderContent = () => {
    if (!this.props.test) {
      return <Loader />
    }
    return (
      <React.Fragment>
        <h5>{`Topic :  "${this.props.test.topic}" `}</h5>
        <h5>{`Test id :  ${this.props.test.testId} ?`}</h5>
      </React.Fragment>
    );
  };

  renderActions=()=>{
    return(
      <div className="actions" onClick={()=>this.props.deleteTest(this.props.test.testId)}>
        <button className="ui button red">
            Delete
        </button>
        <Link to="/" className="ui button">
            Cancel
        </Link>
      </div>
    )
  }

  render = () => {
    return (
      <div>
        <Modal
          header="Are you sure you want to delete this test ?"
          content={this.renderContent()}
          actions = {this.renderActions()}
        />
        <div>
          <Header />
        </div>
      </div>
    );
  };
}

const mapStateToProps = (state, ownProps) => {
  return {
    test: state.allTests[ownProps.match.params.id],
    userId: state.auth.userId,
  };
};

export default connect(mapStateToProps, { getTestForTeacher, deleteTest })(
  TestDelete
);
