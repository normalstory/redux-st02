//키 커넥터

import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Counter from "../components/Counter";
import { increase, decrease } from "../modules/counter";

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

//익명함수를 파라미터로 바로 적용
export default connect(
  (state) => ({
    number: state.counter.number,
  }),
  (dispatch) =>
    bindActionCreators(
      //다양한 (파라미터)함수를 사용하는 경우
      {
        increase,
        decrease,
      },
      dispatch
    )
)(CounterContainer); //최종목적지
