import classes from './Checkout.module.css';

const Checkout = props => {

    const ConfirmHandler = (event) => {

        event.preventDefault();
    }
    return <form onSubmit={ConfirmHandler}>
        <div className={classes.control}>
            <label htmlFor='clientName'>Client's Name</label>
            <input type='text' id='clientName' />
        </div>
        <div className={classes.control}>
            <label htmlFor='clientCellPhone'>Client's Cell Phone Number</label>
            <input type='text' id='clientCellPhone' />
        </div>        
        <div className={classes.control}>
            <label htmlFor='clientDelivAddress'>Delivery Address</label>
            <input type='text' id='clientDelivAddress' />
        </div>
        <div className={classes.control}>
            <label htmlFor='clientMethodPayment'>Method of Payment</label>
            <input type='text' id='clientMethodPayment' />
        </div> 
        <button type="button" onClick={props.onCancel}>Cancel</button>  
        <button>Confirm Order</button>     

    </form>
};

export default Checkout;