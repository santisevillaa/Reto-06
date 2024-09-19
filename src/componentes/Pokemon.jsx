import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import Contexto from "../contexto/Contexto.jsx"; // Importa el contexto
import "../estilos/Pokemon.css";

const GUARDAME_POKEMON = "GUARDAME_POKEMON";

function Pokemon() {
  const { state, dispatch } = useContext(Contexto); // Accede al estado global
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
  const agregarAFavoritos = (pokemon) => {
    const pokemonCompleto = {
      id: pokemon.id,
      name: pokemon.name,
      sprites: pokemon.sprites,
    };
    dispatch({ type: GUARDAME_POKEMON, payload: pokemonCompleto });
  };
  return (
    <div className="containerPokemonDetalle">
      <div className="containerPokemon">
        <img
          src={pokemon.sprites?.other["official-artwork"]?.front_default}
          alt=""
          className="imgDetalle"
        />
        <h1>{pokemon?.name}</h1>
        <div className="dataPokemon">
          <h3>Altura: {pokemon?.height}</h3>
          <h3>Peso: {pokemon?.weight}</h3>
          <ul className="ulPokemon">
            Tipo:
            {pokemon.types &&
              pokemon.types.map((typeInfo, index) => (
                <li key={index}>{typeInfo.type.name}</li>
              ))}
          </ul>
        </div>
        <div className="botonesTarjeta">
          <button>
            <Link to={"/pokemones"} className="link">
              Volver a la lista
            </Link>
          </button>
          <button onClick={() => agregarAFavoritos(pokemon)}>
            Agregar como favorito
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pokemon;
