const styles = require("./styles");
// users
const users = require("./../../utils/users");

const indexPage = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Home</title>
      <style>${styles}</style>
    </head>
    <body>
      <div class="container">
        <div class="greetings"><h1>Users</h1></div>
        <ul>
          ${users.map((user) => `<li>${user}</li>`)}
        </ul>
      </div>
    </body>
  </html>
`;

module.exports = indexPage;
