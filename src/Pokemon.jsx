import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

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
    <>
      <img
        src={pokemon.sprites?.other["official-artwork"]?.front_default}
        alt=""
      />
      <h3>Nombre: {pokemon?.name}</h3>
      <h3>Peso: {pokemon?.weight}</h3>
    </>
  );
}

export default Pokemon;
