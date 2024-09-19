import React from "react";
import { Link } from "react-router-dom";
import "../estilos/App.css";
function App() {
  return (
    <>
      <div className="containerHome">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/640px-International_Pok%C3%A9mon_logo.svg.png"
          alt="imagen"
        />
        <br />
        <br />
        <br />
        <br />
        <br />
        <button>
          <Link to={"/pokemones"} className="link">
            Ingresar
          </Link>
        </button>
      </div>
    </>
  );
}

export default App;
