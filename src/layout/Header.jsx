import { Link } from "react-router-dom";
import "../estilos/Header.css";

function Header() {
  return (
    <header>
      <div className="navImg">
        <Link to={"/"}>
          {" "}
          <img
            src="https://i.pinimg.com/1200x/e3/cc/05/e3cc0514320be93113772100cbc1dbc4.jpg"
            alt="poke"
            className="imgHeader"
          />{" "}
        </Link>
      </div>
      <div className="navBotones">
        <Link className="linkNav" to={"/pokemones"}>
          Inicio
        </Link>
        <Link className="linkNav" to={"/favoritos"}>
          Favoritos
        </Link>
      </div>
    </header>
  );
}

export default Header;
