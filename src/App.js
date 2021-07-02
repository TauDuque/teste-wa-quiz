import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Quiz from "./Quiz";
import Home from "./Home";
import AnswersReport from "./AnswersReport";

function App() {
  return (
    <div style={{ height: "90vh" }}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/quiz">
            <Quiz />
          </Route>
          <Route exact path="/answersreport">
            <AnswersReport />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
