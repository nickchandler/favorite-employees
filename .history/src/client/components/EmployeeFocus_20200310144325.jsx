import React from "react";

const EmployeeFocus = function(props) {
  return (
    <div>
      <h2>
        {props.employee.first_name} {props.employee.last_name}
      </h2>

      <ul>
        <li>
          <p>Email: {props.employee.email}</p>
        </li>
        <li>
          <p>Age: {props.employee.age}</p>
        </li>
        <li>
          <p>Salary: {props.employee.salary}</p>
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
