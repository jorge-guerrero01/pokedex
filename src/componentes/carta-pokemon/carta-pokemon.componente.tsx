import { MouseEventHandler } from "react";
import styled from "styled-components";

const Texto = styled.h1`
  color: red;
`;

type CartaProps = {
  pokemon: string;
  clickHandler?: MouseEventHandler;
  i?: number;
};

const CartaPokemon = ({ pokemon, clickHandler, i }: CartaProps) => (
  <div key={i} onClick={clickHandler}>
    <Texto>{pokemon}</Texto>
    <img
      alt={`pokemon ${pokemon}`}
      src={`https://img.pokemondb.net/artwork/${pokemon}.jpg`}
    />
  </div>
);

export default CartaPokemon;
