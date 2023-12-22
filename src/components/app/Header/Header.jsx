import React from "react";

import classes from "./Header.module.scss";
import Button from "../../Button/Button";

export default function Header() {
  return (
    <>
      <header className={classes.root}>
        <h2>CV Builder</h2>
        <Button>Download CV</Button>
      </header>
    </>
  );
}
