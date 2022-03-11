import React from "react";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/lib/layout/layout";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";

export const LayoutBasic = (props) => {
  const { routes } = props;
  return (
    <Layout>
      <Layout>
        <Header></Header>
        <Content>
          <LoadRoutes routes={routes} />
        </Content>
        <Footer>Footer</Footer>
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
export default LayoutBasic;
