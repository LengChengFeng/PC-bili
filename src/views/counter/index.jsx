import { Component, useReducer } from "react";
import { increment, decrement, saveDoll } from "../../store1/actionCreators";
import { connect } from "react-redux";
class Counter extends Component {
  render() {
    return (
      <div>
        <h2>counter:{this.props.counter}</h2>
        <button
          onClick={() => {
            this.increment();
          }}
        >
          +1
        </button>
        <button
          onClick={() => {
            this.decrement();
          }}
        >
          -1
        </button>
      </div>
    );
  }
  increment() {
    this.props.add()
    this.props.save()
  }
  decrement() {
    this.props.sub()
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
  save() {
    dispatch(saveDoll)
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(Counter)