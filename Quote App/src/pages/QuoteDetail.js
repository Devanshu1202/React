import React from "react";
import Comments from "../components/comments/Comments";
import useHttp from "../hooks/use-http";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import { Link, useParams, Route, useRouteMatch } from "react-router-dom";
import { getSingleQuote } from "../lib/api";
import { useEffect } from "react/cjs/react.development";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const Dummy_quotes = [
  { id: "q1", author: "Max", text: "duummmy 1" },
  { id: "q2", author: "Max2", text: "duummmy 2" },
  { id: "q3", author: "Max3", text: "duummmy 3" },
];

const QuoteDetail = () => {
  const params = useParams();
  const match = useRouteMatch();

  const { quoteId } = params;
  const quote = Dummy_quotes.find((quote) => quote.id === params.quoteId);
  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);
  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered">{error}</p>;
  }

  if (!loadedQuote.text) {
    return <p>No quote found</p>;
  }

  return (
    <div>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            LoadComments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </div>
  );
};

export default QuoteDetail;
