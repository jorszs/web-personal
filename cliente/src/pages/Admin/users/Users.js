import React, { useState, useEffect } from "react";
import { getAccessTokenApi } from "../../../api/auth";
import { getUsersActiveApi } from "../../../api/user";
import ListUsers from "../../../components/admin/Users/ListUsers";

import "./Users.scss";

export default function User() {
    const [usersActive, setUsersActive] = useState([]);
    const [usersInactive, setUsersInactive] = useState([]);
    const token = getAccessTokenApi();

    //console.log("usersActive: ", usersActive);
    //console.log("usersInactive: ", usersInactive);

    useEffect(() => {
        getUsersActiveApi(token, false).then(response => {
            //console.log(response);
            setUsersInactive(response.users);
        })
        getUsersActiveApi(token, true).then(response => {
            //console.log("esto es response:", response);
            setUsersActive(response.users);

        })
    }, [token]);

    return (
        <div className="users">
            <ListUsers usersActive={usersActive} usersInactive={usersInactive} />
        </div>
    );
}