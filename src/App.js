import React, { useState } from "react";
import Form from "./components/Form";
import Todo from "./components/Todo";

let currentId = 0;

const App = () => {
  const [state, setState] = useState({
    todos: [],
  });
  console.log(state);

  const handleSubmit = (text) => {
    const newTodo = {
      id: currentId,
      text: text,
    };
    const newTodos = [...state.todos, newTodo];
    setState({ todos: newTodos });
    currentId++;
  };

  const handleChangecompleted = (id, completed) => {
    const newTodos = state.todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed,
        };
      }
      return todo;
    });
    setState({ todo: newTodos });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} />
      <label>
        <input type="checkbox"></input>
      </label>

      <select>
        <option>全て</option>
        <option>未完了</option>
        <option>完了済み</option>
      </select>

      <ul>
        {state.todos.map(({ text, id, completed }) => {
          return (
            <li key={id}>
              <Todo
                id={id}
                text={text}
                complete={completed}
                onChange={handleChangecompleted}
              />
            </li>
          );
        })}
      </ul>
      <button>完了済みを全て削除</button>
    </div>
  );
};

export default App;
