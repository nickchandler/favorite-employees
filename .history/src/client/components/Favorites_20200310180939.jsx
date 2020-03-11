import React from "react";
import EmployeeBox from "./EmployeeBox";
import styles from "./Favorites.module.css";
const Favorites = function(props) {
  return (
    <span className={styles.container}>
      {props.favorites.map(employee => {
        return <EmployeeBox employee={employee} key={employee._id} />;
      })}
    </span>
  );
};

export default Favorites;
