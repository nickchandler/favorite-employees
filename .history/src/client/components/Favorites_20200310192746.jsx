import React from "react";
import EmployeeBox from "./EmployeeBox";
import styles from "./Favorites.module.css";
const Favorites = function(props) {
  return (
    <div className={styles.container}>
      {props.favorites.map(employee => {
        return <EmployeeBox employee={employee} key={employee._id} />;
      })}
    </div>
  );
};

export default Favorites;
