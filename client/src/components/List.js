import React from "react"

import ListItem from "./ListItem";

class List extends React.Component{
    render() {
        return (
            <div className="ui middle aligned divided list">
                <ListItem/>
            </div>
        )
    }
}

export default List;