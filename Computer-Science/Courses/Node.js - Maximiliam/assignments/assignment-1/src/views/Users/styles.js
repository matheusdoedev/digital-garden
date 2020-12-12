const styles = `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Roboto, Arial, Helvetica, sans-serif;
  background: #0e3841;
}

.container {
  max-width: 90%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  justify-self: center;
  margin: 0 auto;
}

.greetings h1 {
  color: #0fb979;
}

ul {
  margin-top: 32px;
}

ul li {
  color: #f4f6f7;
}
`;

module.exports = styles;
