import { Fragment } from "react";
import { useParams, Route, useRouteMatch, Link } from "react-router-dom";

import HighlightedQuote from "./components/HighlightedQuote";
import Comments from "./Comments/Comments";

const DUMMY_NOTES = [
  {
    id: "q1",
    author: "Max",
    text: "Learning React is fun",
  },
  {
    id: "q2",
    author: "Seb",
    text: "Learning Node is great",
  },
];

const QuoteDetail = () => {
  const match = useRouteMatch();
  const params = useParams();

  const quote = DUMMY_NOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No Quote Found!</p>;
  }
  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link
            className="btn--flat"
            to={`${match.url}/comments`}
          >
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}></Route>
      <Comments />
    </Fragment>
  );
};

export default QuoteDetail;
