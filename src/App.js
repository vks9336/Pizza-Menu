import React from "react";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
