import React from 'react';
const person = (props) =>{
    return (<div>
        <p onClick={props.click}> I am {props.name} and my age is {props.age} </p>
        <p>{props.children}</p>
        <input type="text" onChange={props.change}></input>
        </div>)
}

export default person