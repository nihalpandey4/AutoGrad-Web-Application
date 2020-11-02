import React from 'react'
import {Link} from "react-router-dom"

import Header from "../../Header";

class Home extends React.Component{

    render(){
        return (
            <>
              <Header/>
              <div style={{textAlign:"center"}}>
                <Link to="/teacher/new" className="circular ui button primary" ><h1>+</h1></Link>
              </div>
            </>
        )
    }
}

export default Home;
