import React from "react";
import { Row, Col, Card } from "antd";
import {
  ClockCircleOutlined,
  KeyOutlined,
  MessageOutlined,
  UserOutlined,
  DollarOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

import "./HowMyCoursesWork.scss";

export default function HomeMyCoursesWork() {
  return (
    <Row className="how-my-courses-work">
      <Col lg={24} className="how-my-courses-work__title">
        <h2>¿ Como funcionan mis cursos ?</h2>
        <h3>
          Cada curso cuenta con contenido bajo la web de udemy, activa las 24
          horas del dia, 365 dias al año
        </h3>
      </Col>
      <Col lg={4} />
      <Col lg={16}>
        <Row className="row-cards">
          <Col md={8}>
            <CardInfo
              Icon={<ClockCircleOutlined />}
              title="Cursos y clases"
              description="clases dinamicas, duración maxima de 15 minutos por clase. Faciles de comprender y seguir."
            />
          </Col>
          <Col md={8}>
            <CardInfo
              Icon={<KeyOutlined />}
              title="Acceso 24/7"
              description="Accede a los cursos en cualquier momento, en cualquier lugar simportar lugar ni hora."
            />
          </Col>
          <Col md={8}>
            <CardInfo
              Icon={<MessageOutlined />}
              title="Aprendizaje colaborativo"
              description="Aprende de los demas dejando tus dudas a los profesores para ser resueltas durante cada curso."
            />
          </Col>
        </Row>
        <Row className="row-cards">
          <Col md={8}>
            <CardInfo
              Icon={<UserOutlined />}
              title="Mejore tu perfil"
              description="Aprende y mejora tu perfil para mantenerte actualizado."
            />
          </Col>
          <Col md={8}>
            <CardInfo
              Icon={<DollarOutlined />}
              title="Precios bajos"
              description="Adquiere el curso que quieras por 9.99 y ten acceso a el por tiempo ilimitado."
            />
          </Col>
          <Col md={8}>
            <CardInfo
              Icon={<CheckCircleOutlined />}
              title="Certificado de finalización"
              description="Al completar cada curso tu vas a obtener un certificado de finalizacion."
            />
          </Col>
        </Row>
      </Col>
      <Col lg={4} />
    </Row>
  );
}

function CardInfo(props) {
  const { title, description, Icon } = props;
  const { Meta } = Card;

  return (
    <Card className="how-my-courses-work__card">
      {Icon}
      <Meta title={title} description={description} />
    </Card>
  );
}
