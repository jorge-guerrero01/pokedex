import { useState, useEffect } from "react";
import axios from "axios";
import CartaDetallada from "../carta-pokemon-detalles/carta-pokemon-detalles.componente";
import CartaPokemon from "../carta-pokemon/carta-pokemon.componente";
import Paginacion from "../paginacion/paginacion.componente";
import Selector from "../selector/selector.component";

type setterProps = {
  name: string;
};

export default function ListaPokemon() {
  const [urlPaginaActual, setUrlPaginaActual] = useState(
    "https://pokeapi.co/api/v2/pokemon/?limit=20"
  );
  const [detalle, setDetalle] = useState(true);
  const [name, setName] = useState("");
  const [pokemon, setPokemon] = useState([]);
  const [urlPaginaSiguiente, setUrlPaginaSiguiente] = useState("");
  const [urlPaginaAntes, setUrlPaginaAntes] = useState("");
  const [cargando, setCargando] = useState(true);
  const [cantidad, setCantidad] = useState(20);

  useEffect(() => {
    setCargando(true);
    axios.get(urlPaginaActual).then((res) => {
      setCargando(false);
      setUrlPaginaSiguiente(res.data.next);
      setUrlPaginaAntes(res.data.previous);
      setPokemon(res.data.results.map((p: setterProps) => p.name));
    });
  }, [urlPaginaActual]);

  function siguientePagina() {
    setUrlPaginaActual(urlPaginaSiguiente);
  }

  function anteriorPagina() {
    setUrlPaginaActual(urlPaginaAntes);
  }

  const handleChange = (e: any) => {
    setCantidad(e.target.value);
    let number = e.target.value;
    setUrlPaginaActual(`https://pokeapi.co/api/v2/pokemon/?limit=${number}`);
  };

  return (
    <>
      {cargando ? <p>Cargando...</p> : null}
      
      {detalle ? (
        <>
          <Selector
            cantidad={cantidad}
            changeHandler={(e) => handleChange(e)}
          />
          <div>
            <>
              {pokemon.map((p, i) => (
                <CartaPokemon
                  pokemon={p}
                  key={i}
                  clickHandler={() => {
                    setName(p);
                    setDetalle(false);
                  }}
                />
              ))}
            </>
            <Paginacion
              siguientePagina={urlPaginaSiguiente ? siguientePagina : null}
              anteriorPagina={urlPaginaAntes ? anteriorPagina : null}
            />
          </div>
        </>
      ) : (
        <>
          <button
            onClick={() => {
              setDetalle(true);
            }}
          >
            Volver
          </button>
          <CartaDetallada pokemon={name} />
        </>
      )}
    </>
  );
}
