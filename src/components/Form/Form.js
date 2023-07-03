import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import classes from "./Form.module.css";
import Country from "../Country/Country";
import BorderCountries from "../Borders/BorderCountries";
import SearchIcon from "@mui/icons-material/Search";
import ErrorModeling from "../ErrorModeling/ErrorModeling";

function Form() {
  const [country, setCountry] = useState(null);
  const [neigbourCountry, setNeighbourCountry] = useState([]);
  const [errorModeling, setErrorModeling] = useState(false);
  const countryRef = useRef();

  const ErrorModelingg = () => {
    return (
      <ErrorModeling
        error={errorModeling}
        setErrorModeling={setErrorModeling}
      />
    );
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!countryRef.current.value) return;
    try {
      const countryResponse = await fetch(
        `https://restcountries.com/v3.1/name/${countryRef.current.value}`
      );
      if (countryResponse.ok) {
        setNeighbourCountry([]);
        const data = await countryResponse.json();
        setCountry(data[0]);
        let i;
        for (i = 0; i < data[0].borders.length; i++) {
          const neighbours = data[0].borders[i];
          if (!neighbours) {
            throw new Error("There aren't any neighbour...");
          }
          const neighbourResponse = await fetch(
            `https://restcountries.com/v3.1/alpha/${neighbours}`
          );
          const neighbourData = await neighbourResponse.json();
          setNeighbourCountry((prevState) => [...prevState, neighbourData[0]]);
        }
      } else if (!countryResponse.ok) {
        return setErrorModeling(
          {
            title: countryResponse.statusText,
            message: "Searched country not found !",
          },
          (countryRef.current.value = ""),
          setNeighbourCountry((prevState) => prevState)
          // setCountry(null)
        );
        // ?
        // throw new Error("You searched falsy value");
      }
    } catch (error) {
      console.log(error.message);
    }
    countryRef.current.value = "";
  };

  return (
    <div>
      {errorModeling &&
        ReactDOM.createPortal(
          <ErrorModelingg />,
          document.getElementById("errorModeling")
        )}
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
