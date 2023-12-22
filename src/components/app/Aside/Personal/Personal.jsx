import React from "react";

import Input from "../../../Input/Input";
import classes from "./Personal.module.scss";

export default function Personal() {
  return (
    <>
      <div className={classes.root}>
        <h3>Personal Information</h3>
        <div className={classes.inputWrapper}>
          <Input placeholder="Name" />
          <Input placeholder="Email" type="email" />
          <Input placeholder="Phone" type="tel" />
        </div>
      </div>
    </>
  );
}
