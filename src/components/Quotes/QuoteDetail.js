import { Fragment } from 'react';
import { useParams, Route } from 'react-router-dom';

import Comments from './Comments/Comments';

const QuoteDetail = () => {
    const params = useParams();
    return(
        <Fragment>
            <h1>Quote Details</h1>
            <p>{params.quoteId}</p>
            <Route path={`/quotes/${params.quoteId}/comments`}></Route>
            <Comments />
        </Fragment>

    );
};

export default QuoteDetail;