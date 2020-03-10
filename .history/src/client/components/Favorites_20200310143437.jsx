import React from "react";
import EmployeeBox from "./EmployeeBox";

const Favorites = function(props) {
  return (
    <div id="favorites">
      {props.favorites.map(employee => {
        return <EmployeeBox employee={employee} key={employee._id} />;
      })}
    </div>
  );
};

export default Favorites;
