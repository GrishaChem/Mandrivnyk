import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import NewItems from "./components/NewItems/NewItems";
import Navigation from "./components/Navigation/Navigation";
import TopSales from "./components/TopSales/TopSales";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <NewItems />
      <Navigation />
      <TopSales />
    </>
  );
};
export default App;
