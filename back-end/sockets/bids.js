const Leilao = require('../models/Leilao');

module.exports = (io) =>
  io.on("connection", (socket) => {
    socket.on("increaseBids", async ({ id }) => {
      console.log(`Cliente deu um lançe na linguagem de id ${id}`);
      await Leilao.increaseBids(id);
      const data = await Leilao.getById(id);
      io.emit("refreshBids", data);
    });
  });