import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getDoll } from "../../network/index.jsx";
import { BodyWrapper, ContainerDiv, ExtentionDiv } from "./style";
import { navTitle, barRight } from "./hooks/titleData.jsx";
import TabBar from "../../components/tabbar/tabbar";
import NavBar from "../../components/navbar";
import Swiper from "../../components/swiper";
import VideoList from "../../components/video_list";
import GoodsList from "../../components/goods_list";
import Progress from "../../components/progress";
import RateComponent from "../../components/rate";
import Counter from "../counter";
import { leftTitle, rightTitle } from "./hooks/titleData.jsx";
import { NavBarDiv } from "./style";
import { bgImage } from "./imgModule";
//导入静态图片
import {
  swiper1,
  swiper2,
  swiper3,
  swiper4,
  Fly,
  container1,
} from "./imgModule";
import { message } from "antd";

interface IIdoos {
  id: number;
  brand: string;
  create_time: string;
  desc: string;
  img: string;
  price: string;
  update_item: string;
  title: string;
}

function Home() {
  const [dolls, setDolls] = useState<IIdoos[]>();
  const [percent, SetPercent] = useState(0);

  const navigate = useNavigate();
  const handleBarItemClick = (item) => {};
  const [swiperImg] = useState([swiper1, swiper2, swiper3, swiper4]);
  const [container] = useState([
    {
      id: "1",
      img: container1,
      desc: "【已完结】2022年最新版Vue3全套教程（超细致月嫂级教程，包教包会）",
      author: "写网页的叮叮",
      date: "6-1",
      playCount: "1.5W",
      total: "15:41:55",
    },
    {
      id: "2",
      img: container1,
      desc: "【已完结】2022年最新版Vue3全套教程（超细致月嫂级教程，包教包会）",
      author: "写网页的叮叮",
      date: "6-1",
      playCount: "1.5W",
      total: "15:41:55",
    },
    {
      id: "3",
      img: container1,
      desc: "【已完结】2022年最新版Vue3全套教程（超细致月嫂级教程，包教包会）",
      author: "写网页的叮叮",
      date: "6-1",
      playCount: "1.5W",
      total: "15:41:55",
    },
    {
      id: "4",
      img: container1,
      desc: "【已完结】2022年最新版Vue3全套教程（超细致月嫂级教程，包教包会）",
      author: "写网页的叮叮",
      date: "6-1",
      playCount: "1.5W",
      total: "15:41:55",
    },
    {
      id: "5",
      img: container1,
      desc: "【已完结】2022年最新版Vue3全套教程（超细致月嫂级教程，包教包会）",
      author: "写网页的叮叮",
      date: "6-1",
      playCount: "1.5W",
      total: "15:41:55",
    },
    {
      id: "6",
      img: container1,
      desc: "【已完结】2022年最新版Vue3全套教程（超细致月嫂级教程，包教包会）",
      author: "写网页的叮叮",
      date: "6-1",
      playCount: "1.5W",
      total: "15:41:55",
    },
    {
      id: "7",
      img: container1,
      desc: "【已完结】2022年最新版Vue3全套教程（超细致月嫂级教程，包教包会）",
      author: "写网页的叮叮",
      date: "6-1",
      playCount: "1.5W",
      total: "15:41:55",
    },
    {
      id: 8,
      img: container1,
      desc: "【已完结】2022年最新版Vue3全套教程（超细致月嫂级教程，包教包会）",
      author: "写网页的叮叮",
      date: "6-1",
      playCount: "1.5W",
      total: "15:41:55",
    },
  ]);
  useEffect(() => {
    const getDollsList = async () => {
      const res = await getDoll({ offset: 0, limit: 10 });
      setDolls(res.data);
    };
    getDollsList();
  }, []);
  const handleItemClick = (item) => {
    console.log(item);
    navigate(`/goods/${item.id}`);
  };
  useEffect(() => {
    let timer = setTimeout(() => {
      SetPercent(percent + 1);
    }, 100);
    if (percent === 100) {
      clearInterval(timer);
      message.success("成功了");
    }
  });
  return (
    <div className="app">
      {/* 顶部的 */}
      <NavBarDiv className="App" style={{ backgroundImage: `url(${bgImage})` }}>
        <TabBar left={leftTitle} right={rightTitle} />
      </NavBarDiv>
      <BodyWrapper className="wrapper">
        {/* 导航栏 */}
        <NavBar
          center={navTitle}
          left={barRight}
          handleClick={handleBarItemClick}
        />
        {/* 轮播图和展示区域 */}
        <ContainerDiv>
          <Swiper imgList={swiperImg} />
          <VideoList
            VideoList={container}
            handleClick={(item) => handleItemClick(item)}
          />
        </ContainerDiv>
        {/* 推广区域 */}
        <ExtentionDiv>
          <div className="extention-title">
            <img src={Fly} alt="" />
            <h2>推广</h2>
          </div>
          {dolls && (
            <div className="extention-goods">
              <GoodsList
                goodsList={dolls}
                handleClick={(item) => handleItemClick(item)}
              ></GoodsList>
            </div>
          )}
        </ExtentionDiv>
        <Progress percent={percent} />
        {/* <RateComponent /> */}
        <Counter />
        {/* <About /> */}
      </BodyWrapper>
    </div>
  );
}

export default Home;
