import React from "react";

const Cards = ({ img, name, url, description }) => {
  return (
    <div>
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <h5>{url}</h5>
      <p>{description}</p>
    </div>
  );
};

export default Cards;
