"use strict";
/*---------------------------------------------------*/
/*               todoAPP -- ROUTER                   */
/*-------------------------------------------------- */
const express = require("express");
const { todo } = require("../controllers/todo.controller");
const idValidation = require("../middlewares/idValidation");
const todoRouter = express.Router();

todoRouter.route("/").get(todo.list).post(todo.create);

todoRouter
  .route("/:id")
  .all(idValidation)
  .get(todo.read)
  .put(todo.update)
  .patch(todo.update)
  .delete(todo.delete);

module.exports = {todoRouter};
