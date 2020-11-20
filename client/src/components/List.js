import React from "react";

import ListItem from "./ListItem";

class List extends React.Component {
  renderContent = (item) => {
    return (
      <React.Fragment>
        <div>
          <span className="ui subheading">Topic = {item.topic}</span>
        </div>
        <div>
          <span className="ui subheading">Test Id = {item.testId}</span>          
        </div>
      </React.Fragment>
    );
  };

  render() {
    const renderItems = Object.keys(this.props.items).map((id) => {
      return <ListItem content={this.renderContent(this.props.items[id])} id ={id} key={id} />;
    });
    return(
       <div className="ui relaxed middle aligned celled list">
        {renderItems}
      </div>
    )
  }
}

export default List;