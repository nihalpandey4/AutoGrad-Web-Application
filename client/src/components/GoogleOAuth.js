import React from "react";

class GoogleOAuth extends React.Component{
    state = {isSignedIn:null}

    componentDidMount=()=>{
        window.gapi.load("client:auth2",()=>{
            window.gapi.client.init({
                clientId:"235695202461-2gvmgao3ec2j9u8733p7aasvjsp3hep5.apps.googleusercontent.com",
                scope: "email"
            }).then(()=>{
                this.user = window.gapi.auth2.getAuthInstance();
                this.setState({isSignedIn:this.user.isSignedIn.get()});
            });
        });
    }

    render(){
        return (
            <button className = "ui red google button">Sign in using Google</button>   
        );
    }
}

export default GoogleOAuth;