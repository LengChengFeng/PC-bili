import React from "react";
import { WrappedBoxDiv } from "./style";
interface IIprops {
  img: string;
  desc: string;
  author: string;
  date: string;
  playCount: string;
  total: string;
}
interface IIVideoList {
  VideoList: IIprops[];
  handleClick: (item) => void;
}
const list = (props: IIVideoList) => {
  const { VideoList, handleClick } = props;
  const handleVideoClick = (item) => {
    handleClick(item);
  };
  return (
    <WrappedBoxDiv>
      {VideoList.map((item, index) => {
        return (
          <div className="videoInfo" key={index}>
            <div className="videoCover">
              <img
                src={item.img}
                alt=""
                onClick={() => {
                  handleVideoClick(item);
                }}
              />
              <div className="count">
                <div className="playCount">{item.playCount}</div>
                <div className="total">{item.total}</div>
              </div>
            </div>
            <div className="info">
              <div className="desc">{item.desc}</div>
              <div className="author">
                <span>{item.author} </span>
                <span>{item.date}</span>
              </div>
            </div>
          </div>
        );
      })}
    </WrappedBoxDiv>
  );
};
export default list;
