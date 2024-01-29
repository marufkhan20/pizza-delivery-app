import React from "react";
import Hero from "../components/home/Hero";
import Pizzas from "../components/home/Pizzas";
import Sauces from "../components/home/Sauces";
import SoftDrinks from "../components/home/SoftDrinks";

const Home = () => {
  return (
    <main>
      <Hero />
      <Pizzas />
      <SoftDrinks />
      <Sauces />
    </main>
  );
};

export default Home;
