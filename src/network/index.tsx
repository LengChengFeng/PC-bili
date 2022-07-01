import axios from "axios";
import ReactDOM from "react-dom/client";
import { message, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import "./index.css";
const baseURL = "http://175.178.238.176:8080";
const service = axios.create({
  timeout: 50000, // 请求超时时间
  baseURL,
});

service.interceptors.request.use((config) => {
  showLoading();
  if (window.localStorage.getItem("token")) {
    config.headers["Authorization"] =
      window.localStorage.getItem("token") || "";
  }
  return config;
});
service.interceptors.response.use(
  (res) => {
    hideLoading();
    return res;
  },
  (err) => {
    const ErrorStatus = err.response.status;
    hideLoading();
    if (ErrorStatus === 404) {
      message.error("服务器请求未找到~");
    }
    if (err.message === "Network Error") {
      message.warning("网络链接异常！");
    }

    if (err.code === "ECONNABORTED") {
      message.warning("请求超时，请重试");
    }

    return Promise.reject(err);
  }
);

export function login(data) {
  return service({
    url: "/login",
    method: "POST",
    data: data,
  });
}

export function getUserInfo(id) {
  return service({
    url: `/user/${id}`,
  });
}

export function getDoll(params) {
  return service({
    url: "/doll",
    params,
  });
}

//商品详情
export function getDollDetail(id) {
  return service({
    url: `/goods/${id}`,
  });
}

// 当前正在请求的数量

let requestCount = 0;
// 显示loading
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
function showLoading() {
  if (requestCount === 0) {
    var dom = document.createElement("div");
    dom.setAttribute("id", "loading");
    document.body.appendChild(dom);
    ReactDOM.createRoot(dom).render(
      <Spin indicator={antIcon} tip="loading..." />
    );
  }
  requestCount++;
}
// 隐藏loading
function hideLoading() {
  requestCount--;
  if (requestCount === 0) {
    document.body.removeChild(document.getElementById("loading"));
  }
}
