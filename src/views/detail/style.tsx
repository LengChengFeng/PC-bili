import Styled from "styled-components";
import Bg from "../../assets/images/bg1.png";
export const GoodsList = Styled.div`
  display:flex;
  justify-content:center;
  margin-top:20px;
  /* align-items:center; */
  .goods-detail {
    margin-left:7%;
    .goods-info {
      .goods-desc {
        font-size:20px;
        color:#666;
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
        
      }
     
    }
    .goods {
        display:flex;
        margin:10px 0 ;
        .goods-price {
          margin-left:20px;
          color:orange;
        }
      }
      .goods-other{
        display:flex;
        justify-content:space-between;
      }
  }
`;

export const TabBarDiv = Styled.div`
color:#ccc
height:50px !important;
border-top:1px solid #ccc;
`;

export const LogoDiv = Styled.div`
background-color: #00a0d8;
height:106px;
overflow:hidden;
  .bg-logo{
    width: 980px;
    height: 106px;
    margin: 0 auto;
    margin-top:20px;
    background-color:red
  }
`;
