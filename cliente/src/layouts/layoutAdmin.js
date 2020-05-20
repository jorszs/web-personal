import React, { useState } from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import { Layout } from "antd";
import useAuth from "../hooks/useAuth";
import MenuTop from "../components/admin/menuTop";
import MenuSider from "../components/admin/MenuSider";
import AdminSignIn from "../pages/Admin/SignIn";
import { getAccessTokenApi, getRefreshTokenApi } from "../api/auth";

import "./LayoutAdmin.scss";


export default function LayoutAdmin(props) {
    const { routes } = props;
    const [menuCollapsed, setMenuCollapsed] = useState(false)
    const { Header, Content, Footer } = Layout;
    // eslint-disable-next-line no-unused-vars
    const { user, isLoading } = useAuth();

    //console.log(useAuth());

    // eslint-disable-next-line no-unused-vars
    const accessToken = getAccessTokenApi()
    //console.log("accessToken: " + accessToken);

    // eslint-disable-next-line no-unused-vars
    const refreshToken = getRefreshTokenApi()
    //console.log("refreshToken: " + refreshToken);

    //console.log(user);

    //si el usuario no esta logeadocy ya termino de cargar nos llevara a admin/login
    if (!user && !isLoading) {
        //console.log("signIn");
        return (
            <>
                <Route path="/admin/login" component={AdminSignIn} />
                <Redirect to="/admin/login" />
            </>
        )
    }

    //console.log(props);

    if (user && !isLoading) {
        return (
            <Layout>
                <MenuSider menuCollapsed={menuCollapsed} />
                <Layout className="layout-admin" style={{ marginLeft: menuCollapsed ? "80px" : "200px" }}>
                    <Header className="layout-admin__header">
                        <MenuTop menuCollapsed={menuCollapsed} setMenuCollapsed={setMenuCollapsed} />
                    </Header>
                    <Content className="layout-admin__content">
                        <LoadRoutes routes={routes} />
                    </Content>
                    <Footer className="layout-admin__footer">Jorge Luis Sanchez Ocampo</Footer>
                </Layout>
            </Layout>
        );
    }

    return null
}

function LoadRoutes({ routes }) {//saca routes de los props
    //const {routes} = props;
    return (
        <Switch>
            {routes.map((route, index) => (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                />
            ))}
        </Switch>
    );
}