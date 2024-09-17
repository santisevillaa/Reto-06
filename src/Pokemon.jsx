import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "../src/estilos/Pokemon.css";

function Pokemon() {
  const [pokemon, setPokemon] = useState([]);
  const location = useLocation();
  const locationSplit = location.pathname.split("/");
  const url = "https://pokeapi.co/api/v2/pokemon/" + locationSplit[2] + "/";
  const apiPokemon = async () => {
    const respuesta = await axios.get(url);
    setPokemon(respuesta.data);
    console.log(respuesta.data);
  };
  useEffect(() => {
    apiPokemon();
  }, [url]);
  return (
    <div className="containerPokemonDetalle">
      <div className="containerPokemon">
        <img
          src={pokemon.sprites?.other["official-artwork"]?.front_default}
          alt=""
          className="imgDetalle"
        />
        <h3>{pokemon?.name}</h3>
        <h3>Peso: {pokemon?.weight}</h3>
        <div className="botonesTarjeta">
          <button>
            <Link to={"/pokemones"} className="link">
              Volver a la lista
            </Link>
          </button>
          <button>Agregar a favoritos</button>
        </div>
      </div>
    </div>
  );
}

export default Pokemon;
