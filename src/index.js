import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

ReactDOM.render(<App />, document.getElementById("root"));

const names = ["alice", "bob"];
names.map((name) => {
  console.log(name[0].toUpperCase() + name.slice(1));
});
