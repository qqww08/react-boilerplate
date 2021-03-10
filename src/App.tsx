import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { hot } from "react-hot-loader";
import MainPage from "@/pages/MainPage";

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
