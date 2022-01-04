import { useEffect } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import QuoteForm from "./components/QuoteForm";
import useHttp from "./hooks/use-http";
import { addQuote } from "./lib/api";

const NewQuote = () => {
  const path = useRouteMatch();
  const history = useHistory();
  const { sendRequest, status } = useHttp(addQuote);

  useEffect(() => {
      if(status === 'completed'){
          history.push(`${path}`);
      }
  }, [status, history]);

  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData);
  };
  return <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
