import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useGlobalContext } from "./context";
import Quiz from "./Quiz";
import AnswersReport from "./AnswersReport";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
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
