import React, { useEffect, useState } from "react";
import classes from "./Country.module.css";
import FlagIcon from "@mui/icons-material/Flag";
import CapitalIcon from "@mui/icons-material/MyLocation";
import LanguageIcon from "@mui/icons-material/Translate";
import PopulationIcon from "@mui/icons-material/Groups2";

function Country(props) {
  const [cardFlip, setCardFlip] = useState(false);
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

  const cardFlipHandler = () => {
    setCardFlip((prevState) => !prevState);
  };
  // console.log(languages);

  return (
    <div className={classes.country}>
      <div className={classes.countryContent}>
        <div
          className={`${classes.side} ${
            cardFlip ? classes.frontSideActive : classes.frontSide
          }`}
        >
          <div className={classes.countryTitle}>
            <h1 className={classes.mainTitle}>
              <FlagIcon />
              {props.country?.name.common}
            </h1>
            <em className={classes.littleTitle}>
              (Official Name:{props.country?.name.official})
            </em>
          </div>
          <div className={classes.img}>
            <img
              className={classes.imgSelf}
              src={props.country?.flags.svg}
              alt="img"
            />
          </div>
          <div className={classes.control}>
            <h1>
              <CapitalIcon />
              Capital
            </h1>
            <h1>{props.country?.capital}</h1>
          </div>
          <div className={classes.control}>
            <h1>
              <LanguageIcon />
              Language
            </h1>
            <h1>{languages}</h1>
          </div>
          <div className={classes.control}>
            <h1>
              <PopulationIcon />
              Population
            </h1>
            <h1>
              {(props.country?.population / 1000000).toFixed(1)}
              million
            </h1>
          </div>
          <button onClick={cardFlipHandler}>More Info</button>
        </div>
        <div
          className={`${classes.side} ${
            cardFlip ? classes.backSideActive : classes.backSide
          }`}
        >
          <h1>Timezone: {props.country?.timezones[0]}</h1>
          <h1>Top Domain Level: {props.country?.tld}</h1>
          <h1>region:{props.country?.region}</h1>
          <a target="blank" href={props.country?.maps.googleMaps}>
            To Map
          </a>
          <button onClick={cardFlipHandler}>Back</button>
        </div>
      </div>
    </div>
  );
}
// import TranslateIcon from '@mui/icons-material/Translate';
// import MapIcon from '@mui/icons-material/Map';
// import ExploreIcon from '@mui/icons-material/Explore';
// import MyLocationIcon from '@mui/icons-material/MyLocation';

export default Country;
