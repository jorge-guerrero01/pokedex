import { ChangeEventHandler } from "react";
import { Container, Select, Texto } from "../../GlobalStyle.style";

type SelectorProps = {
  cantidad: number;
  changeHandler: ChangeEventHandler;
};

export default function Selector({ cantidad, changeHandler }: SelectorProps) {
  return (
    <Container flexDirection="column">
      <Texto tamaño="15px">Cantidad:</Texto>
      <Select value={cantidad} onChange={changeHandler}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </Select>
    </Container>
  );
}
