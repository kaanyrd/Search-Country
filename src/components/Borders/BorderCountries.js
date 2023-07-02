import React from "react";
import BorderItems from "./BorderItems";
import classes from "./BorderCountries.module.css";

function BorderCountries(props) {
  let Content = () => {
    if (props.country === undefined) {
      return <div></div>;
    } else if (props.country?.borders.length === 1) {
      return <div>{props.country?.name.common}'s Border Country</div>;
    } else if (props.country?.borders.length > 1) {
      return <div>{props.country?.name.common}'s Border Countries</div>;
    }
  };

  return (
    <div className={classes.boundaries}>
      <h1 className={classes.title}>
        <Content />
      </h1>
      <div className={classes.boundariesContent}>
        <ul>
          {props.neigbourCountry.map((item, index) => (
            <BorderItems key={index} country={item} index={index} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BorderCountries;
