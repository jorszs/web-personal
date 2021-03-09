import React from "react";
import { Row, Col } from "antd";
import {
  BookOutlined,
  CodeOutlined,
  DatabaseOutlined,
  RightOutlined,
  HddOutlined,
  AppstoreOutlined,
  UserOutlined,
} from "@ant-design/icons";

import "./NavigationFooter.scss";

export default function NavigationFooter() {
  return (
    <Row className="navigation-footer" justify="space-between">
      <Col xs={24} sm={24} md={24} lg={24}>
        <h3>Navegacion</h3>
      </Col>
      <Col xs={11} sm={12} md={12} lg={12}>
        <RenderListLeft />
      </Col>
      <Col xs={11} sm={12} md={12} lg={12}>
        <RenderListRight />
      </Col>
    </Row>
  );
}

function RenderListLeft() {
  return (
    <ul>
      <li>
        <a href="#">
          <BookOutlined />
          Cursos Online
        </a>
      </li>
      <li>
        <a href="#">
          <CodeOutlined />
          Desarrollo web
        </a>
      </li>
      <li>
        <a href="#">
          <DatabaseOutlined />
          Base de Datos
        </a>
      </li>
      <li>
        <a href="#">
          <RightOutlined />
          Politica de Privacidad
        </a>
      </li>
    </ul>
  );
}

function RenderListRight() {
  return (
    <ul>
      <li>
        <a href="#">
          <HddOutlined />
          Sistemas / Servidores
        </a>
      </li>
      <li>
        <a href="#">
          <AppstoreOutlined />
          CMS
        </a>
      </li>
      <li>
        <a href="#">
          <UserOutlined />
          Portafolio
        </a>
      </li>
      <li>
        <a href="#">
          <RightOutlined />
          Politica de Cookies
        </a>
      </li>
    </ul>
  );
}
