import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "../src/Components/Header/Header";
import { BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          {/* <Route path="/" exact>
            <About />
          </Route> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
