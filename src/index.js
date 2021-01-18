import React from "react";
import ReactDOM from "react-dom";

const MyName = "Othmane Hanaf";
var CurrentYear = new Date().getFullYear();

ReactDOM.render(
  <div>
    <p>Created by {MyName}.</p>
    <p>Copyright {CurrentYear}.</p>
  </div>,
  document.getElementById("root")
);

//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
