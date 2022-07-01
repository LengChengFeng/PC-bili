import { Rate } from "antd";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, sub, getDollList } from "../../store/counter/counter";

export default function RateComponent() {
  const [rate, setRate] = useState(5);
  const counter = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();
  const handleRate = (e) => {
    console.log(e);
  };
  const handleAdd = () => {
    dispatch(add());
    dispatch(getDollList({ offset: 0, limit: 10 }));
  };
  const handleSub = () => {
    dispatch(sub());
  };
  return (
    <div>
      <h2>当前计数：{counter}</h2>
      <button
        onClick={() => {
          handleAdd();
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          handleSub();
        }}
      >
        -1
      </button>
      <Rate
        defaultValue={rate}
        onChange={(e) => handleRate(e)}
        disabled
        allowHalf
        tooltips={["一星", "二星", "三星", "四星", "五星"]}
      />
    </div>
  );
}
