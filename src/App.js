import React from "react";
import classes from "./App.module.css";
import Form from "./components/Form/Form";
import Header from "./components/UI/Header";

function App() {
  const lifting = (data) => {
    console.log(data);
  };

  return (
    <div className={classes.app}>
      <div className={classes.mainApp}>
        <Header />
        {/* <hr /> */}
        <Form lifting={lifting} />
      </div>
    </div>
  );
}

export default App;
