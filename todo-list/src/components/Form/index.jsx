import { useState } from "react";
import "./style.css"
function Form({ addTodo }) {
  const [todoInput, setTodoInput] = useState("");

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <input type="text" placeholder="Adicione algo na lista"onChange={(elem) => setTodoInput(elem.target.value)} />
      <button type="submit" onClick={() => addTodo(todoInput)}>
        Enviar
      </button>
    </form>
  );
}
export default Form;
