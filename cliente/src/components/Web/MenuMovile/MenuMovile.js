import React, { useEffect, useState } from "react";
import { getMenuApi } from "../../../api/menu";
import { Link } from "react-router-dom";
import SocialLinks from "../SocialLinks";
import { bubble as Menu } from "react-burger-menu";
import Logo from "../../../assets/img/png/jorx.png";

import "./MenuMovile.scss";

export default function MenuMovile() {
  const [menuData, setMenuData] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  //obtenemos los menus activos de la base de datos
  useEffect(() => {
    getMenuApi().then((response) => {
      const arrayMenu = [];
      response.menu.forEach((item) => {
        item.active && arrayMenu.push(item);
      });
      setMenuData(arrayMenu);
    });
  }, []);

  //cerrar el menu lateral
  const closeMenu = () => {
    setMenuOpen(false);
  };

  //mantiene en sincronia a menuOpen con el abrir/cerrar del menu
  const handleStateChange = (state) => {
    setMenuOpen(state.isOpen);
  };

  // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
  return (
    <div className="menu-movile">
      <Menu
        isOpen={menuOpen}
        onStateChange={(state) => handleStateChange(state)}
      >
        <Link className="logo" to="/" onClick={() => closeMenu()}>
          <img src={Logo} alt="jorx"></img>
        </Link>
        {menuData.map((item) => {
          const isExternal = item.url.indexOf("http") > -1 ? true : false;
          if (isExternal) {
            return (
              <a
                onClick={() => closeMenu()}
                href={item.url}
                key={item._id}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.title}
              </a>
            );
          }
          return (
            <Link key={item._id} to={item.url} onClick={() => closeMenu()}>
              {item.title}
            </Link>
          );
        })}

        <SocialLinks className="links" />
      </Menu>
    </div>
  );
}
