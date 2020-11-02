import React from "react";
import {connect} from "react-redux";

import {getTestId} from "../../actions"
import GoogleOAuth from "../GoogleOAuth";

class Login extends React.Component {
  onChange = (event) => {
      this.props.getTestId(event.target.value);
  };

  handleSubmit = (event)=>{
      event.preventDefault();
      if(!event.target.value){
        window.alert("Enter valid test id");
      }
  }

  render() {
    return (
      <div className="ui middle aligned center aligned grid login-window">
        <div className="column">
          <h2 className="ui teal image header">
            <div className="content">Welcome to AutoGrad</div>
          </h2>

          <form className="ui large form error">
            <div className="ui stacked segment">
              <div className="field">
                <div className="ui left icon input">
                  <i className="user icon"></i>
                  <input
                    type="text"
                    value={this.props.testId}
                    name="test-id"
                    placeholder="Test Id (cannot remain empty)"
                    onChange={this.onChange}
                    required = {true}
                  />
                </div>
              </div>
              <button type = "submit" className="ui fluid large teal submit button" onClick = {this.handleSubmit}>Enter</button>
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

const mapStateToProps = (state)=>{
    return {
      testId:state.testId,
      isSignedIn:state.auth.isSignedIn
    };
}


export default connect(mapStateToProps,{
    getTestId
})(Login);