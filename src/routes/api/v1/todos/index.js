const todoController = require("../../../../controllers/todoController");

async function todoRouter(fastify, options) {
  fastify.get("/", todoController.getAllTodos);
  fastify.post("/", todoController.createTodo);
  fastify.get("/:id", todoController.getOneTodo);
}

module.exports = todoRouter;
