const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;


const loadAndStream = (filePath, mineType, res) => {
    const fileStream = fs.createReadStream(filePath, "UTF-8");
    res.writeHead(200, { "Content-Type": mineType });
    fileStream.pipe(res);
}


const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    if (req.url === "/about") {
        res.end('About page!');
    } else if (req.url === "/gallery") {
        const filePath = path.join(__dirname, 'gallery.html');
        loadAndStream(filePath, 'text/html', res)
    } else {
        const filePath = path.join(__dirname, 'home.html');
        loadAndStream(filePath, 'text/html', res)
    }
})



server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`)
})