import React from "react";
import styles from "./EmployeeBox.module.css";
const EmployeeBox = function(props) {
  return (
    <span className={styles.container}>
      <h4>
        {props.employee.first_name} {props.employee.last_name}
      </h4>

      <h5>Performance Score: {props.employee.performance_score}</h5>
      <h5>Motto: {props.employee.motto}</h5>

      <button
        onClick={() => {
          console.log(props.employee, "this is employee being removed");
          props.handleRemove(props.employee._id);
        }}
      >
        Remove
      </button>
    </span>
  );
};

export default EmployeeBox;
