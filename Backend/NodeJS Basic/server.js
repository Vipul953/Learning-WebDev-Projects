import http from 'http'


// Server running at 8000
const server = http.createServer((req, res) => {
    res.write("Hello World")
    res.end()
})

server.listen(8000, () => {
  console.log(`Server running on port 8000`);
});


// Server running at 8080
const server2 = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.end("<h1>Hello World</h1>");
});

server2.listen(8080, () => {
    console.log(`Server running on port 8080`)
})