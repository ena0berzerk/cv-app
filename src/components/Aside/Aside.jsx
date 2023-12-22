import React from "react";

import classes from "./Aside.module.scss";

export default function Aside() {
  return (
    <>
      <aside className={classes.root}>
        <div>Personal Information</div>
        <div>Experience</div>
        <div>Skills</div>
        <div>Education</div>
      </aside>
    </>
  );
}
