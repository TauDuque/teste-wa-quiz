import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Quiz from "./pages/Quiz";
import Home from "./pages/Home";
import AnswersReport from "./pages/AnswersReport";
import StoredResult from "./pages/StoredResult";
import Logo from "./components/Logo";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <div>
      <Router>
        <Logo />
        <Switch>
          <Route exact path="/" component={() => <Home />} />
          <Route exact path="/quiz">
            <Quiz />
          </Route>
          <Route exact path="/answersreport">
            <AnswersReport />
          </Route>
          <Route exact path="/storedresult">
            <StoredResult />
          </Route>
          <Route exact path="/*">
            <ErrorPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
