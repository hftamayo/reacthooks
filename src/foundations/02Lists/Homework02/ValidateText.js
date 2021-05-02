import React from 'react';
/*
validate text entered length
output tthe result to the user
If the length is less than 5, the user get a Sweet Alert message
*/
const validatetext = (props) => {
    return (
        <div>
            <p>
                The text entered length is {props.myTxtLength}<br />
                {props.myTxtLength <=3 ? 
                "The text length is less than 4 characters" : 
                "The text length is aproved"}
            </p>
        </div>
    )
}

export default validatetext;