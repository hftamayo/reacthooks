import { Component } from 'react';
import {useSelector, useDispatch, connect} from 'react-redux';
import { counterActions } from '../../store/counter-slice';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(5));
  }

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };


  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());

  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 5</button>        
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

//class based component version of the same component

class Counter1 extends Component{
  incrementHandler(){
    this.props.increment();
  }

  decrementHandler(){
    this.props.decrement();
  }

  toggleCounterHandler(){

  }

  render(){
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
                    
          <button onClick={this.incrementHandler.bind(this)}>Increment</button>}
          <button onClick={this.decrementHandler.bind(this)}>Decrement</button>}          
        </div>
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  }
}

export default Counter;
//the next line is for execute the class based component
/* 
const mapStateToProps = state => {
  return{
    counter: state.counter
  };
}

const mapDispatchToProps = dispatch => {
  return {
    increment: ({ type: 'increment' }),
    decrement: ({ type: 'decrement' }),    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

*/