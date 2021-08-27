import "./App.css";
import React, { useState } from "react";
import Nav from "./component/Nav/NavBar";
import Text from "./component/Text/Text.jsx";
import Alert from "./component/Alert/Alert";
import About from "./component/About/About";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./component/HomePage/HomePage";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalt] = useState(null);
  const showalt = (msg, type) => {
    setalt({
      msg: msg,
      type: type,
    });
    setTimeout(() => {
      setalt(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "grey";
      showalt("Dark mode activated", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showalt("light mode activated", "success");
    }
  };
  return (
    <Router>
      {" "}
      <div>
        <Nav title="MyText" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          <Switch>
            <Route exact path="/txt">
              <Text title="Convert your Text" mode={mode} showalt={showalt} />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
