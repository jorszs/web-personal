import React from "react";
import { Route, Switch } from "react-router-dom";
import { Layout, Row, Col } from "antd";
import MenuTop from "../components/Web/MenuTop";
import MenuMovile from "../components/Web/MenuMovile";

import "./LayoutBasic.scss";

export default function LayputBasic(props) {
  const { routes } = props;
  const { Footer } = Layout;

  return (
    <Row>
      <Col lg={4}></Col>
      <Col lg={16}>
        {window.screen.width > 700 ? <MenuTop /> : <MenuMovile />}

        <LoadRoutes routes={routes} />
        <Footer>Jorge Luis Sanchez Ocampo</Footer>
      </Col>
      <Col lg={4}></Col>
    </Row>
  );
}

function LoadRoutes({ routes }) {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Switch>
  );
}
