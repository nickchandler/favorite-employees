import React from "react";

const EmployeeBox = function(props) {
  return (
    <div>
      <h4>
        {props.employee.first_name} {props.employee.last_name}
      </h4>

      <h5>{props.employee.performance_score}</h5>
      <h5>{props.employee.motto}</h5>
    </div>
  );
};

export default EmployeeBox;
