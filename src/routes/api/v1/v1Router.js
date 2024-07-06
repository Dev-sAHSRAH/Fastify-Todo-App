const todoRouter = require("./todos/index");
async function v1Router(fastify, options) {
  fastify.register(todoRouter, { prefix: "/todos" });
}

module.exports = v1Router;
