import { Button } from "../../GlobalStyle.style";

export default function Paginacion({ siguientePagina, anteriorPagina }) {
  return (
    <div>
      {anteriorPagina && (
        <Button href="#inicio" onClick={anteriorPagina}>
          anterior
        </Button>
      )}
      {siguientePagina && (
        <Button href="#inicio" onClick={siguientePagina}>
          siguiente
        </Button>
      )}
    </div>
  );
}
