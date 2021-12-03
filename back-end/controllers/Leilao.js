const { Router } = require("express");
const Leilao = require('../models/Leilao');

const router = Router();

router.get('/', async (req, res) => {
  const products = await Leilao.getAll();
  res.status(200).json(products);
});

module.exports = router;