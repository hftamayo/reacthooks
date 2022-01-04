import { Fragment, useEffect } from "react";
import { useParams, Route, useRouteMatch, Link } from "react-router-dom";

import HighlightedQuote from "./components/HighlightedQuote";
import Comments from "./Comments/Comments";
import useHttp from "./hooks/use-http";
import { getSingleQuote } from "./lib/api";
import LoadingSpinner from "./UI/LoadingSpinner";

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
  const { quoteId } = params;


  const { sendRequest, status, data: loadedQuote, error } = useHttp(getSingleQuote, true);

  //const quote = DUMMY_NOTES.find((quote) => quote.id === params.quoteId);
  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if(status === "pending"){
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if(error){
    return <p className="centered">{error}</p>;
  }

  if (!loadedQuote.text) {
    return <p>No Quote Found!</p>;
  }
  return (
    <Fragment>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
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
