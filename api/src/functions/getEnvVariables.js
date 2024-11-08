const { app } = require("@azure/functions");

app.http("getEnvVariables", {
  methods: ["GET", "POST"],
  authLevel: "anonymous",
  handler: async (request, context) => {
    context.log(`Http function processed request for url "${request.url}"`);

    const name = request.query.get("name") || (await request.text()) || "world";
    const miVar1 = process.env.klk;
    return { body: `Hello, ${name}! ${miVar1}` };
  },
});
