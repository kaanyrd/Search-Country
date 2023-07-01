import React, { useEffect, useState } from "react";
import classes from "./Country.module.css";
import FlagIcon from "@mui/icons-material/Flag";
import CapitalIcon from "@mui/icons-material/MyLocation";
import LanguageIcon from "@mui/icons-material/Translate";
import PopulationIcon from "@mui/icons-material/Groups2";
import TimeZone from "@mui/icons-material/AccessTime";
import DomainLevel from "@mui/icons-material/SettingsEthernet";
import ContinentIcon from "@mui/icons-material/SouthAmerica";

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
    <div className={classes.countryContent}>
      <div
        className={`${classes.side} ${
          cardFlip ? classes.frontSideActive : classes.frontSide
        }`}
      >
        <div className={classes.cardInside}>
          <div className={classes.countryMainInfo}>
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
          </div>
          <div className={classes.countryInfo}>
            <div className={classes.control}>
              <div className={classes.iconSide}>
                <CapitalIcon />
                <h1>Capital</h1>
              </div>
              <h2>{props.country?.capital}</h2>
            </div>
            <div className={classes.control}>
              <div className={classes.iconSide}>
                <LanguageIcon />
                <h1>Language</h1>
              </div>
              <h2>{languages}</h2>
            </div>
            <div className={classes.control}>
              <div className={classes.iconSide}>
                <PopulationIcon />
                <h1>Population</h1>
              </div>

              <h2>
                {(props.country?.population / 1000000).toFixed(1)}
                million
              </h2>
            </div>
            <div className={classes.moreBtn}>
              <button className={classes.moreBtnSelf} onClick={cardFlipHandler}>
                More Info
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${classes.side} ${classes.backSide} ${
          cardFlip ? classes.backSideActive : ""
        }`}
      >
        {/* //BACKSIDE */}
        <div>
          <div>
            <TimeZone />
            <h1>Timezone</h1>
          </div>
          <h2>{props.country?.timezones[0]}</h2>
        </div>
        <div>
          <div>
            <DomainLevel />
            <h1>Top Domain Level</h1>
          </div>
          <h2>{props.country?.tld}</h2>
        </div>
        <div>
          <div>
            <ContinentIcon />
            <h1>Region</h1>
          </div>
          <h2>{props.country?.region}</h2>
        </div>
        <a target="blank" href={props.country?.maps.googleMaps}>
          To Map
        </a>
        <div>
          <button onClick={cardFlipHandler}>Back</button>
        </div>
      </div>
    </div>
  );
}

export default Country;