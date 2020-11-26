import React, { useCallback } from "react";
import Todos from "../components/Todos";
import { changeInput, insert, toggle, remove } from "../modules/todos";
//import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux"; //hooks로 전환하기

// const TodosContainer = ({
//   input,
//   todos,
//   changeInput,
//   insert,
//   toggle,
//   remove,
// }) => {
//   return (
//     <div>
//       <Todos
//         input={input}
//         todos={todos}
//         onChangeInput={changeInput}
//         onInsert={insert}
//         onToggle={toggle}
//         onRemove={remove}
//       />
//     </div>
//   );
// };

// export default connect(
//   //   (state) => ({
//   //     input: state.todos.input,
//   //     todos: state.todos.todos,
//   //   }),
//   ({ todos }) => ({
//     input: todos.input,
//     todos: todos.todos,
//   }),
//   {
//     changeInput,
//     insert,
//     toggle,
//     remove,
//   }
// )(TodosContainer);

//**hooks로 재구성
const TodosContainer = () => {
  const { input, todos } = useSelector(({ todos }) => ({
    input: todos.input,
    todos: todos.todos,
  }));
  const dispatch = useDispatch();
  const onChangeInput = useCallback((input) => dispatch(changeInput(input)), [
    dispatch,
  ]);
  const onInsert = useCallback((text) => dispatch(insert(text)), [dispatch]);
  const onToggle = useCallback((id) => dispatch(toggle(id)), [dispatch]);
  const onRemove = useCallback((id) => dispatch(remove(id)), [dispatch]);

  return (
    <div>
      <Todos
        input={input}
        todos={todos}
        onChangeInput={onChangeInput}
        onInsert={onInsert}
        onToggle={onToggle}
        onRemove={onRemove}
      />
    </div>
  );
};

export default TodosContainer;
