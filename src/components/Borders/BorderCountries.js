import React from "react";
import BorderItems from "./BorderItems";
import classes from "./BorderCountries.module.css";

function BorderCountries(props) {
  console.log(props.neigbourCountry);
  return (
    <div className={classes.boundaries}>
      <h1 className={classes.title}>
        {props.country?.name.common}'s Border Countries
      </h1>
      <div className={classes.boundariesContent}>
        <ul>
          {props.neigbourCountry.map((item, index) => (
            <BorderItems country={item} index={index} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BorderCountries;
