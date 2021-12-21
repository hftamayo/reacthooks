import { Fragment } from 'react';
import { useParams, Route } from 'react-router-dom';

import HighlightedQuote from './components/HighlightedQuote';
import Comments from './Comments/Comments';

const DUMMY_NOTES = [
    {
        id: 'q1', author: 'Max', text: 'Learning React is fun'
    },
    {
        id: 'q2', author: 'Seb', text: 'Learning Node is great'
    },    
];

const QuoteDetail = () => {
    const params = useParams();

    const quote = DUMMY_NOTES.find(quote => quote.id === params.quoteId);

    if(!quote){
        return <p>No Quote Found!</p>;
    }
    return(
        <Fragment>
            <HighlightedQuote text={quote.text} author={quote.author} />
            <Route path={`/quotes/${params.quoteId}/comments`}></Route>
            <Comments />
        </Fragment>

    );
};

export default QuoteDetail;