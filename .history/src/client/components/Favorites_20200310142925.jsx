import React from "react";
import EmployeeBox from "./EmployeeBox";

const Favorites = function(props) {
  return (
    <div id="favorites">
      {props.favorites.map(favorite => {
        return <EmployeeBox employee={favorite} key={favorite._id} />;
      })}
    </div>
  );
};

export default Favorites;
