export default function Paginacion({ siguientePagina, anteriorPagina }) {
  return (
    <div>
      {anteriorPagina && <button onClick={anteriorPagina}>anterior</button>}
      {siguientePagina && <button onClick={siguientePagina}>siguiente</button>}
    </div>
  );
}
