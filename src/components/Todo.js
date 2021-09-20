import React from "react";

const Todo = (props) => {
  const { text, completed } = props;

  const hadleChangeCompleted = () => {
    const { onChange, id, completed } = props;
    onChange(id, !completed);
  };

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={hadleChangeCompleted}
        />
        {text}
      </label>
      <button>編集</button>
      <button>削除</button>
    </>
  );
};

export default Todo;