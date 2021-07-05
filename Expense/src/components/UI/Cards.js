import "./Card.css";

import React from "react";

function Cards(props) {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Cards;
