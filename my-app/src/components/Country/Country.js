import React, { useEffect, useState } from "react";
import classes from "./Country.module.css";

function Country(props) {
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
  // console.log(languages);

  return (
    <div>
      <h1>name:{props.country?.name.common}</h1>
      <h1>official name{props.country?.name.official}</h1>
      flag:
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

export default Country;
