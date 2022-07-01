import { GuideBar } from "./style";
import nav1 from "@/assets/images/1.png";
import nav2 from "@/assets/images/2.png";
import nav3 from "@/assets/images/3.png";

function NavBar(props) {
  const { center, left, handleClick } = props;
  const barImg = [nav1, nav2, nav3];
  const handleBarClick = (item) => {
    console.log(item);
    handleClick(item);
  };
  return (
    <GuideBar className="navbar">
      <div className="left">
        {barImg.map((item, index) => {
          return (
            <div className="nav1" key={index}>
              <img src={item} />
            </div>
          );
        })}
      </div>
      <div className="right">
        {center.map((item, index) => {
          return (
            <div
              key={index}
              className="right-item"
              onClick={() => handleBarClick(item)}
            >
              {item}
            </div>
          );
        })}
      </div>
      <div className="center">
        {left.map((item, index) => {
          return (
            <div key={index} className="center-item">
              {item}
            </div>
          );
        })}
      </div>
    </GuideBar>
  );
}
export default NavBar;
