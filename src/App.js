import React, { useState } from "react";
import CheckAll from "./components/CheckAll";
import Form from "./components/Form";
import Todo from "./components/Todo";

let currentId = 0;

const App = () => {
  const [state, setState] = useState({
    todos: [],
  });
  const { todos } = state;
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

  const handleChangeCompleted = (id, completed) => {
    const newTodos = state.todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed,
        };
      }
      return todo;
    });
    setState({ todos: newTodos });
  };

  const handleClickCompleted = () => {
    const newTodos = state.todos.filter(({completed}) => !completed)
    setState({todos:newTodos})
  }

  const handleClickDelete = id => {
    const newTodos = state.todos.filter(todo => 
      todo.id !== id
    )
    setState({todos: newTodos})
  }

  return (
    <div>
      <Form onSubmit={handleSubmit} />
      <CheckAll
        allCompleted={
          todos.length > 0 && todos.every(({ completed }) => completed)
        }
      />

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
                onChange={handleChangeCompleted}
                onDelete={handleClickDelete}
              />
            </li>
          );
        })}
      </ul>
      <button onClick={handleClickCompleted} >完了済みを全て削除</button>
    </div>
  );
};

export default App;
