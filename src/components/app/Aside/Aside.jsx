import React from "react";

import classes from "./Aside.module.scss";
import Input from "../../Input/Input";
import Personal from "./Personal/Personal";

export default function Aside() {
  return (
    <>
      <aside className={classes.root}>
        <Personal />

        <div>Experience</div>
        <div>Skills</div>
        <div>Education</div>
      </aside>
    </>
  );
}
