import React from "react";
import Comments from "../components/comments/Comments";

import { Route, useParams } from "react-router";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
const Dummy_quotes = [
  { id: "q1", author: "Max", text: "duummmy 1" },
  { id: "q2", author: "Max2", text: "duummmy 2" },
  { id: "q3", author: "Max3", text: "duummmy 3" },
];

const QuoteDetail = () => {
  const params = useParams();

  const quote = Dummy_quotes.find((quote) => quote.id === params.quoteId);
  if (!quote) {
    return <p>No quote found</p>;
  }

  return (
    <div>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path="/quotes/:quoteId/comments">
        <Comments />
      </Route>
    </div>
  );
};

export default QuoteDetail;
