const express = require('express');
const dotenv = require('dotenv').config();
var bodyParser = require('body-parser')

var cors = require('cors')

const {testDbConnection} = require('./servises/connection/database')
const app = express();

const registration = require('./servises/routes/registration');
const carousel = require('./servises/routes/carousel');
const products = require('./servises/routes/products');
const categories = require('./servises/routes/categories');
const subCategories = require('./servises/routes/subCategories');
const item = require('./servises/routes/item')
const addtocart = require('./servises/routes/addtocart')
const brand = require('./servises/routes/brand')
const payment = require('./servises/routes/payment')
const address = require('./servises/routes/address')
const specification = require('./servises/routes/specification')


testDbConnection();

let PORT = process.env.PORT || 8000;

// Parse JSON-encoded bodies
 app.use(bodyParser.json());
// Parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.use('/uploads',express.static("uploads"));

// Routes
app.use('/', registration); 
app.use('/', carousel);
app.use('/', products);
app.use('/', categories);
app.use('/', subCategories);
app.use('/', item);
app.use('/', addtocart);
app.use('/', brand);
app.use('/', payment);
app.use('/', address);
app.use('/', specification)


app.get('/hello', (req, res)=>{
  res.send({'message': 'hello user i am here'})
})

// app listen
app.listen(PORT, ()=> {
  console.log(`Server started at https//localhost:${PORT}...`)
}) ;

