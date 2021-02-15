import React from "react";
import AvatarPersona from "../../../assets/img/jpg/avatar.jpg";
import { Row, Col, Card, Avatar, Carousel } from "antd";
import "./ReviewsCourses.scss";

let reviewsList = [
  {
    name: "Alonzo Campos",
    subtitle: "alumno de udemy",
    avatar: { AvatarPersona },
    review:
      "Excelente curso, muy facil de entender, si teneis dudas el profe las responde en los comentarios",
  },
  {
    name: "David Lopez",
    subtitle: "alumno de udemy",
    avatar: { AvatarPersona },
    review:
      "me ha parecido muy educativo, enseña muchas alternativas de hacer las cosas y de la manera mas sencilla",
  },
  {
    name: "Sebastian Sanchez",
    subtitle: "alumno de udemy",
    avatar: { AvatarPersona },
    review:
      "Excelente curso, muy facil de entender, me gusta la metodologia muy buen maestro, saludos",
  },
  {
    name: "Jessy Smith",
    subtitle: "alumno de udemy",
    avatar: { AvatarPersona },
    review:
      "Excelente curso, muy facil de entender, si teneis dudas el profe las responde en los comentarios",
  },
  {
    name: "Valeria leithon",
    subtitle: "alumno de udemy",
    avatar: { AvatarPersona },
    review:
      "me ha parecido muy educativo, enseña muchas alternativas de hacer las cosas y de la manera mas sencilla",
  },
  {
    name: "Stephen James",
    subtitle: "alumno de udemy",
    avatar: { AvatarPersona },
    review:
      "Excelente curso, muy facil de entender, me gusta la metodologia muy buen maestro, saludos",
  },
];

export default function ReviewsCourses() {
  const responsiveMobileWidth = 576;

  return (
    <>
      <Row className="reviews-courses">
        <Row>
          <Col lg={4} />
          <Col lg={16} className="reviews-courses__title">
            <h2>
              Forma parte de los +35 mil estudiantes que estan aprendiendo con
              mis cursos
            </h2>
          </Col>
          <Col lg={4} />
        </Row>
      </Row>
      <Row className="reviews-courses">
        <Col lg={4} />
        <Col lg={16}>
          {window.screen.width < responsiveMobileWidth ? (
            <CardResponsiveSmall reviews={reviewsList} />
          ) : (
            <CardResponsiveLarge reviews={reviewsList} />
          )}
        </Col>
        <Col lg={4} />
      </Row>
    </>
  );

  //---------CODIGO ENSEÑADO EN EL CURSO-------------
  // <Row className="reviews-courses">
  //   <Row>
  //     <Col lg={4} />
  //     <Col lg={16} className="reviews-courses__title">
  //       <h2>
  //         Forma parte de los +35 mil estudiantes que estan aprendiendo con mis
  //         cursos
  //       </h2>
  //     </Col>
  //     <Col lg={4} />
  //   </Row>
  //   <Row>
  //     <Col lg={4} />
  //     <Col lg={16}>
  //       <Row className="row-cards">
  //         <Col md={8}>
  //           <CardReview
  //             name="Alonzo Campos"
  //             subtitle="alumno de udemy"
  //             avatar={AvatarPersona}
  //             review="Excelente curso, muy facil de entender, si teneis dudas el profe las responde en los comentarios"
  //           />
  //         </Col>
  //         <Col md={8}>
  //           <CardReview
  //             name="David Lopez"
  //             subtitle="alumno de udemy"
  //             avatar={AvatarPersona}
  //             review="me ha parecido muy educativo, enseña muchas alternativas de hacer las cosas y de la manera mas sencilla"
  //           />
  //         </Col>
  //         <Col md={8}>
  //           <CardReview
  //             name="Sebastian Sanchez"
  //             subtitle="alumno de udemy"
  //             avatar={AvatarPersona}
  //             review="Excelente curso, muy facil de entender, me gusta la metodologia muy buen maestro, saludos"
  //           />
  //         </Col>
  //       </Row>
  //       <Row className="row-cards">
  //         <Col md={8}>
  //           <CardReview
  // name="Jessy Smith"
  // subtitle="alumno de udemy"
  // avatar={AvatarPersona}
  // review="Excelente curso, muy facil de entender, si teneis dudas el profe las responde en los comentarios"
  //           />
  //         </Col>
  //         <Col md={8}>
  //           <CardReview
  //             name="Valeria leithon"
  //             subtitle="alumno de udemy"
  //             avatar={AvatarPersona}
  //             review="me ha parecido muy educativo, enseña muchas alternativas de hacer las cosas y de la manera mas sencilla"
  //           />
  //         </Col>
  //         <Col md={8}>
  //           <CardReview
  //             name="Stephen James"
  //             subtitle="alumno de udemy"
  //             avatar={AvatarPersona}
  //             review="Excelente curso, muy facil de entender, me gusta la metodologia muy buen maestro, saludos"
  //           />
  //         </Col>
  //       </Row>
  //     </Col>
  //     <Col lg={4} />
  //   </Row>
  // </Row>
}

function CardResponsiveSmall(props) {
  const { reviews } = props;
  return (
    <Carousel autoplay>
      {reviews.map((e) => {
        return (
          <CardReview
            key={e.name}
            name={e.name}
            subtitle={e.subtitle}
            review={e.review}
            avatar={AvatarPersona}
          />
        );
      })}
    </Carousel>
  );
}

function CardResponsiveLarge(props) {
  const { reviews } = props;

  return (
    <Row className="row-cards">
      {reviews.map((e, index) => (
        <Col md={8} key={index}>
          <CardReview
            key={e.name}
            name={e.name}
            subtitle={e.subtitle}
            review={e.review}
            avatar={AvatarPersona}
          />
        </Col>
      ))}
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
