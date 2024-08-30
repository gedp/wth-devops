import React from "react";
import ReactDOM from "react-dom";
import Hours from "../components/Hours";

const App = () => {
  return (
    <div>
      <h1>Bienvenido al Refugio de Animales</h1>
      <Hours />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));