import http from 'http';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('You just created a Node.js server!\n');
});

server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000/');
});