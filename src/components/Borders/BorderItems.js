import React, { useEffect, useState } from "react";
import classes from "./BorderItem.module.css";
import FlagIcon from "@mui/icons-material/Flag";
import CapitalIcon from "@mui/icons-material/MyLocation";
import LanguageIcon from "@mui/icons-material/Translate";
import PopulationIcon from "@mui/icons-material/Groups2";
import TimeZone from "@mui/icons-material/AccessTime";
import DomainLevel from "@mui/icons-material/SettingsEthernet";
import ContinentIcon from "@mui/icons-material/SouthAmerica";

function BorderItems(props) {
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

  return (
    <div className={`${classes.countryContent} ${props.className}`}>
      <div
        className={`${classes.side} ${classes.frontContent} ${
          cardFlip ? classes.frontSideActive : classes.frontSide
        }`}
      >
        <div className={classes.countryTitle}>
          <h2 className={classes.mainTitle}>
            <FlagIcon />
            {props.index + 1} - {props.country?.name.common}
          </h2>
          <em className={classes.littleTitle}>
            (Official Name:{props.country?.name.official})
          </em>
        </div>
        <div className={classes.cardInside}>
          <div className={classes.countryMainInfo}>
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
                <h2>Capital</h2>
              </div>
              <h3>{props.country?.capital}</h3>
            </div>
            <div className={classes.control}>
              <div className={classes.iconSide}>
                <LanguageIcon />
                <h2>Language</h2>
              </div>
              <h3>{languages.join(" - ")}</h3>
            </div>
            <div className={classes.control}>
              <div className={classes.iconSide}>
                <PopulationIcon />
                <h2>Population</h2>
              </div>

              <h3>
                {`${(props.country?.population / 1000000).toFixed(1)} `}
                million
              </h3>
            </div>
            <div className={classes.moreBtn}>
              <button className={classes.moreBtnSelf} onClick={cardFlipHandler}>
                More Info
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* FIXME BACKSIDE */}
      <div
        className={`${classes.side} ${classes.backSide} ${
          cardFlip ? classes.backSideActive : ""
        }`}
      >
        <div className={classes.backControl}>
          <div className={classes.backIcons}>
            <TimeZone />
            <h1>Timezone</h1>
          </div>
          <h2>{props.country?.timezones[0]}</h2>
        </div>
        <div className={classes.backControl}>
          <div className={classes.backIcons}>
            <DomainLevel />
            <h1>Domain</h1>
          </div>
          <h2>{props.country?.tld}</h2>
        </div>
        <div className={classes.backControl}>
          <div className={classes.backIcons}>
            <ContinentIcon />
            <h1>Region</h1>
          </div>
          <h2>{props.country?.region}</h2>
        </div>
        <div className={classes.cardFooter}>
          <a
            className={classes.mapBtn}
            target="blank"
            href={props.country?.maps.googleMaps}
          >
            To See On Map
          </a>
          <div>
            <button className={classes.backBtn} onClick={cardFlipHandler}>
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BorderItems;
