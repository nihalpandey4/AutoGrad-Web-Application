import React from "react";
import {BrowserRouter,Route} from "react-router-dom";

import "./App.css"
import Login from "./Pages/Login";
import TeacherHome from "../components/Pages/Teachers/Home"

class App extends React.Component{
    render=()=>{
        return(
            <div className="ui container App">
                <BrowserRouter>
                    <Route path="/" exact component = {Login} />
                    <Route path ="/teacher" exact  component={TeacherHome} />
                </BrowserRouter>
            </div>
        )
    }
}

export default App;