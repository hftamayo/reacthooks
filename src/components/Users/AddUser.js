import React, { useState } from "react";
import Card from "../UI/Card";
import classes from './AddUser.module.css';
import ButtonUsers from "../UI/Button/ButtonUsers";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');  

  const addUserHandler = (event) => {
    event.preventDefault();
    if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
      return;
    }
    if(+enteredAge < 1){ //+enteredPage = casting String->int
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredAge('');
    setEnteredUsername('');
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };  

  return (
    <div>
      <div className={classes.backdrop} />
    <ErrorModal title="Error ocurred" message="xyz" />
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" 
        value={enteredUsername}
        onChange={usernameChangeHandler} />
        <label htmlFor="age">Age (years)</label>
        <input id="age" type="number" 
        value={enteredAge}
        onChange={ageChangeHandler} />
        <ButtonUsers type="submit">Add User</ButtonUsers>
      </form>
    </Card>
    </div>    
  );
};

export default AddUser;
