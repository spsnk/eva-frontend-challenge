const c1Reports = [
  {
    datetime: "2019-12-26T01:19:51.813Z",
    result: "Asymmetric"
  },
  {
    datetime: "2019-11-27T07:44:43.411Z",
    result: "No asymmetric"
  }
];

const c2Reports = [
  {
    datetime: "2019-10-13T02:21:14.321Z",
    result: "No asymmetric"
  },
  {
    datetime: "2019-11-07T12:17:55.512Z",
    result: "No asymmetric"
  },
  {
    datetime: "2019-08-11T12:17:55.512Z",
    result: "No asymmetric"
  }
];

async function api(server) {
  server.route({
    method: "GET",
    url: "/login",
    schema: {
      querystring: {
        type: "object",
        properties: {
          username: { type: "string" },
          password: { type: "string" }
        },
        required: ["username", "password"]
      }
    },
    handler: (request, reply) => {
      const { username, password } = request.query;
      reply.header("Access-Control-Allow-Origin", "*");
      if (!username || !password) {
        return reply.code(400).send();
      }

      if (username === "c1@evatech.co" && password === "123") {
        return reply.code(200).send({
          data: {
            reports: c1Reports
          }
        });
      }

      if (username === "c2@evatech.co" && password === "456") {
        return reply.code(200).send({
          data: {
            reports: c2Reports
          }
        });
      }

      return reply.code(404).send();
    }
  });
}

module.exports = api;
