const logger = (req, res, next) => {
    // when you have a middleware, where you have a logic, unless you are sendng the response your self, else you have to pass it to the next middleware
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear();
    console.log(method, url, time)
    next()
}

module.exports = logger ;