import React from "react";

const Card = props => {
  return (
    <div class="card">
      <h3>{props.header}</h3>
      <p>{props.para}</p>
      <div>{props.div}</div>
    </div>
  );
};

export default Card;
