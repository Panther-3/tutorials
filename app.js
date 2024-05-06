const http = require('http')

const server = http.createServer((req, res)=>{
    if (req.url === '/'){ 
        res.end('Welcome to our homePage')
    }
    if (req.url === '/about'){
        res.end('Here is our short History')
    }else{
        res.end(`
        <h1>OPPS!!</h1>
    <p>We cant seem to find the page youre looking for </p>
    <a href= "/">back home</a>
        `)
    }

})

server.listen(3000)