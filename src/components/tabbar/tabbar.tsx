import { useState, useEffect, useRef } from "react";
import {
  Modal,
  Input,
  Form,
  FormInstance,
  Button,
  message,
  Dropdown,
  Space,
  Menu,
  MenuProps,
} from "antd";

import { TabBarDiv } from "./style";
import { login } from "../../network";
import { getUserInfo } from "../../network";

function useTabBar(props) {
  const [userInfo, setUserInfo] = useState<any>();
  const [info, setInfo] = useState<any>();
  const { left, right, color = "#fff" } = props;
  //userInfo的内容
  useEffect(() => {
    const mes = JSON.parse(window.localStorage.getItem("userInfo"));
    setInfo(mes);
    const userInfo = JSON.parse(window.localStorage.getItem("info"));
    setUserInfo(userInfo);
  }, []);

  const onClick: MenuProps["onClick"] = ({ key }) => {
    if (key === "2") {
      console.log(2);

      window.localStorage.removeItem("info");
      setUserInfo("");
    }
  };

  const menu = (
    <Menu
      onClick={onClick}
      items={[
        {
          label: "查看个人资料",
          key: "1",
        },
        {
          label: "退出登陆",
          key: "2",
        },
      ]}
    />
  );
  const showLogin = () => {
    if (userInfo) {
      return (
        <Dropdown overlay={menu}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <div className="right-item">
                <div className="userInfo">
                  <span>
                    <img src={userInfo.avatar} alt="" />
                  </span>
                  <span>{userInfo.username}</span>
                </div>
              </div>
            </Space>
          </a>
        </Dropdown>
      );
    } else {
      return (
        <div
          className="right-item"
          onClick={() => {
            goLogin();
          }}
        >
          登录
        </div>
      );
    }
  };

  //Modal的内容
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const formRef = useRef<FormInstance>();
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const goLogin = () => {
    setIsModalVisible(true);
  };
  const handleEnsure = () => {
    formRef.current.validateFields().then((values) => {
      login(values).then((res) => {
        if (res.data.status == "200") {
          window.localStorage.setItem("token", res.data.token);
          window.localStorage.setItem(
            "userInfo",
            JSON.stringify({ username: res.data.username, id: res.data.id })
          );
          message.success("登录成功");
          getUserInfo(info.id).then((res) => {
            setUserInfo(res.data[0]);
            let info = res.data[0];
            window.localStorage.setItem("info", JSON.stringify(info));
          });
          setIsModalVisible(false);
        } else {
          message.warn(res.data.message);
        }
      });
    });
  };

  return (
    <TabBarDiv style={{ color: color }}>
      <Modal
        centered
        title="登录"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          ref={formRef}
          name="basic"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 18 }}
          initialValues={{ remember: true }}
          autoComplete="off"
          labelAlign="left"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <div
              className="enuser"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "50%" }}
                onClick={() => {
                  handleEnsure();
                }}
              >
                确定
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Modal>
      <div className="left">
        {left.map((item) => {
          return (
            <div key={item} className="left-item">
              {item}
            </div>
          );
        })}
      </div>
      <div className="center">
        <input type="text" placeholder="请输入你想要的内容" />
      </div>
      <div className="right">
        {showLogin()}
        {right.map((item) => {
          return (
            <div key={item} className="right-item">
              {item}
            </div>
          );
        })}
      </div>
    </TabBarDiv>
  );
}

export default useTabBar;
