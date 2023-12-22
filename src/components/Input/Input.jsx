import React from "react";

import classes from "./Input.module.scss";

export default function Input({ type, placeholder, style }) {
  return (
    <>
      <input
        style={style}
        className={classes.root}
        type={type}
        placeholder={placeholder}
      />
    </>
  );
}
