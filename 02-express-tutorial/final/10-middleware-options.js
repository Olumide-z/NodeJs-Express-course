const express = require('express');
const app = express();
const logger = require('./logger')
const authorize = require('./authorize');
const morgan = require('morgan');

// req => middleware => res
// the middleware stands between the req and res.

//using the middleware for every route, and the order matters
// if you put place the app.use above app.get
 app.use([ logger, authorize ]);

// middlware options
    // Our own, express and third party
    // // app.use(express.static('./public')), express.static is an express middleware

app.use(morgan('tiny'));

app.get('/', (req, res) => {
    res.send('Home')
});

app.get('/about', (req, res) => {
    res.send('About')
})

app.get('/api/products', (req, res) => {
    res.send('Products')
})

app.get('/api/items', (req, res) => {
    console.log(req.user)
    res.send('Items')
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000')
})