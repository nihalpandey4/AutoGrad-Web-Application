import React from 'react'
import {Link} from "react-router-dom"
import {connect} from "react-redux";
import {getAllTests,getTestByCurrentUser} from "../../../actions"

import Header from "../../Header";

class Home extends React.Component{
  componentDidMount=async()=>{
    await this.props.getAllTests();
    let temp=[];
    Object.keys(this.props.tests).forEach(testId=>{
      if(this.props.tests[testId].createdBy===this.props.userId){
        temp.push(this.props.tests[testId]);
      }
    })
    this.props.getTestByCurrentUser(temp);
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

const mapStateToProps =(state)=>{
  return {
    tests:state.allTests,
    userId:state.auth.userId
  }
}
export default connect(mapStateToProps,{getAllTests,getTestByCurrentUser})(Home);
