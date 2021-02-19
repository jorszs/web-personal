import React from "react";
import AcademyLogo from "../../../../assets/img/png/academy-logo.png";

import "./PresentationCourses.scss";

export default function PresentationCourses() {
  return (
    <div className="presentation-courses">
      <img src={AcademyLogo} alt="curso de augustin" />
      <p>
        En esta academia vas a encontrar los mejores cursos online de desarrollo
        web en español. Unete a nosotros y empieza tu camino como desarrollador
        web. Este tipo de cursos es lo que yo hubiera querido encontrar cuando
        empece en el mundo del desarrollo web profesional.
      </p>
      <p>¡¡¡Échale un vistazo y aprovecha las ofertas!!!</p>
    </div>
  );
}
