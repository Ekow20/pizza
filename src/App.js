import React from "react";
import Products from "./components/Products";
import { BrowserRouter } from "react-router-dom";
import Hero from "./components/Hero";
import { products, desserts } from "./components/data";
import Feature from "./components/Feature";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Hero />
      <Products heading="Choose Your Favorite" data={products} />
      <Feature />
      <Products heading="Sweets for You" data={desserts} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
