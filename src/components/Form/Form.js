import React, { useRef, useState } from "react";
import classes from "./Form.module.css";
import Country from "../Country/Country";
import BorderCountries from "../Borders/BorderCountries";
import SearchIcon from "@mui/icons-material/Search";

function Form() {
  const [country, setCountry] = useState(null);
  const [neigbourCountry, setNeighbourCountry] = useState([]);
  const countryRef = useRef();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!countryRef.current.value) return;
    try {
      setNeighbourCountry([]);
      const countryResponse = await fetch(
        `https://restcountries.com/v3.1/name/${countryRef.current.value}`
      );
      if (!countryResponse.ok) {
        throw new Error("You searched falsy value");
      }
      const data = await countryResponse.json();
      setCountry(data[0]);
      let i;
      for (i = 0; i < data[0].borders.length; i++) {
        const neighbours = data[0].borders[i];
        if (!neighbours) {
          throw new Error("There aren't any neighbour...");
        }
        // console.log(neighbours);
        const neighbourResponse = await fetch(
          `https://restcountries.com/v3.1/alpha/${neighbours}`
        );
        const neighbourData = await neighbourResponse.json();
        // setNeighbourCountry(neighbourData);
        setNeighbourCountry((prevState) => [...prevState, neighbourData[0]]);
      }
    } catch (error) {
      console.log(error.message);
    }
    countryRef.current.value = "";
  };
  // console.log(country);
  // console.log(neigbourCountry);
  return (
    <div>
      <form className={classes.form} onSubmit={onSubmitHandler}>
        <div className={classes.formControl}>
          <input
            className={classes.input}
            placeholder="Country Name..."
            type="text"
            ref={countryRef}
          />
        </div>
        <button className={classes.submitBtn} type="submit">
          <SearchIcon />
        </button>
      </form>
      <div className={classes.content}>
        <Country country={country} />
        <BorderCountries country={country} neigbourCountry={neigbourCountry} />
      </div>
    </div>
  );
}

export default Form;
