import React from "react";
import styles from "./EmployeeBox.css";
const EmployeeBox = function(props) {
  return (
    <span>
      <h4>
        {props.employee.first_name} {props.employee.last_name}
      </h4>

      <h5>Performance Score: {props.employee.performance_score}</h5>
      <h5>Motto: {props.employee.motto}</h5>
    </span>
  );
};

export default EmployeeBox;
