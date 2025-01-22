const http = require("http");
const app = require("./app");
const { initialiseSocket } = require("./socket");
const port = process.env.PORT || 3000;

const server = http.createServer(app);

initialiseSocket(server);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
