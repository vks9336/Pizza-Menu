import React from "react";

export default function Order({ closeTime, openTime }) {
  return (
    <div className="order">
      <p>
        We're open until{openTime}:00 AM to {closeTime}:00 PM. Come visit us or
        order online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}
