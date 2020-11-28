import React from "react";

import ListItem from "./ListItem";

class List extends React.Component {
  render() {
    const renderItems = Object.keys(this.props.items).map((id) => {
      return (
        <ListItem
          content={this.props.content(this.props.items[id])}
          rightContent ={this.props.rightContent(this.props.items[id])}
          id={id}
          key={id}
        />
      );
    });
    return (
      <div className="ui relaxed middle aligned celled list">{renderItems}</div>
    );
  }
}

export default List;