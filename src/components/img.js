import React from "react";

const Img = props => {
  return (
    <div>
      <img src={props.img} alt="mountain" class="img" />
      <div class="row">
        <div class="header">{props.title}</div>
        <div class="text">{props.description}</div>
      </div>
    </div>
  );
};

export default Img;
