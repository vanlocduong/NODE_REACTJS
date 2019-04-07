var express = require('express');
var router = express.Router();

const { Pool, Client } = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'sanpham_info',
  password: 'Paul@123',
  port: 5432,
})



/* GET home page. */
router.get('/', function(req, res, next) {


  // Pass to next layer of middleware
  next();

});



router.get('/getData', function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  pool.query('SELECT * FROM product_info', (error, response) => {
    if (error){
      console.log(error)
    } else {
      res.send(response.rows)
    }
    pool.end()
  })
});

module.exports = router;
