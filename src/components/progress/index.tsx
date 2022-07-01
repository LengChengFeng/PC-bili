import { Progress } from "antd";
import React, { useEffect, useState } from "react";
interface IIprops {
  percent: number;
}
const progress: React.FC<IIprops> = (props) => {
  const { percent } = props;
  return (
    <div>
      <h2>当前进度:{percent}</h2>
      <Progress
        type="circle"
        percent={percent}
        strokeColor={{
          "0%": "skyblue",
          "50%": "red",
          "100%": "orange",
        }}
      />
    </div>
  );
};
export default progress;
