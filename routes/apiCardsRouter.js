const apiCardsRouter = require('express').Router();
const fs = require('fs');
const path = require('path');

apiCardsRouter.get('/cards', (req, res) => {
  const cardsPath = path.join(__dirname, '..', 'data', 'cards.json');
  const cardsReadFilePromises = fs.promises.readFile(cardsPath, {
    encoding: 'utf8',
  });
  cardsReadFilePromises
    .then((data) => {
      res.writeHead(200, {
        'Content-Type': 'application/json',
      });
      res.end(data);
    })
    .catch(() => {
      res.status(404).send({ message: 'Internal Server Error' });
    });

  // const cardsStream = await fs.createReadStream(cardsPath, { encoding: 'utf8' });
  //
  // cardsStream.on('open', () => {
  //   res.writeHead(200, {
  //     'Content-Type': 'application/json',
  //   });
  // });
  //
  // cardsStream.on('error', () => {
  //   res.statusCode = 500;
  //   res.statusMessage = 'Internal Server Error';
  //   res.send('500 Internal Server Error');
  // });
  //
  // cardsStream.pipe(res);
});

module.exports = apiCardsRouter;
