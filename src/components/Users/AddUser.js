import React, { useState } from "react";
import Card from "../UI/Card";
import ButtonUsers from "../UI/Button/ButtonUsers";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 && enteredAge.trim().length === 0) {
      setError({
        title: "Urgent Attention: Invalid Input",
        message: "Name and Age Data Fields must not be blank",
      });
      return;
    }
    if (enteredUsername.trim().length <= 5) {
      setError({
        title: "Urgent Attention: Invalid Input",
        message: "Name must be more than 5 characters long",
      });
      return;
    }
    //+enteredPage = casting String->int    
    if (+enteredAge < 1 || +enteredAge > 70) {
      setError({
        title: "Urgent Attention: Invalid Age Value",
        message: "Please enter a valid age (greater than 0 and less than 70)",
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername('');
    setEnteredAge('');    
  };

  //updating textbox's content in State
  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  //idem
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <ButtonUsers type="submit">Add User</ButtonUsers>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
