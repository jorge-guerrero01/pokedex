import { MouseEventHandler } from "react";
import styled from "styled-components";
import { Container, Texto } from "../../GlobalStyle.style";

export const Imagen = (className?: string) => {
  return (
    <img
      className={className}
      alt="cargando..."
      src="https://img.pokemondb.net/sprites/home/normal/bulbasaur.png"
    />
  );
};

type CartaProps = {
  pokemon: string;
  clickHandler?: MouseEventHandler;
  i?: number;
  className?: string;
};

const CartaPokemon = ({ pokemon, clickHandler, i, className }: CartaProps) => (
  <>
    <Container className={className} key={i} onClick={clickHandler}>
      <Texto>{pokemon.charAt(0).toUpperCase() + pokemon.slice(1)}</Texto>
      <img
        alt={`pokemon ${pokemon}`}
        src={`https://img.pokemondb.net/sprites/home/normal/${pokemon}.png`}
      ></img>
      <div></div>
      <div></div>
    </Container>
  </>
);

export default CartaPokemon;
