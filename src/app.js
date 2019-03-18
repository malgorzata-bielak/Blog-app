import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Filters from "./components/Filters";
import Posts from "./components/Posts";

const jsx = (
  <div>
    <Header />
    <Filters />
    <Posts />
  </div>
);

ReactDOM.render(jsx, document.getElementById("app"));
