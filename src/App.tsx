import ListaPokemon from "./componentes/lista-pokemon/lista-pokemon.componente";
import { GlobalStyles, Texto } from "./GlobalStyle.style";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Texto color="#000b30" tamaño="40px" id="inicio">
        Pokedex
      </Texto>
      <ListaPokemon />
    </>
  );
}
