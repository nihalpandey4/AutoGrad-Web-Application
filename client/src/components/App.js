import React from "react";
import {BrowserRouter,Route} from "react-router-dom";

import "./App.css"
import Login from "./Pages/Login";

class App extends React.Component{

    page2 = ()=>{
        return <div>page 2</div>
    }

    render=()=>{
        return(
            <div className="ui container App">
                <BrowserRouter>
                    <Route path="/" exact component = {Login} />
                    <Route path ="/teacher" exact  component={this.page2} />
                </BrowserRouter>
            </div>
        )
    }
}

export default App;