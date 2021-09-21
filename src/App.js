import React, { useState } from "react";
import CheckAll from "./components/CheckAll";
import EditTodo from "./components/EditTodo";
import Filter from "./components/Filter";
import Form from "./components/Form";
import Todo from "./components/Todo";

let currentId = 0;

const App = () => {
  const [state, setState] = useState({
    todos: [],
  });
  const [filt, setFilt] = useState({ filter: "all" });
  const { todos } = state;
  const { filter } = filt;
  const filteredTodos = todos.filter(({ completed }) => {
    switch (filter) {
      case "all":
        return true;
      case "uncompleted":
        return !completed;
      case "completed":
        return completed;
      default:
        return true;
    }
  });

  const handleChangeFilter = (filter) => {
    setFilt({ filter });
  };

  const handleSubmit = (text) => {
    const newTodo = {
      id: currentId,
      text: text,
      completed: false,
      editing: false,
    };
    const newTodos = [...state.todos, newTodo];
    setState({ todos: newTodos });
    currentId++;
  };

  const handleChangeAllCompleted = (completed) => {
    const newTodos = state.todos.map((todo) => ({
      ...todo,
      completed,
    }));
    setState({ todos: newTodos });
  };

  const handleClickDeleteCompleted = () => {
    const newTodos = state.todos.filter(({ completed }) => !completed);
    setState({ todos: newTodos });
  };

  const handleClickDelete = (id) => {
    const newTodos = state.todos.filter((todo) => todo.id !== id);
    setState({ todos: newTodos });
  };

  const handleChangeTodoAttribute = (id, key, value) => {
    const newTodos = state.todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          [key]: value,
        };
      }
      return todo;
    });
    setState({ todos: newTodos });
  };

  const handleUpdateTodoText = (id, text) => {
    const newTodo = state.todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          text: text,
          editing: false,
        };
      }
      return todo;
    });
    setState({ todos: newTodo });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} />
      <CheckAll
        allCompleted={
          todos.length > 0 && todos.every(({ completed }) => completed)
        }
        onChange={handleChangeAllCompleted}
      />
      <Filter filter={filter} onChange={handleChangeFilter} />
      <ul>
        {filteredTodos.map(({ text, id, completed, editing }) => {
          return (
            <li key={id}>
              {editing ? (
                <EditTodo
                  id={id}
                  text={text}
                  onCancel={handleChangeTodoAttribute}
                  onSubmit={handleUpdateTodoText}
                />
              ) : (
                <Todo
                  id={id}
                  text={text}
                  completed={completed}
                  onChange={handleChangeTodoAttribute}
                  onDelete={handleClickDelete}
                />
              )}
            </li>
          );
        })}
      </ul>
      <button onClick={handleClickDeleteCompleted}>完了済みを全て削除</button>
    </div>
  );
};

export default App;
