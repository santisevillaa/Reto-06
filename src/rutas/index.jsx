import { BrowserRouter, Routes, Route } from "react-router-dom";
import UsarContexto from "../contexto/UsarContexto.jsx";
import Home from "../componentes/Home.jsx";
import Pokemones from "../componentes/Pokemones.jsx";
import Pokemon from "../componentes/Pokemon.jsx";
import Favoritos from "../componentes/Favoritos.jsx";
import Layout from "../layout/Layout.jsx";

function App() {
  return (
    <UsarContexto>
      <BrowserRouter basename="/Reto06">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/pokemones" element={<Pokemones />}></Route>
            <Route path="/pokemones/*" element={<Pokemon />}></Route>
            <Route path="/favoritos" element={<Favoritos />}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </UsarContexto>
  );
}

export default App;
