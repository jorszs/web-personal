import React from "react";
import { Row, Col, Card, Button } from "antd";
import { Link } from "react-router-dom";
import reactJsHooks from "../../../assets/img/jpg/react-js-hooks.jpg";
import reactNative from "../../../assets/img/jpg/react-native.jpg";
import javaScript from "../../../assets/img/jpg/javascript-es6.jpg";
import wordPress from "../../../assets/img/jpg/wordpress.jpg";
import prestaShop from "../../../assets/img/jpg/prestashop-1-7.jpg";
import cssGrid from "../../../assets/img/jpg/css-grid.jpg";

import "./HomeCourses.scss";

export default function HomeCourses() {
  return (
    <Row className="home-courses">
      <Col lg={24} className="home-courses__title">
        <h2>aprende y mejora tus habilidades</h2>
      </Col>
      <Col lg={4} />
      <Col lg={16}>
        <Row className="row-courses">
          <Col md={6}>
            <CardCourse
              image={reactJsHooks}
              title="React Js Hooks"
              subtitle="Intermedio - React/Javascript"
              link="https://www.udemy.com/course/react-js-inicia-en-el-mundo-de-los-frameworks-de-javascript/"
            />
          </Col>
          <Col md={6}>
            <CardCourse
              image={reactNative}
              title="React Native Expo"
              subtitle="Intermedio - React/Javascript"
              link="https://www.udemy.com/course/react-js-inicia-en-el-mundo-de-los-frameworks-de-javascript/"
            />
          </Col>
          <Col md={6}>
            <CardCourse
              image={javaScript}
              title="JavaScript ES6"
              subtitle="Basico - Javascript"
              link="https://www.udemy.com/course/react-js-inicia-en-el-mundo-de-los-frameworks-de-javascript/"
            />
          </Col>
          <Col md={6}>
            <CardCourse
              image={wordPress}
              title="Wordpress"
              subtitle="Basico - worpress"
              link="https://www.udemy.com/course/react-js-inicia-en-el-mundo-de-los-frameworks-de-javascript/"
            />
          </Col>
        </Row>
        <Row className="row-courses">
          <Col md={6}>
            <CardCourse
              image={prestaShop}
              title="PrestaShop"
              subtitle="Basico - PrestaShop"
              link="https://www.udemy.com/course/react-js-inicia-en-el-mundo-de-los-frameworks-de-javascript/"
            />
          </Col>
          <Col md={6} />
          <Col md={6} />
          <Col md={6}>
            <CardCourse
              image={cssGrid}
              title="CssGrid"
              subtitle="Intermedio - CSS"
              link="https://www.udemy.com/course/react-js-inicia-en-el-mundo-de-los-frameworks-de-javascript/"
            />
          </Col>
        </Row>
      </Col>
      <Col lg={4} />
      <Col lg={24} className="home-courses__more">
        <Link to="/courses">
          <Button>Ver mas</Button>
        </Link>
      </Col>
    </Row>
  );
}

function CardCourse(props) {
  const { image, title, subtitle, link } = props;
  const { Meta } = Card;

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Card
        className="home-courses__card"
        cover={<img src={image} alt={title} />}
        actions={[<Button>Ingresar</Button>]}
      >
        <Meta title={title} description={subtitle} />
      </Card>
    </a>
  );
}
