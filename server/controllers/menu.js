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

function updateMenu(req, res) {
  let menuData = req.body;
  const params = req.params;

  Menu.findByIdAndUpdate(params.id, menuData, (err, menuUpdate) => {
    if (err) {
      res.status(500).send({
        message: "Error del servidor.",
      });
    } else if (!menuUpdate) {
      res.status(404).send({ message: "No se ha encontrado el menu." });
    } else {
      res.status(200).send({ message: "Menu actualizado correctamente." });
    }
  });
}

function activateMenu(req, res) {
  const { id } = req.params;
  const { active } = req.body;

  Menu.findByIdAndUpdate(id, { active }, (err, menuStored) => {
    if (err) {
      res.status(500).send({ message: "Error del servidor." });
    } else {
      if (!menuStored) {
        res.status(404).send({ message: "No se ha encontrado el menu" });
      } else {
        if (active) {
          res.status(200).send({ message: "Menu activado correctamente." });
        } else {
          res.status(200).send({ message: "Menu desactivado correctamente." });
        }
      }
    }
  });
}

function deleteMenu(req, res) {
  const { id } = req.params;

  Menu.findOneAndRemove(id, (err, menuDeleted) => {
    if (err) {
      res.status(500).send({ message: "Error en el servidor" });
    } else if (!menuDeleted) {
      res.status(404).send({ message: "No se encontro el menu." });
    } else {
      res.status(200).send({ message: "El menu ha sido eliminado con exito." });
    }
  });
}

module.exports = {
  addMenu,
  getMenus,
  updateMenu,
  activateMenu,
  deleteMenu,
};
