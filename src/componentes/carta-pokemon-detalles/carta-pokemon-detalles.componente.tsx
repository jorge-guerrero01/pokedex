import { useEffect, useState } from "react";
import axios from "axios";
type CartaDetalladaProps = {
  pokemon: string;
};

export default function CartaDetallada({ pokemon }: CartaDetalladaProps) {
  const [nombre, setNombre] = useState("");
  const [id, setId] = useState(0);
  const [tipos, setTipos] = useState([]);
  const [altura, setAltura] = useState(0);
  const [peso, setPeso] = useState(0);
  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`).then((res) => {
      setNombre(res.data.name);
      setId(res.data.id);
      setTipos(res.data.types.map((t: any) => t.type.name));
      setAltura(res.data.height / 10);
      setPeso(res.data.weight / 10);
    });
  }, [pokemon]);

  return (
    <>
      <h1>{nombre}</h1>
      <h2>id: {id}</h2>
      <img
        alt={`pokemon ${nombre}`}
        src={`https://img.pokemondb.net/artwork/${nombre}.jpg`}
      />
      {tipos.map((t: string) => (
        <h3 key={t}>{t}</h3>
      ))}
      <h4>
        Altura:{altura}m Peso:{peso}kg
      </h4>
    </>
  );
}
