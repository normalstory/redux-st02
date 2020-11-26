//redux - Ducks pettern 01 액션타입
const CHANGE_INPUT = "todos/CHANGE_INPUT";
const INSERT = "todos/INSERT";
const TOGGLE = "todos/TOGGLE";
const REMOVE = "todos/REMOVE";

//redux - Ducks pettern 02 액션생성함수
export const changeInput = (input) => ({ type: CHANGE_INPUT, input });
let id = 4; //example text 개수, 새글 추가될떄마다 +1을 시작하기 위한 기준값
export const insert = (text) => ({
  type: INSERT,
  todo: { id: id++, text, done: false },
});
export const toggle = (id) => ({ type: TOGGLE, id });
export const remove = (id) => ({ type: REMOVE, id });

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

//redux - Ducks pettern 04 리듀서
function todos(state = initialState, action) {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        input: action.input,
      };
    case INSERT:
      return {
        ...state,
        todos: state.todos.concat(action.todo),
      };
    case TOGGLE:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, done: !todo.done } : todo
        ),
      };
    case REMOVE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };

    default:
      return state;
  }
}

export default todos;
