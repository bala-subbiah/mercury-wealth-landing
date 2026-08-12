#!/usr/bin/env bash
mkdir -p public/logos

# 1. SOLOMON
cat << 'EOF' > public/logos/solomon.svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 160" width="600" height="160">
  <defs>
    <linearGradient id="solomon-text-grad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0B357C" />
      <stop offset="60%" stop-color="#0077E6" />
      <stop offset="100%" stop-color="#00B2FE" />
    </linearGradient>
  </defs>
  <g transform="translate(10, 20)">
    <!-- SOLOMON S Icon -->
    <g transform="translate(0, 10) scale(2.2)">
      <path d="M0 10 C0 4 4 0 10 0 L28 0 C34 0 38 4 38 10 L38 16 L28 16 L28 10 C28 8 26 6 24 6 L14 6 C12 6 10 8 10 10 C10 12 12 14 14 14 L28 14 C34 14 38 18 38 24 L38 32 C38 38 34 42 28 42 L10 42 C4 42 0 38 0 32 L0 26 L10 26 L10 32 C10 34 12 36 14 36 L24 36 C26 36 28 34 28 32 C28 30 26 28 24 28 L10 28 C4 28 0 24 0 18 Z" fill="#0B357C" />
      <polygon points="12,17 21,17 11,27 2,27" fill="#10B981" />
      <polygon points="22,17 31,17 21,27 12,27" fill="#00B2FE" />
    </g>
    <!-- SOLOMON Text -->
    <text x="110" y="80" font-size="76" font-weight="900" letter-spacing="6" fill="url(#solomon-text-grad)" font-family="system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif">SOLOMON</text>
  </g>
</svg>
EOF

# 2. LIZEN ASSET MANAGEMENT
cat << 'EOF' > public/logos/lizen.svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 180" width="700" height="180">
  <g transform="translate(10, 15)">
    <!-- Box Logo -->
    <rect x="10" y="10" width="130" height="130" fill="none" stroke="#2B2D31" stroke-width="12" />
    <rect x="28" y="28" width="18" height="18" fill="#2B2D31" />
    <path d="M28 55 L58 55 L32 120 L28 120 Z" fill="#2B2D31" />
    <path d="M68 32 L112 32 L112 52 L58 52 Z" fill="#2B2D31" />
    <path d="M74 65 L112 65 L112 82 L58 82 Z" fill="#2B2D31" />
    <path d="M46 95 L112 95 L112 118 L28 118 Z" fill="#2B2D31" />
    
    <!-- Text -->
    <text x="170" y="58" font-size="44" font-weight="700" letter-spacing="3" fill="#2B2D31" font-family="'PingFang HK', 'Noto Sans TC', 'Microsoft JhengHei', sans-serif">理正資產管理</text>
    <text x="170" y="98" font-size="32" font-weight="800" letter-spacing="5" fill="#2B2D31" font-family="system-ui, sans-serif">LIZEN</text>
    <text x="170" y="128" font-size="22" font-weight="700" letter-spacing="3" fill="#2B2D31" font-family="system-ui, sans-serif">ASSET MANAGEMENT</text>
  </g>
</svg>
EOF

# 3. UOB KAY HIAN
cat << 'EOF' > public/logos/uob-kay-hian.svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 150" width="600" height="150">
  <g transform="translate(10, 20)">
    <text x="0" y="90" font-size="92" font-weight="800" letter-spacing="-2" fill="#ED4C1C" font-family="Georgia, 'Times New Roman', serif">UOB</text>
    <text x="215" y="90" font-size="90" font-weight="700" letter-spacing="-1" fill="#4A5568" font-family="Georgia, 'Times New Roman', serif">KayHian</text>
  </g>
</svg>
EOF

# 4. CYBERPORT
cat << 'EOF' > public/logos/cyberport.svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 200" width="650" height="200">
  <g transform="translate(10, 20)">
    <!-- 數碼港 positioned above 'p' of Cyberport -->
    <text x="280" y="45" font-size="48" font-weight="800" letter-spacing="2" fill="#005BAC" font-family="'PingFang HK', 'Noto Sans TC', 'Microsoft JhengHei', sans-serif">數碼港</text>
    <!-- Cyberport in italic -->
    <text x="0" y="115" font-size="96" font-weight="700" font-style="italic" letter-spacing="-1" fill="#00A0E9" font-family="system-ui, -apple-system, sans-serif">Cyberport</text>
    <!-- 4 colored bar stripes -->
    <rect x="0" y="132" width="600" height="6" fill="#004883" />
    <rect x="0" y="138" width="600" height="6" fill="#00A0E9" />
    <rect x="0" y="144" width="600" height="6" fill="#78BE20" />
    <rect x="0" y="150" width="600" height="6" fill="#D4E157" />
  </g>
</svg>
EOF

# Convert SVGs to high quality PNGs with transparent background
convert -density 300 -background none public/logos/solomon.svg public/logos/solomon.png
convert -density 300 -background none public/logos/lizen.svg public/logos/lizen.png
convert -density 300 -background none public/logos/uob-kay-hian.svg public/logos/uob-kay-hian.png
convert -density 300 -background none public/logos/cyberport.svg public/logos/cyberport.png

ls -lh public/logos/
