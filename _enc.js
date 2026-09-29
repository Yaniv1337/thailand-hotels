function reviewsUrl(cidHex) {
  const cid = BigInt(cidHex);
  const bytes = [];
  let x = cid;
  while (x > 127n) {
    bytes.push(Number((x & 127n) | 128n));
    x >>= 7n;
  }
  bytes.push(Number(x));
  const inner = [0x08, ...bytes];
  const payload = [0x0a, inner.length, ...inner, 0x10, 0x01];
  const b64 = Buffer.from(payload).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  return 'https://www.google.com/travel/hotels/entity/' + b64 + '/reviews';
}
console.log(reviewsUrl('0x15141ae2122d4696'));
console.log('expect CgoIlo21kaHchooVEAE');
