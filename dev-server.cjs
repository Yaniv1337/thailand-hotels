const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = __dirname;
const port = Number(process.env.PORT || 3000);
const assets = ['index.html', 'תאילנד תמונת רקע.png', 'burasari-phuket.jpg', 'sleep-with-me-phuket.jpg', 'clover-patong.webp', 'banyan-tree-phuket.jpg', 'saii-laguna-phuket.webp', 'katathani-phuket.jpg', 'hyatt-regency-phuket.jpg', 'assets/airlines/airasia.svg', 'assets/airlines/bangkok.png', 'assets/airlines/lion.png', 'assets/airlines/nok.png', 'assets/airlines/vietjet.svg', 'assets/airlines/thai.svg'];
const version = () => assets.map(file => fs.statSync(path.join(root, file)).mtimeMs).join('-');
const reload = `<script>(()=>{let previous;setInterval(async()=>{try{const current=await(await fetch('/__dev_version',{cache:'no-store'})).text();if(previous&&previous!==current)location.reload();previous=current}catch{}},1000)})();</script>`;
http.createServer((req, res) => {
  let file;
  try { file = decodeURIComponent(new URL(req.url, 'http://localhost').pathname).slice(1) || 'index.html'; }
  catch { res.writeHead(400); return res.end('Bad request'); }
  if (file === '__dev_version') {
    res.writeHead(200, {'Content-Type':'text/plain', 'Cache-Control':'no-store'});
    return res.end(version());
  }
  if (!assets.includes(file)) { res.writeHead(404); return res.end('Not found'); }
  fs.readFile(path.join(root, file), (error, data) => {
    if (error) { res.writeHead(500); return res.end('Unable to read file'); }
    const type = file.endsWith('.html') ? 'text/html; charset=utf-8' : file.endsWith('.jpg') ? 'image/jpeg' : file.endsWith('.webp') ? 'image/webp' : file.endsWith('.svg') ? 'image/svg+xml' : 'image/png';
    res.writeHead(200, {'Content-Type':type, 'Cache-Control':'no-store'});
    res.end(file.endsWith('.html') ? data.toString().replace('</body>', reload + '</body>') : data);
  });
}).listen(port, '127.0.0.1', () => console.log(`Local site: http://127.0.0.1:${port} (automatic reload enabled)`));
