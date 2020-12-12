const http = require("http");

const routes = require("../routes");

const port = process.env.PORT || 3000;

const server = http.createServer(routes);

server.listen(port);
