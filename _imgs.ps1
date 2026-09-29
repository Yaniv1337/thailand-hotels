$urls = @(
  'https://www.andamanembrace.com/',
  'https://www.chanalai.com/en/flora-resort.html',
  'https://www.chanalai.com/garden-resort.html',
  'https://www.chanalai.com/en/hillside-resort.html',
  'https://www.chanalai.com/en/romantica-resort.html',
  'https://www.bandaragroup.com/bandara-beach-phuket/',
  'https://grandmercurephuketpatong.com/',
  'https://www.amorahotels.com/amora-beach-resort-phuket'
)
$out = @()
foreach ($u in $urls) {
  $html = curl.exe -sL -A "Mozilla/5.0" --max-time 20 $u
  $m = [regex]::Matches($html, 'https?://[^"\s>]+\.(?:jpg|jpeg|webp|png)')
  $pick = $null
  foreach ($x in $m) {
    $v = $x.Value
    if ($v -match 'logo|icon|favicon|sprite|pixel|1x1') { continue }
    $pick = $v
    break
  }
  $out += $u
  $out += $(if ($pick) { $pick } else { 'NONE' })
}
Set-Content -Path 'C:\Users\yaniv\Desktop\thailand-hotels-main\_imgs.txt' -Value ($out -join "`n") -Encoding utf8
