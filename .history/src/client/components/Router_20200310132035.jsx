import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from "../pages/HomePage";
import EmployeePage from "../pages/EmployeePage";

export default Router = function(props) {
  return (
    <Router>
      <Switch>
        <Route path="/employee/:employeeId">
          <HomePage />
        </Route>
        <Route path="/">
          <EmployeePage />
        </Route>
      </Switch>
    </Router>
  );
};
