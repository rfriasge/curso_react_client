import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import { HomeOutlined, LoginOutlined } from "@ant-design/icons";
import "./MenuSider.scss";

export default function MenuSider(props) {
  const { Sider } = Layout;
  const { menuCollapsed } = props;
  return (
    <Sider className="admin-sider" collapsed={menuCollapsed}>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link to={"/admin"}>
            <span className="nav-text">Home</span>
          </Link>
        </Menu.Item>

        <Menu.Item key="2" icon={<LoginOutlined />}>
          <Link to={"/admin/login"}>
            <span className="nav-text">Login</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}
