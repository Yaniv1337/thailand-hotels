const fs = require('fs');
const path = require('path');
for (const name of fs.readdirSync('rooms').filter(f => f.endsWith('.html')).sort((a,b)=>parseInt(a)-parseInt(b))) {
  const h = fs.readFileSync(path.join('rooms', name), 'utf8');
  const h1 = (h.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i) || [])[1];
  const clean = (h1 || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  const body = (h.match(/field--name-field-pg-body[\s\S]{0,2500}/) || [''])[0].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
  const bed = body.match(/[^.]{0,40}(king|twin|double bed|bunk)[^.]{0,80}/i);
  console.log(name, '|', clean.slice(0, 80));
  if (bed) console.log('   BED:', bed[0].trim());
}
const home = fs.readFileSync('ckr-home.html','utf8');
const og = home.match(/property="og:image" content="([^"]+)"/);
console.log('CKR OG', og && og[1]);
const home2 = fs.readFileSync('cpbr-home.html','utf8');
const og2 = home2.match(/property="og:image" content="([^"]+)"/);
console.log('CPBR OG', og2 && og2[1]);
