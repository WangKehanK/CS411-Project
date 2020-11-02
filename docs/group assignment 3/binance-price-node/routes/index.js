
const key = require('../config');
const express = require('express');
const router = express.Router();
const Binance = require('node-binance-api');
const binance = new Binance().options({
  APIKEY: key.APIKEY,
  APISECRET: key.APISECRET
});

/* GET home page. */
router.get('/', function(req, res, next) {
  const target_ticker = req.query.ticker;
  console.log(target_ticker);
  if(typeof target_ticker == "undefined"){
    res.render('index', {ticker_price: " "});
  }
  binance.prices(target_ticker, (error, ticker) => {
    const price = ticker[Object.keys(ticker)[0]];
    console.info("Price of BTC: ", price);
    res.render('index', { ticker_price: price });
  });
});

module.exports = router;
