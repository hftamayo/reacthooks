import React from "react";
import Card from "../UI/Card";
import classes from './AddUser.module.css';
import ButtonUsers from "../UI/Button/ButtonUsers";

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age (years)</label>
        <input id="age" type="number" />
        <ButtonUsers type="submit">Add User</ButtonUsers>
      </form>
    </Card>
  );
};

export default AddUser;
