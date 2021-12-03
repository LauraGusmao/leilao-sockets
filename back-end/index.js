require('dotenv').config();
const express = require('express')
const app = express();
const http = require('http').createServer(app);
const cors = require("cors");

const LeilaoController = require('./controllers/Leilao')

const io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["POST", "GET"],
  },
});

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({ ok: true });
});

app.use('/leilao', LeilaoController);

require("./sockets/bids")(io);

http.listen(PORT, () => console.log('Servidor ouvindo na porta 3001'));