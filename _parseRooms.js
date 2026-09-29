const fs = require('fs');
const path = require('path');
const dir = 'rooms';
for (const name of fs.readdirSync(dir).sort((a,b)=>Number(a)-Number(b))) {
  const h = fs.readFileSync(path.join(dir, name), 'utf8');
  const title = (h.match(/<title>([^<]+)/) || [])[1] || '';
  const text = h.replace(/<script[\s\S]*?<\/script>/gi,' ').replace(/<style[\s\S]*?<\/style>/gi,' ').replace(/<[^>]+>/g,' ').replace(/\s+/g,' ');
  const size = (text.match(/Room Size:\s*([0-9.]+)\s*sqm/i) || [])[1];
  const adults = (text.match(/Max Adults:\s*(\d+)/i) || [])[1];
  const child = (text.match(/Max Child:\s*(\d+)/i) || [])[1];
  const bed = (text.match(/(king-size or twin|king or twin|two double|king bed|King or Twin|double beds|bunk)[^.]{0,80}/i) || [])[0];
  console.log(name, title.slice(0,70), '|', size||'?', 'ad', adults||'-', 'ch', child||'-', '|', (bed||'').slice(0,90));
}
