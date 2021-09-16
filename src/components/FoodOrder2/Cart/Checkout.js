import { useRef, useState } from "react";

import classes from "./Checkout.module.css";

const Checkout = (props) => {
    const [formInputsValidity, setFormInputsValidity] = useState({
        clientName: true,
        clientCellPhone: true,
        clientDelivAddress: true,
        clientMethodPayment: true,
      });

      //estos objetos sirven para no capturar todos los keystrokes durante dataInput
      const clientNameRef = useRef();
      const clientCellPhoneRef = useRef();
      const clientDelivAddressRef = useRef();
      const clientMethodPaymentRef = useRef();



  const ConfirmHandler = (event) => {
    event.preventDefault();

    const enteredName = clientNameRef.current.value;
    const enteredCellPhone = clientCellPhoneRef.current.value;
    const enteredDelivAddress = clientDelivAddressRef.current.value;
    const enteredMethodPayment = clientMethodPaymentRef.current.value;
  };

  const nameControlClasses = `${classes.control} ${
    formInputsValidity.clientName ? '' : classes.invalid
  }`;
  const phoneControlClasses = `${classes.control} ${
    formInputsValidity.clientCellPhone ? '' : classes.invalid
  }`;
  const delivAddressControlClasses = `${classes.control} ${
    formInputsValidity.clientDelivAddress ? '' : classes.invalid
  }`;
  const methodPaymentControlClasses = `${classes.control} ${
    formInputsValidity.clientMethodPayment ? '' : classes.invalid
  }`;



  return (
    <form className={classes.form} onSubmit={ConfirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="clientName">Client's Name</label>
        <input type="text" id="clientName" ref={clientNameRef} />
      </div>
      <div className={phoneControlClasses}>
        <label htmlFor="clientCellPhone">Client's Cell Phone Number</label>
        <input type="text" id="clientCellPhone" ref={clientCellPhoneRef} />
      </div>
      <div className={delivAddressControlClasses}>
        <label htmlFor="clientDelivAddress">Delivery Address</label>
        <input type="text" id="clientDelivAddress" ref={clientDelivAddressRef} />
      </div>
      <div className={methodPaymentControlClasses}>
        <label htmlFor="clientMethodPayment">Method of Payment</label>
        <input type="text" id="clientMethodPayment" ref={clientMethodPayment} />
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button>Confirm Order</button>
      </div>
    </form>
  );
};

export default Checkout;
