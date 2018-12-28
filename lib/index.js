const fastifyPlugin = require("fastify-plugin");

const supportedLib = ["bcrypt"];

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
  let lib = options.lib;
  let libModule = null;

  if (typeof lib == "string") {
    if (supportedLib.includes(lib)) {
      libModule = require("./" + lib);
    }
  } else if (lib != null) {
    libModule = require("./bcrypt");
  } else if (typeof lib == "object") {
    if (typeof lib.hash == "function" && typeof lib.compare == "function") {
      libModule = lib;
    }
  }

  if (libModule == null) {
    throw new Error(
      `options.lib ${lib} not supported, only [${supportedLib.join(
        ", "
      )}] is supported`
    );
  }

  fastify.decorate("crypt", libModule);

  next();
}

/**
 * @typedef {import('fastify').FastifyInstance} FastifyInstance
 * @typedef {import('fastify').RegisterOptions} RegisterOptions
 *
 * @callback CallbackNext
 * @param {*} error
 */
