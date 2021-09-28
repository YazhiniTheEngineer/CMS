import React from "react";

function Card(props){
    return(
        <div>
            <h3>{props.title}</h3>
            <p>{props.task}</p>
            <p>{props.radio}</p>
        </div>
    );
}
export default Card;