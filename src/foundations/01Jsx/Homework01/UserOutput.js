/*
general purpose: display a generic paragraph, receive props from UserInput component
funcional component
*/

import React, { useState } from 'react';
import UserInput from './UserInput';
import './Homework.css';

const UserOutput = props => {

    const [studentsState, setStudentsSate] = useState({
        students: [
            {studentName: 'Huey Dumbar'},
            {studentName: 'Luis Enrique'},
            {studentName: 'Marc Anthony'},
            {studentName: 'Porfi Baloa'},
        ]
    });

    const updateNamesHandler = () => {
        setStudentsSate({
            students: [
                {studentName: 'Luis Miguel'},
                {studentName: 'Julio Iglesias'},
                {studentName: 'Jose Jose'},
                {studentName: 'El Puma'},
            ]            
        });
    }

    //two way binding function
    const updateSingleNameHandler = (event) => {
        setStudentsSate({
            students: [
                {studentName: event.target.value},
                {studentName: event.target.value},
                {studentName: event.target.value},
                {studentName: event.target.value},                                
            ]
        })
    }

    return(
        <div className="paragraph">
            <button onClick={updateNamesHandler}>Update Names</button>
            <p className="title">
                CS Bachelor Degree by Null Academy
            </p>
            <p className="content">
                Hereby, the student: <UserInput 
                name={studentsState.students[0].studentName}
                updateName={updateSingleNameHandler}
                 /> is acredited as
                Bachelor degree in Computing Science by HT
                Academy.
            </p>            
            <p className="content">
                Hereby, the student <UserInput 
                name={studentsState.students[1].studentName}
                updateName={updateSingleNameHandler}                
                /> is acredited as
                Bachelor degree in Computing Science by HT
                Academy.
            </p>                        
            <p className="content">
                Hereby, the student <UserInput 
                name={studentsState.students[2].studentName} 
                updateName={updateSingleNameHandler}
                /> is acredited as
                Bachelor degree in Computing Science by HT
                Academy.
            </p>                                    
            <p className="content">
                Hereby, the student <UserInput 
                name={studentsState.students[3].studentName} 
                updateName={updateSingleNameHandler}
                /> is acredited as
                Bachelor degree in Computing Science by HT
                Academy.
            </p>                                    
        </div>
    )

}

export default UserOutput;