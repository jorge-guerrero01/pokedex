import { FormEventHandler } from "react";
import styled from "styled-components";
import { Container, Form, Input } from "../../GlobalStyle.style";

type BuscadorProps = {
  placeholder: string;
  onSubmitHandler: FormEventHandler;
  onChangeHandler?: FormEventHandler;
};

const Button = styled.button`
  cursor: pointer;
  text-decoration: none;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  font-family: montserrat;
  font-weight: 600;
  font-size: 15px;
  color: #000000;
  border-style: none;
  background-color: white;
  transition: 0.5s ease-in-out;
  &:hover {
    background-color: #e8d9ff;
  }
`;

export default function Buscador({
  placeholder,
  onSubmitHandler,
  onChangeHandler,
}: BuscadorProps) {
  return (
    <Container wrap="wrap">
      <Form onSubmit={onSubmitHandler}>
        <Input
          required
          type="search"
          placeholder={placeholder}
          onChange={onChangeHandler}
        ></Input>
        <Button type="submit">Buscar</Button>
      </Form>
    </Container>
  );
}
