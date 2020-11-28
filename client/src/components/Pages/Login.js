import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

import {getTestForAssessment,renderProgrammaticNav} from "../../actions/index"
import GoogleOAuth from "../GoogleOAuth";

class Login extends React.Component {
  componentDidMount=()=> {
    this.props.renderProgrammaticNav(this.props.isSignedIn);
  }
  componentDidUpdate=()=>{
    this.props.renderProgrammaticNav(this.props.isSignedIn);
  }

  handleSubmit = (formValues) => {
    this.props.getTestForAssessment(formValues.testId)
  };

  renderProgrammatic=()=>{
    if(this.props.isSignedIn ===true){
      this.props.history.push("/teacher");
    }
  }

  renderTestIdField = ({input,name,placeholder}) => {
    return (
      <div className="ui left icon input">
        <i className="user icon"></i>
        <input
          type="text"
          name={name}
          placeholder={placeholder}
          {...input}
          required={true}
        />
      </div>
    );
  };

  render() {
    return (
      <div className="ui middle aligned center aligned grid login-window">
        <div className="column">
          <h2 className="ui teal image header">
            <div className="content">Welcome to AutoGrad</div>
          </h2>

          <form
            className="ui large form error"
            onSubmit={this.props.handleSubmit(this.handleSubmit)}>
            <div className="ui stacked segment">
              <div className="field">
                <Field name="testId" placeholder="Test Id (cannot remain empty)" component={this.renderTestIdField} /> 
              </div>
              <button
                type="submit"
                className="ui fluid large teal submit button">
                Enter
              </button>
            </div>
          </form>

          <div className="ui message">
            In case you are a teacher&nbsp;&nbsp; <GoogleOAuth />
          </div>
        </div>
      </div>
    );
  }
}

const wrappedForm = reduxForm({
  form:"testIdForm"
})(Login)

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
    testPaper:state.testPaper
  };
};

export default connect(mapStateToProps,{
  getTestForAssessment,renderProgrammaticNav
})(wrappedForm);
