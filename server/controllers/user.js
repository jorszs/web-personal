const bcrypt = require("bcrypt-nodejs");
const jwt = require("../services/jwt");
const User = require("../models/user");

function signUp(req, res) {
    const user = new User();
    //console.log('endpoint de signup');
    //console.log(req.body);
    const { name, lastname, email, password, repeatPassword } = req.body;
    user.name = name;
    user.lastname = lastname;
    user.email = email.toLowerCase();
    user.role = "admin";
    user.active = false;

    if (!password || !repeatPassword) {
        res.status(404).send({ message: "las contraseñas son obligatorias" });
    } else {
        if (password != repeatPassword) {
            res.status(404).send({ message: "las contraseñas tienen que ser iguales" });
        } else {
            bcrypt.hash(password, null, null, function (err, hash) {
                if (err) {
                    res.status(500).send({ message: "error al encriptar la contraseña" });
                } else {
                    user.password = hash;

                    user.save((err, userStored) => {
                        if (err) {
                            res.status(500).send({ message: "el usuario ya existe." });
                        } else {
                            if (!userStored) {
                                res.status(404).send({ message: "error al crear el usuario" });
                            } else {
                                res.status(200).send({ user: userStored });
                            }
                        }
                    })
                    //res.status(200).send({ menssge: hash });
                }

            })
        }
    }
}

function signIn(req, res) {
    //console.log("Login correcto.......");
    const params = req.body;
    console.log(params);
    const email = params.email.toLowerCase();
    const password = params.password;

    User.findOne({ email }, (err, userStored) => {
        if (err) {
            res.status(500).send({ message: "error del servidor." })
        } else {
            if (!userStored) {
                res.status(404).send({ message: "Usuario no encontrado." })
            } else {
                bcrypt.compare(password, userStored.password, (err, check) => {
                    if (err) {
                        res.status(500).send({ message: "error del servidor" })
                    } else if (!check) {
                        res.status(404).send({ message: "la contraseña es incorrecta" })
                    } else {
                        if (!userStored.active) {
                            res.status(200).send({ code: 200, message: "el usuario no se ha activado" })
                        } else {
                            res.status(200).send({
                                accessToken: jwt.createAccessToken(userStored),
                                refreshToken: jwt.createRefreshToken(userStored)
                            })
                        }
                    }
                })
            }
        }
    })
}

module.exports = {
    signUp,
    signIn
};