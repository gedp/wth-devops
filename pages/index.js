import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Hours from "../components/Hours";

const App = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div>
      <h1>Bienvenido al Refugio de Animales</h1>
      {isClient && <Hours />}
    </div>
  );
};

if (typeof document !== 'undefined') {
  ReactDOM.render(<App />, document.getElementById("root"));
}