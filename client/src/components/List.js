import React from "react"

import ListItem from "./ListItem";

class List extends React.Component{
    render() {
        const renderItems = Object.keys(this.props.items).map((Id)=>{
            return <ListItem item = {this.props.items[Id]} key = {Id} />;
        })
        return (
            <div className="ui middle aligned divided list">
                {renderItems}
            </div>
        )
    }
}

export default List;