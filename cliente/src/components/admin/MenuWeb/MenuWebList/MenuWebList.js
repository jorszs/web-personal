import React, { useState, useEffect } from "react";
import { Switch, List, Button, Modal as ModalAntd, notification } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import Modal from "../../../modal";
import DragSortableList from "react-drag-sortable";
import {
  updateMenuApi,
  activateMenuApi,
  deleteMenuApi,
} from "../../../../api/menu";
import { getAccessTokenApi } from "../../../../api/auth";
import AddMenuWebForm from "../../../admin/MenuWeb/AddMenuWebForm";
import EditMenuWebForm from "../EditMenuWebForm";

import "./MenuWebList.scss";

const { confirm } = ModalAntd;

export default function MenuWebList(props) {
  const { menu, setReloadMenuWeb } = props;
  const [listItems, setListItems] = useState([]);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState(null);

  //cuando traigamos los menus de la BD armamos la lista para pasarsela a DragSortableList
  useEffect(() => {
    const listItemsArray = [];

    menu.forEach((item) => {
      listItemsArray.push({
        content: (
          <MenuItem
            item={item}
            activateMenu={activateMenu}
            editMenuWebModal={editMenuWebModal}
            deleteMenu={deleteMenu}
          />
        ),
      });
    });
    setListItems(listItemsArray);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menu]);

  //funcion para activar y desactivar los menus
  const activateMenu = (menu, status) => {
    const accesToken = getAccessTokenApi();
    activateMenuApi(accesToken, menu._id, status).then((response) => {
      notification["success"]({ message: response });
    });
  };

  //esta funcion se activa cuando arrastramos y cambiamos de posicion un menu
  const onSort = (sortedList, dropEvent) => {
    const accesToken = getAccessTokenApi();

    sortedList.forEach((item) => {
      const { _id } = item.content.props.item;
      const order = item.rank;

      updateMenuApi(accesToken, _id, { order });
    });
  };

  //crear nuevo menu Modal
  const addMenuWebodal = () => {
    setIsVisibleModal(true);
    setModalTitle("Creando nuevo menú");
    setModalContent(
      <AddMenuWebForm
        setIsVisibleModal={setIsVisibleModal}
        setReloadMenuWeb={setReloadMenuWeb}
      />
    );
  };

  //editar menu
  const editMenuWebModal = (menu) => {
    setIsVisibleModal(true);
    setModalTitle(`Editando menu ${menu.title}`);
    setModalContent(
      <EditMenuWebForm
        setIsVisibleModal={setIsVisibleModal}
        setReloadMenuWeb={setReloadMenuWeb}
        menu={menu}
      />
    );
  };

  //eliminar menu
  const deleteMenu = (menu) => {
    confirm({
      content: `¿ Estas seguro que quieres eliminar este menú: "${menu.title}" ?`,
      okText: "Eliminar",
      cancelText: "Cancelar",
      okType: "danger",
      onOk: () => {
        const accesToken = getAccessTokenApi();
        deleteMenuApi(accesToken, menu._id)
          .then((response) => {
            notification["success"]({ message: response });
            setReloadMenuWeb(true);
          })
          .catch((err) => {
            notification["error"]({
              message: "Error del servidor intentelo mas tarde",
            });
          });
      },
    });
  };

  return (
    <div className="menu-web-list">
      <div className="menu-web-list__header">
        <Button type="primary" onClick={addMenuWebodal}>
          Crear Menu
        </Button>
      </div>
      <div className="menu-web-list__items">
        <DragSortableList
          items={listItems}
          onSort={onSort}
          dropBackTransitionDuration={0.3}
          type="vertical"
        />
      </div>

      <Modal
        title={modalTitle}
        isVisible={isVisibleModal}
        setIsVisible={setIsVisibleModal}
      >
        {modalContent}
      </Modal>
    </div>
  );
}

function MenuItem(props) {
  const { item, activateMenu, editMenuWebModal, deleteMenu } = props;

  return (
    <List.Item
      actions={[
        <Switch
          defaultChecked={item.active}
          onChange={(e) => activateMenu(item, e)}
        />,
        <Button type="primary" onClick={() => editMenuWebModal(item)}>
          <EditOutlined />
        </Button>,
        <Button type="danger" onClick={() => deleteMenu(item)}>
          <DeleteOutlined />
        </Button>,
      ]}
    >
      <List.Item.Meta
        title={item.title}
        description={item.url}
      ></List.Item.Meta>
    </List.Item>
  );
}
