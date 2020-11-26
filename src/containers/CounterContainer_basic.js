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

const mapStateProps = (state) => ({
  number: state.counter.number,
});

const mapDispatchProps = (dispatch) => ({
  increase: () => {
    console.log("-increase-");
    dispatch(increase());
  },
  decrease: () => {
    console.log("-decrease-");
    dispatch(decrease());
  },
});

export default connect(mapStateProps, mapDispatchProps)(CounterContainer); //최종목적지
