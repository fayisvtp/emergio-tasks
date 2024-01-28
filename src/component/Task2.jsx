import { useState } from "react";

export default function Task2() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    setTodos([...todos, { list: todo, id: Date.now() }]);
    setTodo("");
    console.log(todo);
  };
  const deletTodo = (id) => {
    setTodos(todos.filter((e) => e.id !== id));
  };

  return (
    <div>
      <h2>todo llists</h2>
      <input
        type="text"
        placeholder="addTodo"
        value={todo}
        onChange={(event) => setTodo(event.target.value)}
      />

      <button onClick={addTodo}>add</button>
      <ul>
        {todos.map((values) => (
          <li key={values.id}>
            {values.list}
            <button onClick={() => deletTodo(values.id)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}