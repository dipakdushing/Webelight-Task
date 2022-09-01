const express = require("express");
const app = express();
var cors = require('cors')
app.use(cors());
app.use(express.json());
const productController = require("./controllers/product_controller");
const userController = require("./controllers/user_controller");
const {login,register} = require("./controllers/auth_controller");
app.use("/products",productController );
app.use("/users",userController);
app.post("/register", register);
app.post("/login", login);
module.exports = app;