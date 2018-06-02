import React from 'react'

export default function tab(props) {

    const style = {
        backgroundColor: props.active ? "black" : "white",
        color: props.active ? "white" : "black",
        
        width: `${props.width}%`,
        fontSize: "2.4rem",
        paddingTop: ".5rem"
    }

    return (
        <button onClick={props.handleClick} style={style} >
            {props.name}
        </button>
    )
}