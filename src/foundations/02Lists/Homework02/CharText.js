import React from 'react';
import './hwork02.css';

/*
receive an array and display each element

*/

const char2text = (props) => {
    return (
        <div className="letterSign">
            <span 
            onClick={props.removeCharacter}
            >
                {props.text2Char}
                {/* verify how each array element is displayed */}
                {/*console.log("letra: "+props.text2Char)*/}
            </span>
        </div>
    )
}

export default char2text;