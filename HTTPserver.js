const http = require('http');
 const server = http.createServer((req, res) => {
     res.writeHead(200, {
    'Content-Type': 'text/plain',
    'X-Powered-By': 'Node.js HTTP Module'
});
res.end('Hello World');
console.log('Status Code:', res.statusCode);
console.log('Request Headers:', req.headers);
});
const PORT = 3000;
server.listen(PORT, () => {
console.log(`Server running at http://localhost:${PORT}/`); });