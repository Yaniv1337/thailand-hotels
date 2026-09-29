const fs = require('fs');
function rooms(file) {
  const h = fs.readFileSync(file, 'utf8');
  const re = /data-term-name="([^"]+)"[\s\S]{0,1800}?href="([^"]+)"[\s\S]{0,900}?desc-favourites">\s*([^<]{0,240})/g;
  const seen = new Set();
  let m;
  console.log('\n====', file);
  while ((m = re.exec(h))) {
    const key = m[1];
    if (seen.has(key)) continue;
    seen.add(key);
    console.log('-', m[1], '|', m[2], '|', m[3].replace(/\s+/g, ' ').trim());
  }
}
rooms('ckr-home.html');
rooms('cpbr-home.html');
