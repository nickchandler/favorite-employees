import React from "react";

const EmployeeFocus = function(props) {
  return (
    <div>
      <h2>
        {props.employee.first_name} {props.employee.last_name}
      </h2>

      <ul>
        <li>
          <p>Email:</p> {props.employee.email}
        </li>
        <li>
          <p>Age: </p> {props.employee.age}
        </li>
        <li>
          <p>Salary:</p> {props.employee.salary}
        </li>
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
