import React from "react";

function GetItems(props) {
    console.log(props.max_items)
    const items = [];
    for (let i=props.max_items; i>0; i-- ) {
        items.push(<li key={i}> {i} </li>)
    }
    return <ul>{items}</ul>
}

export default GetItems