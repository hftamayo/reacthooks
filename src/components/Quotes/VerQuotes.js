import { Route, Switch, Redirect, useRouteMatch } from "react-router-dom";
import AllQuotes from "./AllQuotes";
import NewQuote from "./NewQuote";
import QuoteDetail from "./QuoteDetail";

function VerQuotes() {
  const { path, url } = useRouteMatch();
  return (
      <Switch>
        <Route path={`${path}/quotes/:quoteId`}>
          <QuoteDetail />
        </Route>        
        {/* si no pongo exact no se renderiza la segunda opcion */}
        <Route path={`${path}/quotes`}>
          <AllQuotes />
        </Route>
        <Route path={`${path}/new-quote`}>
          <NewQuote />
        </Route>
        <Redirect from={path} to={`${path}/quotes`} />
      </Switch>
  );
};

export default VerQuotes;
