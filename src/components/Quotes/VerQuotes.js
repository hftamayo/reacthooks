import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AllQuotes from "./AllQuotes";
import NewQuote from "./NewQuote";
import QuoteDetail from "./QuoteDetail";
import Layout from "./layout/Layout";

const VerQuotes = () => {
  return (
    <div>
      <main>
        <Layout>
          <Routes>
            <Route path="/quotes" element={<AllQuotes />} />

            <Route path="/new-quote" element={<NewQuote />} />

            <Route path="/quotes/:quoteId" element={<QuoteDetail />} />
          </Routes>
        </Layout>
      </main>
    </div>
  );
};

export default VerQuotes;
