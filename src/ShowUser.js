import React from "react";

function GetUser(props) {

    console.log(props.user)
    const userArray = []; 
    let user = props.user
    Object.keys(user).map((value ,index) => {
        userArray.push(<span key={index}>{value} : {user[value]} </span>)
    })
    return <ul>{userArray}</ul>
};

export default GetUser;