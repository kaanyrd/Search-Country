import React from "react";
import classes from "./ErrorModeling.module.css";

function ErrorModeling(props) {
  const closeModelHandler = () => {
    props.setErrorModeling(false);
  };

  return (
    <div>
      <div onClick={closeModelHandler} className={classes.background}></div>
      <div className={classes.errorModeling}>
        <div className={classes.content}>
          <h1>{props.error.title}</h1>
          <p>{props.error.message}</p>
          <button className={classes.closeButton} onClick={closeModelHandler}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default ErrorModeling;
