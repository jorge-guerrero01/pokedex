import { FormEventHandler } from "react";

type BuscadorProps = {
  placeholder: string;
  onSubmitHandler: FormEventHandler;
  onChangeHandler?: FormEventHandler;
};

export default function Buscador({
  placeholder,
  onSubmitHandler,
  onChangeHandler,
}: BuscadorProps) {
  return (
    <form onSubmit={onSubmitHandler}>
      <input
        required
        type="search"
        placeholder={placeholder}
        onChange={onChangeHandler}
      ></input>
      <button type="submit">Buscar</button>
    </form>
  );
}
