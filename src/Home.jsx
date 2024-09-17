import React from "react";
import "../src/estilos/App.css";
import { Link } from "react-router-dom";
function App() {
  return (
    <>
      <div className="container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/640px-International_Pok%C3%A9mon_logo.svg.png"
          alt="imagen"
        />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Link to={"/pokemones"}>Ingresar</Link>
      </div>
    </>
  );
}

export default App;
