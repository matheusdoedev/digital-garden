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

.register-user {
  margin-top: 48px;
}

.register-user input,
.register-user label {
  display: block;
}

.register-user label {
  margin-bottom: 16px;
  color: #f4f6f7;
}

.register-user input {
  margin-bottom: 24px;

  transition: 0.2s;
  border: none;
  padding: 8px;
  width: 20rem;
  background: #f4f6f7;
  border-radius: 0.25rem;
}

.register-user input:focus {
  filter: brightness(85%);
  transition: 0.2s;
}

.register-user button {
  border: none;
  padding: 8px 24px;
  background: #0fb979;
  color: #f4f6f7;
  cursor: pointer;
  transition: 0.2s;

  font-weight: 500;
  letter-spacing: 0.2rem;
  border-radius: 0.25rem;
}

.register-user button:hover {
  filter: brightness(85%);
  transition: 0.2s;
}
`;

module.exports = styles;
