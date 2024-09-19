import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useContext } from "react";
import Contexto from "../contexto/Contexto.jsx"; // Importa el contexto
import "../estilos/Pokemones.css";

const LISTA_POKEMONES = "LISTA_POKEMONES";
const GUARDAME_POKEMON = "GUARDAME_POKEMON";

function Pokemones() {
  const { state, dispatch } = useContext(Contexto); // Accede al estado global

  // Obtener la lista de Pokémon desde la API
  useEffect(() => {
    const apiPokemones = async () => {
      const respuesta = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=24"
      ); 
      const pokemonesConDetalles = await Promise.all(
        respuesta.data.results.map(async (pokemon) => {
          const detalleRespuesta = await axios.get(pokemon.url);
          return {
            id: detalleRespuesta.data.id,
            name: detalleRespuesta.data.name,
            sprites: detalleRespuesta.data.sprites,
          };
        })
      );
      dispatch({ type: LISTA_POKEMONES, payload: pokemonesConDetalles });
      console.log(pokemonesConDetalles);
    };
    apiPokemones();
  }, [dispatch]);

  const agregarAFavoritos = (pokemon) => {
    dispatch({ type: GUARDAME_POKEMON, payload: pokemon });
  };

  return (
    <div className="containerPokemones">
      <ul>
        {state.pokemones.map((pokemon) => {
          return (
            <div className="cartaPokemon" key={pokemon.name}>
              <img
                src={pokemon.sprites?.front_default}
                alt={pokemon.name}
                className="imgPokemon"
              />
              <h3>
                <Link to={"/pokemones/" + pokemon.id} className="link">
                  {pokemon.name}
                </Link>
              </h3>
              <button onClick={() => agregarAFavoritos(pokemon)}>
                Favorito
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default Pokemones;
