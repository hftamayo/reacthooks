import { Link, useRouteMatch } from 'react-router-dom';

import classes from './QuoteItem.module.css';

const QuoteItem = (props) => {
  const { path, url } = useRouteMatch();  
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>
      <div className={classes.item}>
          <Link className='btn' to={`${path}/${props.id}`}>View Fullscreen</Link>
        </div>
    </li>
  );
};

export default QuoteItem;