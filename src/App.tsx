import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { hot } from "react-hot-loader";
import MainPage from "@/pages/MainPage";
import Sub from "@/pages/Sub";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={MainPage} exact />
        <Route path="/test" component={Sub} exact />
      </Switch>
    </Router>
  );
}

export default hot(module)(App);
