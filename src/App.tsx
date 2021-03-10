import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import { hot } from "react-hot-loader";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={MainPage} exact />
      </Switch>
    </Router>
  );
}

export default hot(module)(App);
