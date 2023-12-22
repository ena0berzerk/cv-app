import React from "react";

import "./App.scss";

import Header from "./components/app/Header/Header";
import Aside from "./components/app/Aside/Aside";
import Main from "./components/app/MainSection/MainSection";

export default function App() {
  return (
    <>
      <div className="container">
        <Header />

        <Aside />

        <Main />
      </div>
    </>
  );
}
