// build in in node
const http = require('http');
const { readFileSync } = require('fs');

//get all files
const homePage = readFileSync('./navbar-app/index.html')
const homeStyles = readFileSync('./navbar-app/styles.css')
const homeImages = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')
const server = http.createServer((req, res) => {
  console.log(req.method, req.url);
  const url = req.url;

  // home page
  if (url === '/') {
    res.writeHead(200, {'content-type': 'text/html'})
    res.write(homePage)
    res.end()
    
  } else if (url === '/about') {
    // about page
    res.writeHead(200, {'content-type': 'text/html'})
    res.write(`<h1 style="font-size: 50px;background:gray; margin-top: 100px;color: white;padding:30px;font-weight:bold; text-align: center; text-transform: capitalize">about page</h1>`)
    res.end()

  }  else if (url === '/styles.css') {
    //contact page
    res.writeHead(200, {'content-type': 'text/css'})
    res.write(homeStyles)
    res.end()
    
  }  else if (url === '/logo.svg') {
    //contact page
    res.writeHead(200, {'content-type': 'image/svg+xml'})
    res.write(homeImages)
    res.end()
    
  } else if (url === '/browser-app.js') {
    //contact page
    res.writeHead(200, {'content-type': 'text/javascript'})
    res.write(homeLogic)
    res.end()
    
  } else {
    // not found 404
    res.writeHead(404, {'content-type': 'text/html'})
    res.write(`<h1 style="font-size: 50px;background:gray; margin-top: 100px;color: white;padding:30px;font-weight:bold; text-align: center; text-transform: capitalize">page not found</h1>`)
    res.end()
  }
})

const port = 5000;

server.listen(port, () => {
  console.log(`Listing to the port number: ${port}`)
})
