import React from "react";
import Toolbar from "./UI/Toolbar";
import Viewer from "./UI/Viewer";
import "./styles.scss";

export default function App() {
  return (
    <div className="App">
      <Toolbar />
      <Viewer />
    </div>
  );
}
