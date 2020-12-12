const styles = require("./styles");

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
        <div class="greetings"><h1>Hello There!</h1></div>
        <form class="register-user" action="/create-user" method="POST">
          <label for="username">Username</label>
          <input type="text" name="username" id="username" />

          <button type="submit">Submit</button>
        </form>
      </div>
    </body>
  </html>
`;

module.exports = indexPage;
