import React from "react";
import { Button } from "antd";
import AugsLogo from "../../../assets/logo-white.png";
import {
  CreditCardOutlined,
  MenuFoldOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";
import "./MenuTop.scss";
import { Link } from "react-router-dom";
export const MenuTop = (props) => {
  const { menuCollapsed, setMenuCollapsed } = props;
  return (
    <div className="menu-top">
      <div className="menu-top__left">
        <img className="menu-top__left-logo" src={AugsLogo} alt="Frias Logo" />

        <Button onClick={() => setMenuCollapsed(!menuCollapsed)} type="link">
          {menuCollapsed ? <CreditCardOutlined /> : <MenuFoldOutlined />}
        </Button>
      </div>
      <div className="menu-top__right">
        <Button type="link" onClick={() => console.log("click")}>
          <PoweroffOutlined />
        </Button>
      </div>
    </div>
  );
};
