import React from "react";

const Todo = (props) => {
  const { text, completed } = props;
  
  const handleChangeCompleted = () => {
    const { onChange, id, completed } = props;
    onChange(id, "completed", !completed);
  };
  const handleClickEdit = () => {
    const {onChange, id, editing} = props
    onChange(id, "editing", !editing)
  }
  
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
      <button onClick={handleClickEdit}>編集</button>
      <button onClick={handleClickDelete}>削除</button>
    </>
  );
};

export default Todo;
