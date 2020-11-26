//store , rootReducer

import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux"; //01 스토어생성, 리듀서 연결
import { Provider } from "react-redux"; //02 리덕스 적용
import { composeWithDevTools } from "redux-devtools-extension"; //03 개발자도구
import App from "./App";
import rootReducer from "./modules"; //01 스토어생성, 리듀서 연결
import reportWebVitals from "./reportWebVitals";

const store = createStore(rootReducer, composeWithDevTools()); //01 스토어생성, 리듀서 연결

ReactDOM.render(
  //02
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
