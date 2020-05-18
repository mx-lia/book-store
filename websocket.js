const reviewService = require("./services/review-service");
const WebSocket = require("ws");
const wss = new WebSocket.Server({ port: 3030 });

wss.on("connection", function connection(ws) {
  ws.on("message", async function incoming(data) {
    const review = await reviewService.create(JSON.parse(data));
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(review));
      }
    });
  });
});
