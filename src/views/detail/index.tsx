import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDollDetail } from "../../network";
import Swiper from "../../components/swiper";
import { GoodsList, TabBarDiv, LogoDiv } from "./style.jsx";
import { Card } from "antd";
import Bg from "../../assets/images/bg1.png";
import TabBar from "../../components/tabbar/tabbar";
import { leftTitle, rightTitle } from "./hooks";

interface IIDetailData {
  Id: number;
  goodsDesc: string;
  goodsImg: string[];
  name: string;
  price: string;
  score: string;
  sell: string;
}

export default function index() {
  const params = useParams();
  const [detailData, setDetailData] = useState<IIDetailData>();

  useEffect(() => {
    getDollDetail(params.id).then((res) => {
      console.log(res);
      setDetailData(res.data[0]);
    });
  }, []);

  const showDetailGoods = () => {
    if (detailData !== undefined) {
      return (
        <div className="detail">
          <TabBarDiv>
            <TabBar left={leftTitle} right={rightTitle} color="black"></TabBar>
          </TabBarDiv>
          <LogoDiv>
            <div
              className="bg-logo"
              style={{
                background: `url(${Bg}) no-repeat `,
                zIndex: 999,
              }}
            ></div>
          </LogoDiv>
          <GoodsList>
            <Swiper imgList={detailData?.goodsImg} />

            <div className="goods-detail">
              <h2>商品详细信息</h2>
              <Card
                style={{ width: 300 }}
                cover={
                  <img
                    alt={detailData.goodsDesc}
                    src={detailData.goodsImg[1]}
                  />
                }
              >
                <div className="goods-info">
                  <div className="goods-desc">{detailData.goodsDesc}</div>
                </div>
                <div className="goods">
                  <div className="goods-name">{detailData.name}</div>
                  <div className="goods-price">{detailData.price}</div>
                </div>
                <div className="goods-other">
                  <div className="goods-score">
                    评分：
                    <span
                      style={{
                        color:
                          parseInt(detailData.score) >= 9 ? "green" : "orange",
                      }}
                    >
                      {detailData.score}
                    </span>
                  </div>
                  <div className="goods-sell">销量：{detailData.sell}</div>
                </div>
              </Card>
            </div>
          </GoodsList>
        </div>
      );
    }
  };

  return <div>{showDetailGoods()}</div>;
}
