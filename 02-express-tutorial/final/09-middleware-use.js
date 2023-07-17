const express = require('express');
const app = express();
const logger = require('./logger')
const authorize = require('./authorize');

// req => middleware => res
// the middleware stands between the req and res.

//using the middleware for every route, and the order matters
// if you put place the app.use above app.get
app.use([ logger, authorize ]);
// app.use('/api', logger)
// if you provide a path like '/api', the middleware will apply paths that has /api

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