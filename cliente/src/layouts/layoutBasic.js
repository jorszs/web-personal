// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { Row, Col } from "antd";
import MenuTop from "../components/Web/MenuTop";
import MenuMovile from "../components/Web/MenuMovile";
import Footer from "../components/Web/Footer";
import "./LayoutBasic.scss";
// eslint-disable-next-line no-unused-vars
import { hotjar } from "react-hotjar";

export default function LayputBasic(props) {
  const { routes } = props;

  // useEffect(() => {
  //   hotjar.initialize(2253218, 6);
  // }, []);

  return (
    <>
      <Row>
        <Col lg={4}></Col>
        <Col lg={16}>
          {window.screen.width > 700 ? <MenuTop /> : <MenuMovile />}
        </Col>
        <Col lg={4}></Col>
      </Row>
      <LoadRoutes routes={routes} />
      <Footer />
    </>
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
