const fastify = require("fastify")();
const api = require("./api");

fastify.register(api);

const start = async () => {
  try {
    await fastify.listen(process.env.PORT || 3000);
    console.log(`Server listening on ${fastify.server.address().port}`);
  } catch (err) {
    console.err(err);
    process.exit(1);
  }
};

start();
