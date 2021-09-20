import React from "react";

const Todo = (props) => {
  const { text, completed } = props;

  const handleChangeCompleted = () => {
    const { onChange, id, completed } = props;
    onChange(id, !completed);
  };

  const handleClickDelete = () => {
    const {onDelete, id} = props
    onDelete(id)
  }

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={handleChangeCompleted}
        />
        {text}
      </label>
      <button>編集</button>
      <button onClick={handleClickDelete}>削除</button>
    </>
  );
};

export default Todo;
