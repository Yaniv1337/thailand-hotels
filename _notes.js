const fs = require('fs');
const h = fs.readFileSync('index.html', 'utf8');
const notes = [...h.matchAll(/class="distanceNote"[^>]*>([\s\S]*?)<\/p>/g)].map(m => m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim());
console.log('notes', notes.length);
notes.forEach(n => console.log('-', n.slice(0, 180)));
const jobs = JSON.parse(fs.readFileSync('_distances.json', 'utf8'));
console.log('missing text', jobs.filter(j => !j.text).map(j => j.id + ' ' + j.label + ' inside=' + !!j.inside));
