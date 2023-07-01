import React, { useEffect, useState } from "react";
import classes from "./BorderItem.module.css";

function BorderItems(props) {
  const [languages, setLanguages] = useState([]);

  const obj = props.country?.languages;
  useEffect(() => {
    if (obj) {
      const newLanguages = [];
      for (let key in obj) {
        newLanguages.push(obj[key]);
      }
      setLanguages(newLanguages);
    }
  }, [obj]);
  return (
    <div>
      <h1>{props.country.name.common}</h1>
      <h1>{props.country.name.official}</h1>
      <img className={classes.img} src={props.country?.flags.svg} alt="img" />
      <h1>capital:{props.country?.capital}</h1>
      <h1>language:{languages}</h1>
      <h1>population:{(props.country?.population / 1000000).toFixed(1)}</h1>
      <h1>tld: {props.country?.tld}</h1>
      <h1>region:{props.country?.region}</h1>
      <a target="blank" href={props.country?.maps.googleMaps}>
        To Map
      </a>
      <hr />
    </div>
  );
}

export default BorderItems;
