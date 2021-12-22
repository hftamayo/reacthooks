import { useHistory, useRouteMatch } from "react-router-dom";
import QuoteForm from "./components/QuoteForm";

const NewQuote = () => {
    const path  = useRouteMatch();  
    const history = useHistory();


    const addQuoteHandler = QuoteData => {
        console.log(QuoteData);
        history.push(`${path}`);

    };
    return(
        <QuoteForm onAddQuote ={addQuoteHandler} />
    );
};

export default NewQuote;