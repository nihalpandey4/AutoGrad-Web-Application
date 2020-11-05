import React from 'react'
import {Link} from "react-router-dom"
import {connect} from "react-redux";
import {getAllTests} from "../../../actions"

import Header from "../../Header";

class Home extends React.Component{

  componentDidMount(){
    this.props.getAllTests();
  }

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

export default connect(null,{getAllTests})(Home);
