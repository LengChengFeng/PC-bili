import styled from "styled-components";

export const WrappedBoxDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 20px;
  margin-top: 20px;
  box-sizing: border-box;
  .videoInfo {
    width: 19%;
    margin-left: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    .videoCover {
      position: relative;
      color: #fff;
      img {
        width: 275px;
        border-radius: 8px;
      }
      .count {
        display: flex;
        justify-content: space-between;
        position: absolute;
        width: 100%;
        bottom: 10px;
        left: 0;
        right: 0;
      }
    }
    .info {
      .desc {
        color: #18191c;
        padding-right: 24px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .author {
        margin-top: 8px;
        color: #9499a0;
      }
    }
  }
`;
