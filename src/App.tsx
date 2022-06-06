import ListaPokemon from "./componentes/lista-pokemon/lista-pokemon.componente";
import { useState } from "react";
import Buscador from "./componentes/buscador/buscador.componente";
import CartaDetallada from "./componentes/carta-pokemon-detalles/carta-pokemon-detalles.componente";

export default function App() {
  const [inputTexto, setInputTexto] = useState("");
  const [detalle, setDetalle] = useState(false);

  const onSubmitHandler = (e: any) => {
    e.preventDefault();
    setDetalle(true);
    setInputTexto(e.target[0].value);
  };

  const ocultarCarta = () => {
    setDetalle(false);
  };

  return (
    <>
      <h1>Pokedex</h1>
      <>
        <Buscador
          placeholder="¡Busca tu Pokemon por Nombre o Número!"
          onSubmitHandler={onSubmitHandler}
        />
        {detalle ? (
          <>
            <button onClick={ocultarCarta}>Volver</button>
            <CartaDetallada pokemon={inputTexto} />
          </>
        ) : (
          <ListaPokemon />
        )}
      </>
    </>
  );
}
