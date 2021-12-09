import { Route, Switch, BrowserRouter } from "react-router-dom";
import AllQuotes from "./AllQuotes";
import NewQuote from "./NewQuote";
import QuoteDetail from "./QuoteDetail";

function VerQuotes() {
  return (
    <Browser>
      <Switch>
          {/* si no pongo exact no se renderiza la segunda opcion */}
        <Route path="/quotes" exact>
          <AllQuotes />
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetail />
        </Route>
        <Route path="/new-quote">
          <NewQuote />
        </Route>
      </Switch>
    </Browser>
  );
}
