import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getAllTests } from "../../../actions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "../../NavBar";
import List from "../../List";
import "./home.css";

class Home extends React.Component {
  state = { render: false,tests:"none"};

  componentDidMount = async() => {
    await this.props.getAllTests(this.props.userId);
  };

  copiedTextAlert = () => toast.success("Test ID copied")

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

  copyTestId = (testId) => {
    navigator.clipboard.writeText(testId);
    this.copiedTextAlert();
  };

  renderRightContent = (item) => {
    return (
      <React.Fragment>
        <Link to={`teacher/${item.testId}`} className="ui button">View</Link>
        <button
          className="ui blue button"
          onClick={() => this.copyTestId(item.testId)}>
          Share
        </button>
        <Link to={`teacher/delete/${item.testId}`} className="ui red button">
          Delete
        </Link>
      </React.Fragment>
    );
  };

  renderListHeader = () => {
    return (
      <React.Fragment>
        <h2 className="ui center aligned icon header">
          <i className="circular paste icon"></i>
          Tests created by you
        </h2>
      </React.Fragment>
    );
  };

  render() {
    return (
      <>
        <Navbar />
        <div style={{ textAlign: "center" }}>
          <ToastContainer autoClose={3000} />
          <List
            name="My tests"
            items={this.props.tests}
            content={this.renderContent}
            rightContent={this.renderRightContent}
            type="justified"
            header = {this.renderListHeader()}
          />
          <Link to="/teacher/new" className="circular ui button primary">
            <h1 className="newTest"></h1>
          </Link>
          <div className="ui hidden divider"></div>
          <div className="ui hidden divider"></div>
          <div className="ui hidden divider"></div>
          <div className="ui hidden divider"></div>
          <div className="ui hidden divider"></div>
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
