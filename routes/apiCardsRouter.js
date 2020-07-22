const apiCardsRouter = require("express").Router();
const cards = require("../data/cards.json");

apiCardsRouter.get("/cards", (req, res) => {
  res.send(cards);
});

module.exports = apiCardsRouter;
