const fastifyPlugin = require("fastify-plugin");

module.exports = fastifyPlugin(plugin, {
  fastify: "1.x"
});

/**
 * Register the plugin
 * @param {FastifyInstance} fastify
 * @param {RegisterOptions} options
 * @param {CallbackNext} next
 */
function plugin(fastify, options, next) {
  // ...

  next();
}

/**
 * @typedef {import('fastify').FastifyInstance} FastifyInstance
 * @typedef {import('fastify').RegisterOptions} RegisterOptions
 *
 * @callback CallbackNext
 * @param {*} error
 */
