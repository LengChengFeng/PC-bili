import React from "react";
import { WrappedBoxDiv } from "./style";
interface IIprops {
  id: number;
  brand: string;
  create_time: string;
  desc: string;
  img: string;
  price: string;
  update_item: string;
  title: string;
}
interface IIVideoList {
  goodsList: IIprops[];
  handleClick: (item) => void;
}
const list = (props: IIVideoList) => {
  const { goodsList, handleClick } = props;
  const handleVideoClick = (item) => {
    handleClick(item);
  };

  return (
    <WrappedBoxDiv>
      {goodsList.map((item, index) => {
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
            </div>
            <div className="info">
              <div className="desc">{item.desc}</div>
              <div className="author">
                <span>{item.title} </span>
                <span style={{ color: "orange" }}>{item.price}</span>
              </div>
            </div>
          </div>
        );
      })}
    </WrappedBoxDiv>
  );
};
export default list;
