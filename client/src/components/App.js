import React from "react";
import { Switch, Router, Route } from "react-router-dom";

import "./App.css";
import Login from "./Pages/Login";
import TeacherHome from "../components/Pages/Teachers/Home";
import history from "./history";
import NewTest from "../components/Pages/Teachers/New";
import AnswerSheet from "../components/Pages/Student/AnswerSheet";
import DeleteTest from "../components/Pages/Teachers/DeleteTest";
import TestStats from "../components/Pages/Teachers/TestStats"

class App extends React.Component {
  render = () => {
    return (
      <div className="ui container App">
        <Router history={history}>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/teacher" exact component={TeacherHome} />
            <Route path="/teacher/new" exact component={NewTest} />
            <Route path ="/teacher/:id" exact component ={TestStats} />
            <Route path="/teacher/delete/:id" component={DeleteTest} />
            <Route path="/student/:id" exact component={AnswerSheet} />
          </Switch>
        </Router>
      </div>
    );
  };
}

export default App;