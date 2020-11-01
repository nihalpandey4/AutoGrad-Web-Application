import React from 'react'
import {Link} from "react-router-dom"

import GoogleOAuth from "./GoogleOAuth";

class Header extends React.Component{
    render(){
        return (
            <div className="ui pointing menu">
                <Link to="/" className= "item">AutoGrad</Link>
                <div className="right menu">
                    <Link to="/" className="item">Home</Link>
                    <GoogleOAuth/>
                </div>
            </div>
        )
    }
}

export default  Header;