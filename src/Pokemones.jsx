import React from "react";
import { useEffect, useState } from "react";
import "../src/estilos/Pokemones.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Pokemones() {
  const [pokemones, setPokemones] = useState([]);
  const apiPokemones = async () => {
    const respuesta = await axios.get("https://pokeapi.co/api/v2/pokemon/");
    setPokemones(respuesta.data.results);
  };
  useEffect(() => {
    apiPokemones();
  }, []);
  return (
    <div className="containerPokemones">
      <ul>
        {pokemones.map((pokemon) => {
          let urlCortada = pokemon.url.split("/");
          return (
            <div className="cartaPokemon" key={pokemon.name}>
              <h3>
                <Link to={"/pokemones/" + urlCortada[6]} className="link">
                  {pokemon.name}
                </Link>
              </h3>
              <button>Agregar a favoritos</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default Pokemones;
