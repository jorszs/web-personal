import React, { useState } from "react";
import { Switch, List, Avatar, Button } from "antd";
import { EditOutlined, StopOutlined, DeleteOutlined, CheckOutlined } from "@ant-design/icons";
import NoAvatar from "../../../../assets/img/png/no-avatar.png";
import Modal from "../../../modal";
import EditUSerForm from "../EditUserFrom";

import "./ListUsers.scss"

export default function ListUsers(props) {
    const { usersActive, usersInactive } = props;
    const [viewUsersActives, setViewUsersActives] = useState(true);
    const [isVisibleModal, setIsVisibleModal] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalContent, setModalContent] = useState("");
    //console.log(usersActive);
    //console.log(usersInactive);


    return (
        <div className="list-users">
            <div className="list-users-switch">
                <Switch
                    defaultChecked
                    onChange={() => setViewUsersActives(!viewUsersActives)}
                />
                <span>
                    {viewUsersActives ? "Usuarios Activos" : "Usuarios Inactivos"}
                </span>
            </div>
            {viewUsersActives ?
                <UsersActive usersActive={usersActive} setIsVisibleModal={setIsVisibleModal} setModalContent={setModalContent} setModalTitle={setModalTitle} />
                :
                < UsersInactive usersInactive={usersInactive} />
            }

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


function UsersActive(props) {
    const { usersActive,
        setIsVisibleModal,
        setModalContent,
        setModalTitle
    } = props;
    //return <h3>Lista de usuarios Activos</h3>

    const editUser = user => {
        setIsVisibleModal(true);
        setModalTitle(
            `Editar ${user.name ? user.name : "..."} ${
            user.lastname ? user.lastname : "..."
            }`
        );
        setModalContent(<EditUSerForm user={user} />);
    }

    return (
        <List
            className="userz-active"
            itemLayout="horizontal"
            dataSource={usersActive}
            renderItem={user => (
                <List.Item
                    actions={[
                        <Button
                            type="primary"
                            onClick={() => editUser(user)}//{() => console.log("editar usuario")}
                        >
                            <EditOutlined />
                        </ Button>,
                        <Button
                            type="danger"
                            onClick={() => console.log("desactivar usuario")}
                        >
                            <StopOutlined />
                        </Button>,
                        <Button
                            type="danger"
                            onClick={() => console.log("eliminar usuario")
                            }
                        >
                            <DeleteOutlined />
                        </Button>
                    ]}
                >
                    <List.Item.Meta
                        avatar={<Avatar src={user.avatar ? user.avatar : NoAvatar} />}
                        title={`
                            ${user.name ? user.name : "..."}
                            ${user.lastname ? user.lastname : "..."}
                        `}
                        description={user.email}
                    />
                </List.Item>
            )}
        />
    )
}

function UsersInactive(props) {
    const { usersInactive } = props;
    //return <h3>Lista de usuarios Inactivos</h3>
    return (
        <List
            className="userz-active"
            itemLayout="horizontal"
            dataSource={usersInactive}
            renderItem={user => (
                <List.Item
                    actions={[
                        <Button
                            type="primary"
                            onClick={() => console.log("activar usuario")}
                        >
                            <CheckOutlined />
                        </ Button>,
                        <Button
                            type="danger"
                            onClick={() => console.log("eliminar usuario")
                            }
                        >
                            <DeleteOutlined />
                        </Button>
                    ]}
                >
                    <List.Item.Meta
                        avatar={<Avatar src={user.avatar ? user.avatar : NoAvatar} />}
                        title={`
                            ${user.name ? user.name : "..."}
                            ${user.lastname ? user.lastname : "..."}
                        `}
                        description={user.email}
                    />
                </List.Item>
            )}
        />
    )
}