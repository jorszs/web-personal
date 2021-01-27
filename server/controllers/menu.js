const Menu = require("../models/menu");

function addMenu(req, res) {
  const { title, url, order, active } = req.body;
  const menu = new Menu();

  menu.title = title;
  menu.url = url;
  menu.order = order;
  menu.active = active;

  menu.save((err, createdMenud) => {
    if (err) {
      res.status(500).send({ message: "Error del servidor." });
    } else {
      if (!createdMenud) {
        res.status(404).send({ message: "Error al crear el menu." });
      } else {
        res.status(200).send({ message: "Menu creado correctamente." });
      }
    }
  });
}

function getMenus(req, res) {
  Menu.find()
    .sort({ order: "asc" }) //ordenamos los menus por el parametro order de forma asc-endente
    .exec((err, menusStored) => {
      //utilizamos exec para ejecutar la query a mongo
      if (err) {
        res.status(500).send({ message: "Error del servidor." });
      } else {
        if (!menusStored) {
          res.status(404).send({ message: "No se encontraron menus." });
        } else {
          res.status(200).send({ menu: menusStored });
        }
      }
    });
}

module.exports = {
  addMenu,
  getMenus,
};
