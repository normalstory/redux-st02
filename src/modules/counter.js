//*yarn add redux-action
import { createAction, handleActions } from "redux-actions";

//redux - Ducks pettern 01 액션타입
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

// //redux - Ducks pettern 02 액션생성함수
// export const increase = () => ({ type: INCREASE });
// export const decrease = () => ({ type: DECREASE });
//redux - Ducks pettern 02 액션생성함수 + createAction
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

//redux - Ducks pettern 03 초기상태
const initialState = {
  number: 0,
};

// //redux - Ducks pettern 04 리듀서
// function counter(state = initialState, action) {
//   switch (action.type) {
//     case INCREASE:
//       return { number: state.number + 1 };
//     case DECREASE:
//       return { number: state.number - 1 };
//     default:
//       return state;
//   }
// }
//redux - Ducks pettern 04 리듀서 + createAction
const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 }),
  },
  initialState
);
export default counter;
