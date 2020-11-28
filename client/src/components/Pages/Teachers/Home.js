import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getAllTests } from "../../../actions";

import Header from "../../Header";
import List from "../../List";
import "./home.css"

class Home extends React.Component {
  state = {render:false}

  componentDidMount = () => {
    this.props.getAllTests(this.props.userId);
  };

  renderContent = (item) => {
    return (
      <React.Fragment>
        <div>
          <span className="ui subheading">Topic = {item.topic}</span>
        </div>
        <div>
          <span className="ui subheading">Test Id = {item.testId}</span>
        </div>
      </React.Fragment>
    );
  };

  renderRightContent = (item) => {
    return (
      <React.Fragment>
        <div className="ui button">Edit</div>
        <button
          className="ui blue button"
          onClick={() => navigator.clipboard.writeText(item.testId)}>
          Share
        </button>
        <Link to={`teacher/delete/${item.testId}`} className="ui red button">
          Delete
        </Link>
      </React.Fragment>
    );
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
          <List name="My tests" items={this.props.tests} content = {this.renderContent} rightContent = {this.renderRightContent} type= "justified" />
          <Link to="/teacher/new" className="circular ui button primary">
            <h1 className="newTest"></h1>
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