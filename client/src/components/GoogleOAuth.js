import React from "react"
import {connect} from "react-redux";

import {signIn,signOut} from "../actions";

//connect fn is used to convert all the data in the redux store which is known as state into props
//signin and singnout action creators are passed as functions using prop system

class GoogleOAuth extends React.Component{
    componentDidMount(){
        //this function is executed only once when it is rendered first time
        window.gapi.load("client:auth2",()=>{
            window.gapi.client.init({
                clientId: "150690585145-c0bk32r9msgekdeohliuc5ple0vq80f8.apps.googleusercontent.com",
                scope :"email"
            }).then(()=>{
                this.user=window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.user.isSignedIn.get());
                this.user.isSignedIn.listen(this.onAuthChange);
            });
        });
        //gapi is of window scope
        //gapi is initialised using client id and scope this is a promise hence then ()
        //then () is executed once the promise is fulfilled
        //class variable user  = auth instance 
        //for checking the initial state of the auth it is passed in .onAuthChange()
        //eventlistener on the state of sign in is attahched using default fn present in gapi "onAuthChange"
    }

    onAuthChange = (isSignedIn)=>{
        if(isSignedIn){
            this.props.signIn(this.user.currentUser.get().getId());
            //incase while signing the user in store his email id, Id will of numerical form rather than being normal id.
        }
        else{
            this.props.signOut();
        }
    }

    signButton = () =>{
        //this fn is a helper function to conditionally render the content based on whether the user is signed in
        if(this.props.isSignedIn===null){
            return <div className="item">Checking...</div>
        }
        else if (this.props.isSignedIn===true){
            return (
                <button className = "ui red google button" onClick = {()=>{this.user.signOut()}}>
                    <i className = "google icon"/>
                        Sign Out
                </button>
            )
        }
        else{
            return (
                <button className = "ui red google button" onClick = {()=>{this.user.signIn()}}>
                <i className = "google icon"/>
                    Sign in with Google
                </button>
            )
        }
    }

    render () {
        return (
            <>{this.signButton()}</>
        )
    }
}

const mapStateToProps = (state) =>{
    return { isSignedIn:state.auth.isSignedIn};
}

export default connect(
    mapStateToProps,
    {signIn,signOut}
)(GoogleOAuth);