import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import HomePage from "../pages/HomePage";
import EmployeePage from "../pages/EmployeePage";

export default Router = function(props) {
  return (
    <Router>
      <Switch>
        <Route path="/employee/:employeeId">
          <EmployeePage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
};
