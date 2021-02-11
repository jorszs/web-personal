import React from "react";
import LogoWhite from "../../../../assets/img/png/jorx.png";
import SocialLink from "../../SocialLinks";

import "./MyInfo.scss";

export default function MyInfo() {
  return (
    <div className="my-info">
      <img src={LogoWhite} alt="Logo" />
      <h4>
        Disfruta de la programacion creando lo que quieras, deja que tu
        imaginacion vuele y has cosas maravillosas
      </h4>
      <SocialLink />
    </div>
  );
}
