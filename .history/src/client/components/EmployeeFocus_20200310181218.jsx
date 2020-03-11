import React from "react";
import { Redirect } from "react-router-dom";
const EmployeeFocus = function(props) {
  return (
    <div>
      <h2>
        {props.employee.first_name} {props.employee.last_name}
      </h2>

      <ul>
        <li>Email: {props.employee.email}</li>
        <li>Age: {props.employee.age}</li>
        <li>Salary: {props.employee.salary}</li>
      </ul>

      <button
        onClick={() => {
          props.addFavorite(props.employee);
        }}
      >
        Add to Favorites
      </button>
    </div>
  );
};

export default EmployeeFocus;
