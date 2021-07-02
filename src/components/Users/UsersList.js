import React from "react";
import CardUsers from '../UI/CardUsers';
import classes from './UsersList.module.css';

const UsersList = (props) => {
  return (
      <CardUsers className={classes.users}>
        <ul>
        {props.users.map((user) => (
            <li key={user.id}>
            {user.name} ({user.age} years old)
            </li>
        ))}
        </ul>
      </CardUsers>
  );
};

export default UsersList;
