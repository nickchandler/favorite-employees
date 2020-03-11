import React from "react";
import EmployeeBox from "./EmployeeBox";
import styles from "./Favorites.css";
const Favorites = function(props) {
  return (
    <div className="favorites">
      {props.favorites.map(employee => {
        return <EmployeeBox employee={employee} key={employee._id} />;
      })}
    </div>
  );
};

export default Favorites;
