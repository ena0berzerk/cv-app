import React from "react";

import "./App.scss";

import Header from "./components/Header/Header";
import Aside from "./components/Aside/Aside";
import Main from "./components/MainSection/MainSection";

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
