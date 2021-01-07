import React from "react";
import { Link } from "react-router-dom";

import GoogleOAuth from "./GoogleOAuth";

class Header extends React.Component {

  renderActiveElement = () => {
    if (this.props.activeElement) {
      this.activeElement = this.props.activeElement;
      return (
        <>
          <Link to="/" className="item">
            Home
          </Link>
          <Link to={this.props.to} className="active item">
            {this.activeElement}
          </Link>
        </>
      );
    } else {
      return (
        <Link to="/" className="item active">
          Home
        </Link>
      );
    }
  };

  render() {
    return (
      <div className="ui pointing menu">
        <Link to="/" className="item">
          AutoGrad
        </Link>
        <div className="right menu">
          {this.renderActiveElement()}
          <GoogleOAuth />
        </div>
      </div>
    );
  }
}

export default Header;
