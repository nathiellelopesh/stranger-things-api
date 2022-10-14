const express = require("express");
const routes = express.Router();

const UserController = require("../controller/userController");

// Rotas de Planets
routes.post("/users", UserController.store);
routes.get("/users", UserController.index);
routes.put("/users/:id", UserController.put);
routes.delete("/users/:id", UserController.delete);

module.exports = routes;
