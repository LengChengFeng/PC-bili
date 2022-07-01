import { Component } from "react";
import store from "../../store1";
import { connect } from "./connect";
import { increment, decrement } from "../../store1/actionCreators";
class Counter extends Component {
  render() {
    return (
      <div>
        <hr />
        <h2>我是home:{this.props.counter}</h2>
        <button
          onClick={() => {
            this.props.add();
          }}
        >
          +1
        </button>
        <button
          onClick={() => {
            this.props.sub();
          }}
        >
          -1
        </button>
      </div>
    );
  }
  increment() {
    console.log(1);
    store.dispatch(increment());
  }
  decrement() {
    console.log(2);
    store.dispatch(decrement());
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter,
});

const mapDispatchToProps = (dispatch) => ({
  add() {
    dispatch(increment());
  },
  sub() {
    dispatch(decrement());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
