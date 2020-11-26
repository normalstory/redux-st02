//*yarn add redux-action
import { createAction, handleActions } from "redux-actions";
//**yarn add immer
import produce from "immer";

//redux - Ducks pettern 01 액션타입
const CHANGE_INPUT = "todos/CHANGE_INPUT";
const INSERT = "todos/INSERT";
const TOGGLE = "todos/TOGGLE";
const REMOVE = "todos/REMOVE";

// //redux - Ducks pettern 02 액션생성함수
// export const changeInput = (input) => ({ type: CHANGE_INPUT, input });
// let id = 4; //example text 개수, 새글 추가될떄마다 +1을 시작하기 위한 기준값
// export const insert = (text) => ({
//   type: INSERT,
//   todo: { id: id++, text, done: false },
// });
// export const toggle = (id) => ({ type: TOGGLE, id });
// export const remove = (id) => ({ type: REMOVE, id });

//redux - Ducks pettern 02 액션생성함수 + createActions
// export const changeInput = (input) => createActions({ CHANGE_INPUT, input });
export const changeInput = createAction(CHANGE_INPUT, (input) => input);
let id = 4;
export const insert = createAction(INSERT, (text) => ({
  id: id++,
  text,
  done: false,
}));
export const toggle = createAction(TOGGLE, (id) => id);
export const remove = createAction(REMOVE, (id) => id);

//redux - Ducks pettern 03 초기상태
const initialState = {
  input: "",
  todos: [
    {
      id: 1,
      text: "리액트 복습 01",
      done: true,
    },
    {
      id: 2,
      text: "리액트 복습 02",
      done: false,
    },
    {
      id: 3,
      text: "리액트 복습 03",
      done: false,
    },
  ],
};

// //redux - Ducks pettern 04 리듀서
// function todos(state = initialState, action) {
//   switch (action.type) {
//     case CHANGE_INPUT:
//       return {
//         ...state,
//         input: action.input,
//       };
//     case INSERT:
//       return {
//         ...state,
//         todos: state.todos.concat(action.todo),
//       };
//     case TOGGLE:
//       return {
//         ...state,
//         todos: state.todos.map((todo) =>
//           todo.id === action.id ? { ...todo, done: !todo.done } : todo
//         ),
//       };
//     case REMOVE:
//       return {
//         ...state,
//         todos: state.todos.filter((todo) => todo.id !== action.id),
//       };

//     default:
//       return state;
//   }
// }

////redux - Ducks pettern 04 리듀서 + createAction 01
// const todos = handleActions(
//   {
//     [CHANGE_INPUT]: (state, action) => ({
//       ...state,
//       input: action.payload,
//     }),
//     [INSERT]: (state, action) => ({
//       ...state,
//       todos: state.todos.concat(action.payload),
//     }),
//     [TOGGLE]: (state, action) => ({
//       ...state,
//       todos: state.todos.map((todo) =>
//         todo.id === action.payload ? { ...todo, done: !todo.done } : todo
//       ),
//     }),
//     [REMOVE]: (state, action) => ({
//       ...state,
//       todos: state.todos.filter((todo) => todo.id !== action.payload),
//     }),
//   },
//   initialState
// );

// ////redux - Ducks pettern 04 리듀서 + createAction 02(payload에 이름설정하기)
// const todos = handleActions(
//   {
//     [CHANGE_INPUT]: (state, { payload: input }) => ({ ...state, input }),
//     [INSERT]: (state, { payload: todo }) => ({
//       ...state,
//       todos: state.todos.concat(todo),
//     }),
//     [TOGGLE]: (state, { payload: todos }) => ({
//       ...state,
//       todos: state.todos.map((todo) =>
//         todo.id === todos ? { ...todo, done: !todo.done } : todo
//       ),
//     }),
//     [REMOVE]: (state, { payload: id }) => ({
//       ...state,
//       todos: state.todos.filter((todo) => todo.id !== id),
//     }),
//   },
//   initialState
// );

////redux - Ducks pettern 04 리듀서 + 불변성관리 immer
const todos = handleActions(
  {
    //   [CHANGE_INPUT]: (state, { payload: input }) => ({
    //      ...state, input
    //     }),
    [CHANGE_INPUT]: (state, { payload: input }) =>
      produce(state, (draft) => {
        draft.input = input;
      }),
    //   [INSERT]: (state, { payload: todo }) => ({
    //     ...state,
    //     todos: state.todos.concat(todo),
    //   }),
    [INSERT]: (state, { payload: todo }) =>
      produce(state, (draft) => {
        draft.todos.push(todo);
      }),
    //   [TOGGLE]: (state, { payload: todos }) => ({
    //       ...state,
    //     todos: state.todos.map((todo) =>
    //       todo.id === todos ? { ...todo, done: !todo.done } : todo
    //     ),
    //   }),
    [TOGGLE]: (state, { payload: id }) =>
      produce(state, (draft) => {
        const todo = draft.todos.find((todo) => todo.id === id);
        todo.done = !todo.done;
      }),
    // [REMOVE]: (state, { payload: id }) => ({
    //   ...state,
    //   todos: state.todos.filter((todo) => todo.id !== id),
    // }),
    [REMOVE]: (state, { payload: id }) =>
      produce(state, (draft) => {
        const index = draft.todos.findIndex((todo) => todo.id === id);
        draft.todos.splice(index, 1);
      }),
  },
  initialState
);

export default todos;
