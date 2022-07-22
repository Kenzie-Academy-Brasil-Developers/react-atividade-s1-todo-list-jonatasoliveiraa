import "./style.css"
function TodoList({ todos, handleTodo }) {
  return (
    <ul>
      {todos.map((elem, index) => (
        <li key={index}>
          {elem}
          <button onClick={() => handleTodo(elem)}>Concluir Tarefa</button>
        </li>
      ))}
    </ul>
  );
}
export default TodoList;
