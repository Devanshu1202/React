import React from "react";
import QuoteForm from "../components/quotes/QuoteForm";
import { useHistory } from "react-router";

const NewQuote = () => {
  const history = useHistory();
  const onQuoteHandler = (quoteData) => {
    console.log(quoteData);

    history.push("/quotes");
  };
  return <QuoteForm onAddQuote={onQuoteHandler} />;
};

export default NewQuote;
