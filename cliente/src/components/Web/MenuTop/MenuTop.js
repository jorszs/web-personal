import React, { useState, useEffect } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import SocialLinks from "../SocialLinks";
import { getMenuApi } from "../../../api/menu";
import Logo from "../../../assets/img/png/jorx.png";

import "./MenuTop.scss";

export default function MenuTop() {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    try {
      getMenuApi().then((response) => {
        const arrayMenu = [];
        if (response.menu) {
          response.menu.forEach((item) => {
            item.active && arrayMenu.push(item);
          });
          setMenuData(arrayMenu);
        }
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <Menu className="menu-top-web" mode="horizontal">
      <Menu.Item className="menu-top-web__logo">
        <Link to={"/"}>
          <img src={Logo} alt="jorx"></img>
        </Link>{" "}
      </Menu.Item>

      {menuData.map((item) => {
        const external = item.url.indexOf("http") > -1 ? true : false;
        if (external) {
          return (
            <Menu.Item key={item._id} className="menu-top-web__item">
              {/*con el blank, si abrimos una ruta externa cuando cerremos la pestama regresara a nuestra web */}
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                {item.title}
              </a>
            </Menu.Item>
          );
        }

        return (
          <Menu.Item key={item._id} className="menu-top-web__item">
            <Link to={item.url}>{item.title}</Link>
          </Menu.Item>
        );
      })}

      <SocialLinks />
    </Menu>
  );
}
