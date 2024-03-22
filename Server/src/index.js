require("dotenv").config();
const { PORT_SERVER } = process.env;
const server = require("./app");
const { conn } = require("./db");

server.listen(PORT_SERVER, async () => {
  await conn.sync({ alter: true });
  console.log(`Servidor escuchando en el puerto ${PORT_SERVER}`);
});