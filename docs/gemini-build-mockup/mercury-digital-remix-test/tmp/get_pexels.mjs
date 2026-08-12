import fs from 'fs';

async function main() {
  try {
    const res = await fetch("https://www.pexels.com/video/a-shot-of-a-coastal-city-from-above-4355367/", {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9"
      }
    });
    const html = await res.text();
    fs.writeFileSync("/tmp/pexels.html", html);
    console.log("Saved /tmp/pexels.html, length:", html.length);
    const matches = html.match(/https:\/\/[^"'\s<>]+?\.mp4/g);
    console.log("Found mp4 urls:", matches);
  } catch (e) {
    console.error(e);
  }
}
main();
