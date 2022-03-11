import React from "react";
import { Layout } from "antd";

import "../layouts/LayoutLogin.scss";
export const LayoutLogin = (props) => {
  const { children } = props;
  const { Content } = Layout;
  return (
    <Layout>
      <Layout>
        <Content className="contenido">{children}</Content>
      </Layout>
    </Layout>
  );
};
