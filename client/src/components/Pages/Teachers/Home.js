import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getAllTests } from "../../../actions";

import Header from "../../Header";
import List from "../../List";

class Home extends React.Component {
  componentDidMount = () => {
    this.props.getAllTests(this.props.userId);
  };

  render() {
    return (
      <>
        <Header />
        <div style={{ textAlign: "center" }}>
          <h2 className="ui center aligned icon header">
            <i className="circular paste icon"></i>
            Tests created by you -
          </h2>
          <List name="My tests" items={this.props.tests} />
          <Link to="/teacher/new" className="circular ui button primary">
            <h1>+</h1>
          </Link>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tests: state.allTests,
    userId: state.auth.userId,
  };
};

export default connect(mapStateToProps, { getAllTests })(Home);
