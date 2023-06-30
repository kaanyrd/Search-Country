import React from "react";
import classes from "./BorderCountries.module.css";
import BorderItems from "./BorderItems";

function BorderCountries(props) {
  console.log(props.neigbourCountry);
  return (
    <div>
      <ul>
        {props.neigbourCountry.map((item) => (
          <BorderItems country={item} />
        ))}
      </ul>
    </div>
  );
}

export default BorderCountries;
