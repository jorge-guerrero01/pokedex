import { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "../../GlobalStyle.style";
import styled from "styled-components";
type CartaDetalladaProps = {
  pokemon: string;
  className?: string;
  color?: string;
};

type Props = {
  color: string;
};

const Tipo = styled.div<Props>`
  background-color: ${(props) =>
    props.color === "normal"
      ? "#A8A77A"
      : props.color === "fire"
      ? "#EE8130"
      : props.color === "water"
      ? "#6390F0"
      : props.color === "electric"
      ? "#F7D02C"
      : props.color === "grass"
      ? "#7AC74C"
      : props.color === "ice"
      ? "#96D9D6"
      : props.color === "fighting"
      ? "#C22E28"
      : props.color === "poison"
      ? "#A33EA1"
      : props.color === "ground"
      ? "#E2BF65"
      : props.color === "flying"
      ? "#A98FF3"
      : props.color === "bug"
      ? "#A6B91A"
      : props.color === "rock"
      ? "#B6A136"
      : props.color === "ghost"
      ? "#735797"
      : props.color === "dragon"
      ? "#6F35FC"
      : props.color === "dark"
      ? "#705746"
      : props.color === "steel"
      ? "#B7B7CE"
      : props.color === "fairy"
      ? "#D685AD"
      : null};
`;

export default function CartaDetallada({
  pokemon,
  className,
}: CartaDetalladaProps) {
  const [nombre, setNombre] = useState("");
  const [id, setId] = useState(0);
  const [tipos, setTipos] = useState([]);
  const [altura, setAltura] = useState(0);
  const [peso, setPeso] = useState(0);
  useEffect(() => {
    try {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`).then((res) => {
        setNombre(res.data.name);
        setId(res.data.id);
        setTipos(res.data.types.map((t: any) => t.type.name));
        setAltura(res.data.height / 10);
        setPeso(res.data.weight / 10);
      });
    } catch (err) {}
  }, [pokemon]);

  return (
    <Container
      wrap="wrap"
      className={className}
      key={id}
      flexDirection="column"
    >
      <div>
        <h1>{nombre.charAt(0).toUpperCase() + nombre.slice(1)}</h1>
        <h2>id: {id}</h2>
      </div>
      <div>
        <img
          alt={`pokemon ${nombre}`}
          src={`https://img.pokemondb.net/sprites/home/normal/${nombre}.png`}
        />
      </div>
      <div>
        {tipos.map((t: string) => (
          <Tipo key={t} color={t}>
            <h3>{t}</h3>
          </Tipo>
        ))}
      </div>
      <div>
        <h3>Altura: {altura}m</h3>
        <h3>Peso: {peso}kg</h3>
      </div>
    </Container>
  );
}
