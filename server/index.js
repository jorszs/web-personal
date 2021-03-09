const mongoose = require("mongoose");
const app = require("./app");

//Deploy port
const port = process.env.PORT || 80;
//dev port
//const port = process.env.PORT || 3977;

const { API_VERSION, IP_SERVER, PORT_DB } = require("./config");

mongoose.set("useFindAndModify", false); //solucion a error de peticiones a base de datos findandmodify
mongoose.connect(
  `mongodb://${IP_SERVER}:${PORT_DB}/jorgeDb`,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, res) => {
    if (err) {
      throw err;
    } else {
      console.log("la conexion a la base de datos es correcta");

      app.listen(port, () => {
        console.log("################");
        console.log("#####API REST###");
        console.log("################");
        console.log(`http://${IP_SERVER}:${port}/api/${API_VERSION}/`);
      });
    }
  }
);
