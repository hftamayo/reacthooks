import React from 'react';
import './hwork02.css';

/*
receive an array and display each element

*/

const char2text = (props) => {
    return (
        <div>
            <p className="letterSign">
                {props.text2Char}
            </p>
        </div>
    )
}

export default char2text;