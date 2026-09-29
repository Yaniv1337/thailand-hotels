$urls = @(
  'https://www.ozohotels.com/phuket',
  'https://www.themarinphuket.com/',
  'https://www.amorahotels.com/amora-beach-resort-phuket',
  'https://www.andamanembrace.com/',
  'https://www.bangtaobeach.com/',
  'https://www.chanalai.com/en/flora-resort.html',
  'https://korabeachresort.com/',
  'https://www.bandaragroup.com/bandara-beach-phuket/',
  'https://www.bandaragroup.com/bandara-villas-phuket/',
  'https://www.pavilionshotels.com/destinations/phuket/the-pavilions-phuket/',
  'https://www.patongbeachhotel-online.com/',
  'https://grandmercurephuketpatong.com/',
  'https://www.chanalai.com/en/hillside-resort.html',
  'https://www.chanalai.com/en/romantica-resort.html',
  'https://www.chanalai.com/garden-resort.html'
)
$out = @()
foreach ($u in $urls) {
  $html = curl.exe -sL -A "Mozilla/5.0" --max-time 20 $u
  $line = ($html | Select-String -Pattern 'og:image' | Select-Object -First 1)
  $out += $u
  $out += $(if ($line) { $line.Line.Trim() } else { 'NONE' })
}
Set-Content -Path 'C:\Users\yaniv\Desktop\thailand-hotels-main\_og.txt' -Value ($out -join "`n") -Encoding utf8
