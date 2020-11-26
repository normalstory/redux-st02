import React from "react";

const TodoItem = (todo, onToggle, onRemove) => {
  return (
    <div>
      <input type="checkbox" />
      <span>example text</span>
      <button>delete</button>
    </div>
  );
};

const Todos = ({
  input,
  todos,
  onChangeInput,
  onInsert,
  onToggle,
  onRemove,
}) => {
  const onSubmit = (e) => e.preventDefault();

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" value={input} onChange={onChangeInput} />
        <button type="submit">Submit</button>
      </form>
      <div>
        <TodoItem onClick={onToggle} />
        <TodoItem />
        <TodoItem />
      </div>
    </div>
  );
};

export default Todos;
