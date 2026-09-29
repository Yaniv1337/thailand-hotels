const fs = require('fs');
function imgs(file) {
  const h = fs.readFileSync(file, 'utf8');
  const all = [...h.matchAll(/https?:\/\/[^"'\s>]+\.(?:jpg|jpeg|webp)/gi)].map(m => m[0]);
  const uniq = [...new Set(all)].filter(u => /hero|exterior|pool|beach|resort|banner|og/i.test(u) || /2025|2024|2026/.test(u));
  console.log('\n', file, uniq.slice(0, 12).join('\n'));
}
imgs('ckr-home.html');
imgs('cpbr-home.html');
