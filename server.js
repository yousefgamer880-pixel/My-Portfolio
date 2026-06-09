const http = require('http');
const fs = require('fs');
const path = require('path');
const dir = 'C:\\Users\\zas\\Documents\\Opencode';
const mime = {
    'html': 'text/html', 'css': 'text/css', 'js': 'application/javascript',
    'png': 'image/png', 'jpg': 'image/jpeg', 'ico': 'image/x-icon',
    'svg': 'image/svg+xml', 'pdf': 'application/pdf'
};
http.createServer((req, res) => {
    let f = path.join(dir, req.url === '/' ? 'index.html' : req.url);
    fs.readFile(f, (e, d) => {
        if (e) { res.writeHead(404); res.end('Not Found'); }
        else {
            let ext = path.extname(f).slice(1);
            res.writeHead(200, { 'Content-Type': mime[ext] || 'application/octet-stream' });
            res.end(d);
        }
    });
}).listen(3000, () => console.log('http://localhost:3000'));
