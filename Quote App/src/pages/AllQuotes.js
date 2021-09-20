import React from "react";
import QuoteList from "../components/quotes/QuoteList";
const Dummy_quotes = [
  { id: "q1", author: "Max", text: "duummmy 1" },
  { id: "q2", author: "Max2", text: "duummmy 2" },
  { id: "q3", author: "Max3", text: "duummmy 3" },
];
const AllQuotes = () => {
  return <QuoteList quotes={Dummy_quotes} />;
};

export default AllQuotes;
