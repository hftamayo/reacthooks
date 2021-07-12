import React from "react";
import Card from "./Card";
import ButtonUsers from "./Button/ButtonUsers";
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onConfirm} />
        <Card className={classes.modal}>
          <header className={classes.header}>
            <h2>{props.title}</h2>
          </header>
          <div className={classes.content}>
            <h3>{props.message}</h3>
          </div>
          <footer className={classes.actions}>
            <ButtonUsers onClick={props.onConfirm}>OK</ButtonUsers>
          </footer>
        </Card>
      </div>
  );
};

export default ErrorModal;
