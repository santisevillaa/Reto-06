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
      const respuesta = await axios.get("https://pokeapi.co/api/v2/pokemon");
      dispatch({ type: LISTA_POKEMONES, payload: respuesta.data.results });
    };
    apiPokemones();
  }, [dispatch]);

  const agregarAFavoritos = (pokemon) => {
    dispatch({ type: GUARDAME_POKEMON, payload: pokemon });
    console.log(pokemon);
    console.log("Favoritos actuales:", state.favoritos);
  };

  return (
    <div className="containerPokemones">
      <ul>
        {state.pokemones.map((pokemon) => {
          let urlCortada = pokemon.url.split("/");
          return (
            <div className="cartaPokemon" key={pokemon.name}>
              <h3>
                <Link to={"/pokemones/" + urlCortada[6]} className="link">
                  {pokemon.name}
                </Link>
              </h3>
              <button onClick={() => agregarAFavoritos(pokemon)}>
                Agregar a favoritos
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default Pokemones;
