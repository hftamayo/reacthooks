/*
general purpose: get user Input and send the prop to UserOutput
*/
import React from 'react';
import './Homework.css';

const userInput = (props) => {
    return(
        <div className="form">
            <p>
                {props.name}<br />
                To update it, please fill in:
                {/*2-way binding*/}
                <input type="text" onChange={props.updateName} value={props.name}/>
            </p>
        </div>
    )
}

export default userInput;