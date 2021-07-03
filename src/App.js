import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Quiz from "./Quiz";
import Home from "./Home";
import AnswersReport from "./AnswersReport";
import StoredResult from "./StoredResult";

function App() {
  return (
    <div>
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
          <Route exact path="/storedresult">
            <StoredResult />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
