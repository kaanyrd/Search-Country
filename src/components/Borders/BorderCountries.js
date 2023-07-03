import React from "react";
import BorderItems from "./BorderItems";
import classes from "./BorderCountries.module.css";

function BorderCountries(props) {
  let Content = () => {
    if (!props.country?.borders && props.country) {
      return (
        <div>{props.country?.name.common} Has Not Any Border Country...</div>
      );
    } else if (props.country?.borders.length === 1) {
      return <div>{props.country?.name.common}'s Border Country</div>;
    } else if (
      props.country?.borders.length > 1 &&
      props.country.name !== undefined
    ) {
      return <div>{props.country?.name.common}'s Border Countries</div>;
    } else if (props.country !== undefined) {
      return <div></div>;
    }
  };

  return (
    <div className={classes.boundaries}>
      <h1 className={classes.title}>
        <Content />
      </h1>
      <div>
        <ul className={classes.listBorders}>
          {props.neigbourCountry.map((item, index) => (
            <BorderItems
              className={classes.listItem}
              key={index}
              country={item}
              index={index}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BorderCountries;
