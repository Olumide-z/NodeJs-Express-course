const http = require('http');

const server = http.createServer((req, res) =>{
    console.log('user hit the server')
    // console.log(req.method)
    // console.log(req.url)
    const url = req.url;

    if(url === '/'){

        //home page
        res.writeHead(200, {'content-type' : 'text/html'});
        res.write('<h1>Home page</h2>');
        res.end();

    }else if(url === '/about'){

        // about page
        res.writeHead(200, {'content-type' : 'text/html'});
        res.write('<h1>About page</h2>');
        res.end();

    }else{

        //404
        res.writeHead(404, {'content-type' : 'text/html'});
        res.write('<h1>page not found</h2>');
        res.end();

    }
    
});

server.listen(5000)