const fs = require('fs');
const h = fs.readFileSync('_maps.html', 'utf8');
console.log('len', h.length);
const m = h.match(/0x[0-9a-f]+:0x[0-9a-f]+/);
console.log('cid', m && m[0]);
console.log(h.slice(0, 180).replace(/\s+/g, ' '));
