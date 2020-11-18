import React from "react";
import {Router,Route} from "react-router-dom";

import "./App.css"
import Login from "./Pages/Login";
import TeacherHome from "../components/Pages/Teachers/Home"
import history from "./history";
import NewTest from "../components/Pages/Teachers/New";
import AnswerSheet from "../components/Pages/Student/AnswerSheet";
import DeleteTest from "../components/Pages/Teachers/DeleteTest";

class App extends React.Component{
    render=()=>{
        return(
            <div className="ui container App">
                <Router history={history}>
                    <Route path="/" exact component = {Login} />
                    <Route path ="/teacher" exact  component={TeacherHome} />
                    <Route path ="/teacher/new" exact component={NewTest}/>
                    <Route path = "/teacher/delete/:id" component ={DeleteTest} />  
                    <Route path = "/student" exact component={AnswerSheet} />
                </Router>
            </div>
        )
    }
}

export default App;