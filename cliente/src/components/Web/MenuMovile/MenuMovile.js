import React from "react";
import { getMenuApi } from "../../../api/menu";
import { bubble as Menu } from "react-burger-menu";
import { Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";

import "./MenuMovile.scss";

export default function MenuMovile() {
  // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
  return (
    <div className="menu-movile">
      <Menu isOpen={false}>
        <a id="home" className="menu-item" href="/">
          Home
        </a>
        <a id="about" className="menu-item" href="/about">
          About
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Contact
        </a>
      </Menu>
    </div>
  );
}
