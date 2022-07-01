import Styled from "styled-components";

export const GuideBar = Styled.div`
margin-top:15px;
box-sizing: border-box;
  display:flex;
  .left {
    display: flex;
    .nav1 {
      height:80px;
      width:80px;
      img{
        height:80px;
        width:80px;
      }
    }
  }
  .right {
    display: flex;
    flex-wrap:wrap;
    width: 1223px;
    .right-item {
      width: 92px;
      padding: 2px 0;
      text-align: center;
      line-height:32px;
      color:#61666D;
      background-color: #F6F7F8;
      height:32px;
      margin-left:8px;
      margin-top:10px;
      border-radius:6px;
      cursor:pointer;
      &:hover{
        background-color: #e3e5e7;
      }
    }
  }
  .center {
    display:flex;
    flex-wrap: wrap;
    width:258px;
    border-left:1px solid #ccc;
    .center-item {
      cursor:pointer;
      display:flex;
      margin-top:10px;
      justify-content: center;
      align-items: center;
      padding: 0 20px;
      &:hover {
        color:skyblue;
      }
    }
  }
`;