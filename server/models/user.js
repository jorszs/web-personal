//en modelo declaramos las propiedades de algo
const user = {
  name: String,
  lastname: String,
  email: {
    type: String,
    unique: true
  },
  password: String,
  active: Boolean
};
