//키 커넥터

import React from "react";
import { connect } from "react-redux";
import Counter from "../components/Counter";
import { increase, decrease } from "../modules/counter";

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

//익명함수로 바로 적용
export default connect(
  (state) => ({
    number: state.counter.number,
  }),
  {
    increase, //파라미터 함수가 아닌 객체함수로 전달
    decrease, //객체함수를 넣으면 connect함수가 알아서 bindActionCreators 작업을 대신 해줌
  }
)(CounterContainer); //최종목적지
