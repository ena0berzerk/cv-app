import React from "react";

import classes from "./Aside.module.scss";
import Personal from "./Personal/Personal";
import InfoBlock from "./InfoBlock/InfoBlock";
import Input from "../../Input/Input";
import Button from "../../Button/Button";

export default function Aside() {
  return (
    <>
      <aside className={classes.root}>
        <Personal />

        <InfoBlock title="Experience">
          <Input placeholder="Company name" />
          <Input placeholder="Job Position" />
          <Input placeholder="Responsibilities" />
          <Input placeholder="From" />
          <Input placeholder="To" />
          <div className={classes.btnWrapper}>
            <Button>Remove</Button>
          </div>
        </InfoBlock>
        <InfoBlock title="Education">
          <Input placeholder="School name" />
          <Input placeholder="Title of study" />
          <Input placeholder="Date of study (eg. 2015-22 y.)" />
          <div className={classes.btnWrapper}>
            <Button>Remove</Button>
          </div>
        </InfoBlock>
      </aside>
    </>
  );
}
