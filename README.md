README.md
ES TONG-POTONG 🍦
Website resmi brand es potong Es Tong-Potong — "Potongin Dong!"

Quick Start
npm installnpm run dev
Buka http://localhost:5173

⚙️ Konfigurasi WAJIB Sebelum Production
1. Nomor WhatsApp Admin
Edit src/data/businessInfo.js:

js

whatsapp: "6281234567890", // GANTI dengan nomor admin (format internasional tanpa +)
2. Link Google Maps
Edit src/data/businessInfo.js:

js

maps: "https://maps.app.goo.gl/xxxxx", // GANTI dengan link lokasi
3. Harga Produk
Edit src/data/products.js, ubah field price dari 0 ke harga asli:

js

{
  id: "stroberi",
  price: 5000, // contoh
  ...
}
Saat harga masih 0, akan tampil "Rp [HARGA]" di produk dan "Rp [TOTAL]" di form pre-order.

🎨 Customization
Warna brand: Edit tailwind.config.js (primary, choco, cream, dll)
Font: Edit import Google Fonts di src/index.css dan fontFamily di tailwind config
Data produk: Edit src/data/products.js
Data tim: Edit src/data/team.js
Info bisnis: Edit src/data/businessInfo.js
🏗️ Build Production
bash

npm run build
npm run preview
Tech Stack
React 18
Vite 5
Tailwind CSS v3
Lucide React


---

## ✅ Catatan Penting Sebelum Deploy

Sebelum website benar-benar live, **WAJIB** ganti 3 placeholder berikut:

| File | Placeholder | Ganti Dengan |
|---|---|---|
| `src/data/businessInfo.js` | `whatsapp: "[WHATSAPP_NUMBER]"` | Nomor WhatsApp admin, contoh: `"6281234567890"` |
| `src/data/businessInfo.js` | `maps: "[GOOGLE_MAPS_LINK]"` | URL Google Maps lokasi booth |
| `src/data/products.js` | `price: 0` (untuk tiap produk) | Harga asli produk, contoh: `5000` |

## 🎯 Highlight Fitur

✨ **Hero section** dengan 4 es potong SVG custom (chocolate drip, flavor bits)
🛒 **Pre-order form** dengan quantity selector & auto-generate WhatsApp message
📱 **Fully responsive** — mobile-first dengan hamburger menu
🎨 **Color palette** sesuai brief: pink primary + chocolate brown secondary di atas cream base
✨ **Micro-interactions**: scroll reveal (IntersectionObserver), hover lift, button transitions
🧩 **Modular**: data terpisah dari UI di folder `src/data/`
🍫 **Chocolate drip** di atas footer sebagai divider organik
🪶 **Typography**: Fredoka (display, playful) + Poppins (body, clean)

Jalankan `npm run dev` dan website siap dilihat di `http://localhost:5173`! 🍦