const https = require('https');
const urls = process.argv.slice(2);
function get(url) {
  return new Promise((resolve) => {
    const req = https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return resolve(get(new URL(res.headers.location, url).href));
      }
      let d = '';
      res.on('data', (c) => { d += c; if (d.length > 250000) res.destroy(); });
      res.on('end', () => resolve(d));
    });
    req.on('error', (e) => resolve('ERR ' + e.message));
    req.setTimeout(12000, () => { req.destroy(); resolve('TIMEOUT'); });
  });
}
require('fs').writeFileSync('C:/Users/yaniv/Desktop/thailand-hotels-main/_og.txt', 'start ' + urls.join('|') + '\n');
(async () => {
  const lines = ['urls ' + urls.length];
  for (const url of urls) {
    const html = await get(url);
    const img = (String(html).match(/property="og:image" content="([^"]+)"/) || String(html).match(/content="([^"]+)" property="og:image"/) || [])[1] || '';
    lines.push(url);
    lines.push(img || String(html).slice(0, 120));
  }
  require('fs').writeFileSync('_og.txt', lines.join('\n'));
})();
