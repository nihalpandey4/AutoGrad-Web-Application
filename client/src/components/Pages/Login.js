import React from "react";

import GoogleOAuth from "../GoogleOAuth";

class Login extends React.Component{
    render(){
        return(
            <div className="ui middle aligned center aligned grid login-window">
                <div className="column">

                    <h2 className="ui teal image header">
                        <div className="content">
                            Welcome to AutoGrad
                        </div>
                    </h2>

                    <form className="ui large form">
                        <div className="ui stacked segment">
                            <div className="field">
                                <div className="ui left icon input">
                                    <i className="user icon"></i>
                                        <input type="text" name="test-id" placeholder="Test Id" />
                                </div>
                            </div>
                            <div className="ui fluid large teal submit button">Enter</div>
                        </div>
                    </form>

                    <div className="ui message">
                        In case you are a teacher<br/> <GoogleOAuth />
                    </div>

                </div>
            </div>
        )
    }
}

export default Login;