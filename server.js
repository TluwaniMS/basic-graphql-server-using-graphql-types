const { app } = require("./index");
const PORT = 5000;

app.listen(PORT, () => {
  `server is running on port: ${PORT}`;
});
