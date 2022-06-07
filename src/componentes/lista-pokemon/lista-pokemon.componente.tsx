import { useState, useEffect } from "react";
import axios from "axios";
import CartaDetallada from "../carta-pokemon-detalles/carta-pokemon-detalles.componente";
import CartaPokemon from "../carta-pokemon/carta-pokemon.componente";
import Paginacion from "../paginacion/paginacion.componente";
import Selector from "../selector/selector.component";
import { Button, Container } from "../../GlobalStyle.style";
import styled from "styled-components";
import Buscador from "../buscador/buscador.componente";

type setterProps = {
  name: string;
};

type Props = {
  backgroundImage?: string;
};

const GirarImagen = styled.img`
  animation: rotation 2s infinite linear;
  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`;

const CartaEditadaDetalles = styled(CartaDetallada)<Props>`
  margin: 35px auto;
  width: fit-content;
  border-radius: 10px;
  background-color: #ffffff;
  div:nth-of-type(3) {
    div {
      border-radius: 10px;
      width: 50px;
    }

    h3 {
      padding: 5px;
      color: #ffffff;
      font-weight: 500;
    }
  }
`;

const CartaEditada = styled(CartaPokemon)<Props>`
  cursor: pointer;
  overflow: hidden;
  position: relative;
  flex: 0 0 280px;
  transition: 0.1s ease-in-out;
  &:hover {
    transform: scale(1.05, 1.05);
  }

  h1 {
    color: white;
    font-size: 30px;
  }
  img {
    width: 100px;
    height: 100px;
    margin-left: auto;
  }

  div:nth-of-type(2) {
    background-color: #000000;
  }

  div:last-child {
    background-image: ${(props) => props.backgroundImage};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    transform: scale(1.03);
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    z-index: -1;
    filter: blur(100px) saturate(1000%);
  }
`;

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

  const onSubmitHandler = (e: any) => {
    e.preventDefault();
    setDetalle(false);
    setName(e.target[0].value);
  };

  return (
    <>
      {cargando ? (
        <GirarImagen
          alt="cargando..."
          src="https://i.pinimg.com/originals/12/df/50/12df50f6e450846c0a898c585891025e.png"
        />
      ) : (
        <>
          {detalle ? (
            <>
              <Container wrap="wrap">
                <Buscador
                  placeholder="¡Busca tu Pokemon!"
                  onSubmitHandler={onSubmitHandler}
                />
                <Selector
                  cantidad={cantidad}
                  changeHandler={(e) => handleChange(e)}
                />
              </Container>

              <Container wrap="wrap">
                <>
                  {pokemon.map((p, i) => (
                    <CartaEditada
                      backgroundImage={`url(https://img.pokemondb.net/sprites/home/normal/${p}.png)`}
                      pokemon={p}
                      key={i}
                      clickHandler={() => {
                        setName(p);
                        setDetalle(false);
                      }}
                    />
                  ))}
                </>
              </Container>
              <Paginacion
                siguientePagina={urlPaginaSiguiente ? siguientePagina : null}
                anteriorPagina={urlPaginaAntes ? anteriorPagina : null}
              />
            </>
          ) : (
            <>
              <Buscador
                placeholder="¡Busca tu Pokemon!"
                onSubmitHandler={onSubmitHandler}
              />
              <Button
                onClick={() => {
                  setDetalle(true);
                }}
              >
                Volver
              </Button>
              <CartaEditadaDetalles pokemon={name} key={1} />
            </>
          )}
        </>
      )}
    </>
  );
}
