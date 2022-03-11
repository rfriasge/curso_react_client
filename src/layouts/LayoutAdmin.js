import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Layout } from "antd";
import { MenuTop } from "../components/Admin/MenuTop/MenuTop";
import MenuSider from "../components/Admin/MenuSider";
import SignIn from "../pages/admin/SignIn";

import "./LayoutAdmin.scss";
import "antd/dist/antd.css";
import { Content, Footer, Header } from "antd/lib/layout/layout";

export const LayoutAdmin = (props) => {
  const { routes } = props;
  const [menuCollapsed, setMenuCollapsed] = useState(false);

  const user = null;
  if (!user) {
    return (
      <>
        <Route path="/admin/login" component={SignIn} />
        <Redirect to="/admin/login" />
      </>
    );
  }

  return (
    <Layout>
      <MenuSider
        menuCollapsed={menuCollapsed}
        setMenuCollapsed={setMenuCollapsed}
      />
      <Layout className="layout-admin">
        <Header className="layout-admin__header">
          <MenuTop
            menuCollapsed={menuCollapsed}
            setMenuCollapsed={setMenuCollapsed}
          />
        </Header>
        <Content className="layout-admin__content">
          <LoadRoutes routes={routes} />
        </Content>
        <Footer className="layout-admin__footer">Footer</Footer>
      </Layout>
    </Layout>
  );
};

function LoadRoutes({ routes }) {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={route.index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Switch>
  );
}

export default LayoutAdmin;
