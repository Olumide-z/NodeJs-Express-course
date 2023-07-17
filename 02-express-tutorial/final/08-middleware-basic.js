const express = require('express');
const app = express();

// req => middleware => res
// the middleware stands between the req and res.

const logger = (req, res, next) => {
    // when you have a middleware, where you have a logic, unless you are sendng the response your self, else you have to pass it to the next middleware
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear();
    console.log(method, url, time)
    next()
}

app.get('/', logger, (req, res) => {
  
    res.send('Home')
});

app.get('/about', (req, res) => {
    res.send('About')
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000')
})