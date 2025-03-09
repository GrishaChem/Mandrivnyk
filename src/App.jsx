import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import NewItems from "./components/NewItems/NewItems";
import Navigation from "./components/Navigation/Navigation";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <NewItems />
      <Navigation />
    </>
  );
};
export default App;
