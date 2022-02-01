import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Aside } from "./components/Aside";
import { Home } from "./pages/Home/";
import { Contact } from "./pages/Contact";
import { Pokemon } from "./pages/Pokemon";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <div className="container"> 
          <main>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
              <Route path="/pokemons/:pokemonId" element={<Pokemon />}></Route>
            </Routes>
          </main>

          <Aside></Aside>
        </div>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
