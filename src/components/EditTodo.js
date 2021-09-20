import React, { useState } from "react";

const EditTodo = (props) => {
  const [state, setState] = useState({
    text: props.text,
  });

  const handleChange = (e) => {
    setState({ text: e.target.value });
  };

  const handleClickCancel = () => {
    const { onCancel, id } = props;
    onCancel(id, "editing", false);
  };

  const handleSubmit = () => {
    const { onSubmit, id } = props;
    if (state.text === "") return;
    onSubmit(id, state.text);
  };

  return (
    <div>
      <input type="text" value={state.text} onChange={handleChange} />
      <button onClick={handleClickCancel}>キャンセル</button>
      <button onClick={handleSubmit}>更新</button>
    </div>
  );
};

export default EditTodo;
