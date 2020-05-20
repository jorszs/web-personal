import { basePath, apiVersion } from "./config";

//import { Result } from "antd";

export function signUpApi(data) {
    const url = `${basePath}/${apiVersion}/sign-up`;
    const params = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    };

    //console.log(data);

    return fetch(url, params)
        .then(response => {
            //console.log(response);
            return response.json();
        })
        .then(result => {
            //console.log(result);
            if (result.user) {
                //return result;
                return { ok: true, message: "Usuario creado correactamente" }
            }
            return { ok: false, message: result.message }
        })
        .catch(err => {
            return { ok: false, message: err.message }
        })
}

export function signInApi(data) {
    const url = `${basePath}/${apiVersion}/sign-in`;
    const params = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json"
        }
    }

    return fetch(url, params)
        .then(response => {
            //console.log(response);
            return response.json();
        })
        .then(response => {
            //console.log(response);
            return response;
        })
        .catch(err => {
            //console.log(err);
            return err.message;
        })
    //console.log(data);
    //console.log(url);

}

export function getUsersApi(token) {

    const url = `${basePath}/${apiVersion}/users`;

    const params = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: token
        }
    };

    return fetch(url, params)
        .then(response => {
            return response.json();
        })
        .then(result => {
            return result;
        })
        .catch(err => {
            return err.message;
        });
}

export function getUsersActiveApi(token, status) {

    const url = `${basePath}/${apiVersion}/users-active?active=${status}`;

    const params = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: token
        }
    };

    return fetch(url, params)
        .then(response => {
            return response.json();
        })
        .then(result => {
            return result;
        })
        .catch(err => {
            return err.message;
        });
}