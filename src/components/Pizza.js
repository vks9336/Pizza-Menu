import React from "react";

export default function Pizza({ pizzaobj }) {
  console.log(pizzaobj);

  return (
    <li className={`pizza ${pizzaobj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaobj.photoName} alt={pizzaobj.name}></img>
      <div>
        <h3>{pizzaobj.name}</h3>
        <p>{pizzaobj.ingredients}</p>
        <span>{pizzaobj.soldOut ? "SOLD OUT" : pizzaobj.price + 11 + "$"}</span>
      </div>
    </li>
  );
}
