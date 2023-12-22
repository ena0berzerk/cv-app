import React from "react";

import classes from "./Button.module.scss";

export default function Button({ children }) {
  return <button className={classes.blue}>{children}</button>;
}
