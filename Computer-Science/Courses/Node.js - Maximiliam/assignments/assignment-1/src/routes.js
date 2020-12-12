// views
const Index = require("./views/Index/index.js");
const Users = require("./views/Users/index.js");
// utils
const users = require("./utils/users");

// request handler
const handleRequest = (req, res) => {
  const url = req.url;
  const method = req.method;

  // index route
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(Index);
    res.statusCode = 200;
    return res.end();
  }

  // users route
  if (url === "/users") {
    res.setHeader("Content-Type", "text/html");
    res.write(Users);
    res.statusCode = 200;
    return res.end();
  }

  // create users functionality route
  if (url === "/create-user" && method === "POST") {
    const body = [];

    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const user = parsedBody.split("=")[1];
      users.push(user);
      console.log(users);
      res.statusCode = 302;
      res.setHeader("LOCATION", "/users");
      return res.end();
    });
  }
};

module.exports = handleRequest;
