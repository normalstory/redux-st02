import React from "react";
import Todos from "../components/Todos";
import { changeInput, insert, toggle, remove } from "../modules/todos";
import { connect } from "react-redux";

const TodosContainer = ({
  input,
  todos,
  changeInput,
  insert,
  toggle,
  remove,
}) => {
  return (
    <div>
      <Todos
        input={input}
        todos={todos}
        onChangeInput={changeInput}
        onInsert={insert}
        onToggle={toggle}
        onRemove={remove}
      />
    </div>
  );
};

export default connect(
  //   (state) => ({
  //     input: state.todos.input,
  //     todos: state.todos.todos,
  //   }),
  ({ todos }) => ({
    input: todos.input,
    todos: todos.todos,
  }),
  {
    changeInput,
    insert,
    toggle,
    remove,
  }
)(TodosContainer);
