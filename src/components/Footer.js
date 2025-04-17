import React from "react";
import Order from "./Order";

export default function Footer() {
  const hour = new Date().getHours();

  const openTime = 9;
  const closeTime = 22;

  const isOpen = hour >= openTime && hour <= closeTime ? true : false;

  return (
    <footer>
      {!isOpen ? (
        <Order closeTime={closeTime} openTime={openTime} />
      ) : (
        <p>
          We're happy to welcome you between {openTime}:00 AM to {closeTime}:00
          PM.
        </p>
      )}
    </footer>
  );
}
