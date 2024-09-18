import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";
import HelloWorld from "./components/HelloWorld.js";
import Person from "./components/Person.js";

ReactDOM.render(
    <React.StrictMode>
      <App />
      <HelloWorld />
      {/* <Person /> */}
    </React.StrictMode>,
    document.getElementById('root')
  );