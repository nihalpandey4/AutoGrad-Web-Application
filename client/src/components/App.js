import React from "react";
import {Router,Route} from "react-router-dom";

import "./App.css"
import Login from "./Pages/Login";
import TeacherHome from "../components/Pages/Teachers/Home"
import history from "./history";

class App extends React.Component{
    render=()=>{
        return(
            <div className="ui container App">
                <Router history={history}>
                    <Route path="/" exact component = {Login} />
                    <Route path ="/teacher" exact  component={TeacherHome} />
                </Router>
            </div>
        )
    }
}

export default App;