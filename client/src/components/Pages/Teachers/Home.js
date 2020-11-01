import React from 'react'

import GoogleOAuth from "../../GoogleOAuth";

class Home extends React.Component{
    render(){
        return (
            <div>
                <h1>Teacher home page</h1>
                <GoogleOAuth/>
            </div>
        )
    }
}

export default Home;
