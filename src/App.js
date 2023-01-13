import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Del from "./Function/List_2";
import React, { useState, useReducer } from "react";
import reducer from "./Function/reducer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Del messageList={state} />
      </header>
    </div>
  );
}

export default App;
