import { createStore } from "redux";

const counterReducer = (state = { counter: 0 }, action) => {
    if(action.type === 'increment'){
        return{
            counter: state.counter + 1,
        }
    }

    if(action.type === 'increase'){
        return{
            //usar este payload no es eficiente
            //counter: state.counter + 5,
            counter: state.counter + action.amount,

        }
    }

    if(action.type === 'decrement'){
        return{
            counter: state.counter - 1,
        }
    }    

    return state;
};

const store = createStore(counterReducer);

export default store;