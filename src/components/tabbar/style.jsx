import styled from "styled-components";

export const TabBarDiv = styled.div`
    display: flex;
    align-items: center;
    justify-items: center;
     padding:0 30px;
    padding-top: 15px; 
    font-size: 14px;
    .left {
        display: flex;
        width: 567px;
        .left-item {
            margin-right:  17px;
            cursor: pointer;
            &:hover {
                transition:transform 0.3s;
                transform:translate(0,-5px);
            }
        }
    }
    .center {
        flex: 1;
        display: flex;
        /* padding: 0 140px; */
        justify-content: center;
        align-items: center;
        margin-top: -10px;
        input {
            transition: background-color .3s;
            border: 2px solid transparent;
            border: 1px solid var(--line_regular);
            height: 40px;
            width: 500px;
            border-radius:8px;
            outline: none;
            padding-left: 15px;
        }
    }
    .right {
        display: flex;
        /* width: 470px; */
        justify-content: center;
        align-items: center;
        .right-item {
            margin: 0 15px;
            cursor: pointer;
            &:hover {
                transition:transform 0.3s;
                transform:translate(0,-5px);
            }
          .userInfo {
            
            img {
                width:40px;
                height:40px;
                border-radius: 50%;
                transition: all .3s;
                &:hover {
                    transform: scale(2);
                    transition: all .3s;
                }
            }
          }
        }
       
    }
`