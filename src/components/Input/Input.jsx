import React from "react";

import classes from "./Input.module.scss";

export default function Input({ type, placeholder }) {
  return (
    <>
      <input className={classes.root} type={type} placeholder={placeholder} />
    </>
  );
}
