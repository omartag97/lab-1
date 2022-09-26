const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log("request made ");
  res.setHeader('Content-Type', 'text/html');
  let path = './pages/'
  switch (req.url) {
    case '/': path += 'index.html'; res.statusCode = 200; break;
    case '/page2': path += 'page2.html'; res.statusCode = 200; break;
    case '/page3': path += 'page3.html'; res.statusCode = 200; break;
    case '/validationForm': path += 'validationForm.html'; res.statusCode = 200; break;
    default: path += '404.html'; res.statusCode = 404; break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {

      res.end();
    }
    else {
      res.end(data);
    }
  })
});

server.listen(8080, 'localhost', () => {
  console.log('listening for requests on port 8080');
});