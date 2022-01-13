import { Link, useNavigate } from 'react-router-dom';
import classes from './NoQuotesFound.module.css';

const NoQuotesFound = () => {
  const match = useNavigate();

  return (
    <div className={classes.noquotes}>
      <p>No quotes found!</p>
      <Link className='btn' to={`${match}/new-quote`}>
        Add a Quote
      </Link>
    </div>
  );
};

export default NoQuotesFound;