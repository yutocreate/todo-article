import React from "react";

const Filter = (props) => {
  const { filter, onChange } = props;

  const handleChange = (e) => {
    onChange(e.currentTarget.value);
  };

  return (
    <select value={filter} onChange={handleChange}>
      <option value="all">全て</option>
      <option value="uncompleted">未完了</option>
      <option value="completed">完了済み</option>
    </select>
  );
};

export default Filter;
