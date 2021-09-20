import React, { useState } from "react";

const Form = (props) => {
  const { onSubmit } = props;
  const [state, setState] = useState({
    input: "",
  });

  function handleChange(e) {
    setState({...state, input: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(state.input);
    setState({ input: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={state.input} onChange={handleChange} />
      <button>追加</button>
    </form>
  );
};

export default Form;
