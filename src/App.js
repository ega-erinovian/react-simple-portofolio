import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";

const App = () => {
  return (
    <>
      <Header />
      <AboutMe />
    </>
  );
};

export default App;
