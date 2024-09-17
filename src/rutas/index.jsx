import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home.jsx";
import Pokemones from "../Pokemones.jsx";
import Pokemon from "../Pokemon.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/pokemones" element={<Pokemones />}></Route>
        <Route path="/pokemones/*" element={<Pokemon />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
