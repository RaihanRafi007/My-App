import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import MainComponent from "./components/MainComponent";

const App = () => {
  return (
    <BrowserRouter>
      <MainComponent />
    </BrowserRouter>
  );
};

export default App;
