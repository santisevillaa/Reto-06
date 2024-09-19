import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Contexto from "../contexto/Contexto.jsx";
import "../estilos/Favoritos.css";

function Favoritos() {
  const { state } = useContext(Contexto); // Acceder al estado global
  console.log("Favoritos en el componente:", state.favoritos);
  return (
    <div className="containerFavoritos">
      {state.favoritos.length > 0 ? (
        <div className="cartaContainer">
          {state.favoritos.map((pokemon) => (
            <div className="cartaFav" key={pokemon.name}>
              <img
                src={pokemon.sprites?.front_default}
                alt={pokemon.name}
                className="imgFav"
              />
              <h3>{pokemon.name}</h3>
            </div>
          ))}
        </div>
      ) : (
        <>
          <p>No tienes Pokémones favoritos aún. Agrega alguno!</p>
          <button>
            <Link className="link" to={"/pokemones"}>
              Lista de Pokemones
            </Link>
          </button>
        </>
      )}
    </div>
  );
}

export default Favoritos;
