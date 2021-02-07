import React from "react";
import AvatarPersona from "../../../assets/img/jpg/avatar.jpg";
import { Row, Col, Card, Avatar } from "antd";
import "./ReviewsCourses.scss";

export default function ReviewsCourses() {
  return (
    <Row className="reviews-courses">
      <Row>
        <Col lg={4} />
        <Col lg={16} className="reviews-courses__title">
          <h2>
            Forma parte de los +35 mil estudiantes que estan aprendiendo con mis
            cursos
          </h2>
        </Col>
        <Col lg={4} />
      </Row>
      <Row>
        <Col lg={4} />
        <Col lg={16}>
          <Row className="row-cards">
            <Col md={8}>
              <CardReview
                name="Alonzo Campos"
                subtitle="alumno de udemy"
                avatar={AvatarPersona}
                review="Excelente curso, muy facil de entender, si teneis dudas el profe las responde en los comentarios"
              />
            </Col>
            <Col md={8}>
              <CardReview
                name="David Lopez"
                subtitle="alumno de udemy"
                avatar={AvatarPersona}
                review="me ha parecido muy educativo, enseña muchas alternativas de hacer las cosas y de la manera mas sencilla"
              />
            </Col>
            <Col md={8}>
              <CardReview
                name="Sebastian Sanchez"
                subtitle="alumno de udemy"
                avatar={AvatarPersona}
                review="Excelente curso, muy facil de entender, me gusta la metodologia muy buen maestro, saludos"
              />
            </Col>
          </Row>
          <Row className="row-cards">
            <Col md={8}>
              <CardReview
                name="Jessy Smith"
                subtitle="alumno de udemy"
                avatar={AvatarPersona}
                review="Excelente curso, muy facil de entender, si teneis dudas el profe las responde en los comentarios"
              />
            </Col>
            <Col md={8}>
              <CardReview
                name="Valeria leithon"
                subtitle="alumno de udemy"
                avatar={AvatarPersona}
                review="me ha parecido muy educativo, enseña muchas alternativas de hacer las cosas y de la manera mas sencilla"
              />
            </Col>
            <Col md={8}>
              <CardReview
                name="Stephen James"
                subtitle="alumno de udemy"
                avatar={AvatarPersona}
                review="Excelente curso, muy facil de entender, me gusta la metodologia muy buen maestro, saludos"
              />
            </Col>
          </Row>
        </Col>
        <Col lg={4} />
      </Row>
    </Row>
  );
}

function CardReview(props) {
  const { name, subtitle, avatar, review } = props;
  const { Meta } = Card;

  return (
    <Card className="reviews-courses__card">
      <p>{review}</p>
      <Meta
        avatar={<Avatar src={avatar} />}
        title={name}
        description={subtitle}
      ></Meta>
    </Card>
  );
}
