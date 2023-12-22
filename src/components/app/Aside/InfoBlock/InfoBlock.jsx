import React from "react";

import Button from "../../../Button/Button";
import classes from "./InfoBlock.module.scss";

export default function InfoBlock({ title, children }) {
  return (
    <>
      <div className={classes.root}>
        <h3>{title}</h3>
        <div className={classes.inputWrapper}>
          {children}
          <Button>Add</Button>
        </div>
      </div>
    </>
  );
}
