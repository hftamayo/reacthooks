import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layout/Layout";
import LoadingSpinner from "./UI/LoadingSpinner";

const NewQuote = React.lazy(() => import("./NewQuote"));
const QuoteDetail = React.lazy(() => import("./QuoteDetail"));
const NotFound = React.lazy(() => import("./NotFound"));
const AllQuotes = React.lazy(() => import("./AllQuotes"));

const VerQuotes = () => {
  return (
    <div>
      <main>
        <Layout>
          <Suspense
            fallback={
              <div className="centered">
                <LoadingSpinner />
              </div>
            }
          >
            <Routes>
              <Route path="quotes" element={<AllQuotes />} />
              <Route path="new-quote" element={<NewQuote />} />
              <Route path="quotes/:quoteId" element={<QuoteDetail />} />
            </Routes>
          </Suspense>
        </Layout>
      </main>
    </div>
  );
};

export default VerQuotes;
