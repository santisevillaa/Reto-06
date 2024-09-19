import Contexto from "./Contexto";
import Reducer from "./Reducer";
import { useReducer } from "react";

function UsarContexto(props) {
  const { children } = props;
  const estadoInicial = {
    pokemones: [],
    favoritos: [],
  };

  const [state, dispatch] = useReducer(Reducer, estadoInicial);

  return (
    <>
      <Contexto.Provider value={{ state, dispatch }}>
        {children}
      </Contexto.Provider>
    </>
  );
}

export default UsarContexto;
