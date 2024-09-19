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
        <div className="cartaPokemon">
          <ul>
            {state.favoritos.map((pokemon) => (
              <li key={pokemon.name}>
                <h4>{pokemon.name}</h4>
                <Link to={`/pokemones/${pokemon.url.split("/")[6]}`}>
                  Ver detalles
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <>
          <p>No tienes Pokémones favoritos aún. Agrega alguno!</p>
          <button>
            <Link className="link" to={"/pokemones"}>
              Lista de Pokémones
            </Link>
          </button>
        </>
      )}
    </div>
  );
}

export default Favoritos;
