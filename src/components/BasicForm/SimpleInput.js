import { useState, useRef } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if(enteredName.trim() == ''){
      return; //cancela la ejecución de todo el metodo

    }

    const enteredValue = nameInputRef.current.value;
    console.log("useRef hook incase I won't update value: ", enteredValue);
    /*
    si necesito manipular el DOM: actualizarlo, validar por keystroke entonces se recomienda
    usar useState
    evitar manipulaciones directas:
    nameInputRef.current.value='';
    */
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
