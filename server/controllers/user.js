const bcrypt = require("bcrypt-nodejs");
const User = require("../models/user");

function signUp(req, res) {
    const user = new User();
    //console.log('endpoint de signup');
    //console.log(req.body);
    const { name, lastname, email, password, repeatPassword } = req.body;
    user.name = name;
    user.lastname = lastname;
    user.email = email;
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

module.exports = {
    signUp
};