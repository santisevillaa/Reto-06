const LISTA_POKEMONES = "LISTA_POKEMONES";
const GUARDAME_POKEMON = "GUARDAME_POKEMON";

const estadoInicial = {
  pokemones: [], // Para almacenar la lista de Pokemones
  favoritos: [], // Para almacenar los Pokemones favoritos
};

export default function Reducer(state = estadoInicial, action) {
  const { payload, type } = action;
  switch (type) {
    // Caso para guardar la lista completa de Pokemones
    case LISTA_POKEMONES:
      return {
        ...state,
        pokemones: payload,
      };

    // Caso para agregar un Pokémon a los favoritos
    case GUARDAME_POKEMON:
      // Verificamos si el Pokémon ya está en favoritos
      const isFavorite = state.favoritos.some((fav) => fav.id === payload.id);
      if (!isFavorite) {
        return {
          ...state,
          favoritos: [...state.favoritos, payload],
        };
      } else {
        return state; // Si ya está en favoritos, no hacemos nada
      }

    default:
      return state;
  }
}
