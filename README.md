# 🍦 Es Tong-Potong — "Potongin Dong!"

<p align="center">
  <img src="public/logo.png" alt="Es Tong-Potong Logo" width="160" />
</p>

<p align="center">
  <strong>Website Resmi Brand Es Potong Klasik Modern</strong><br />
  <em>Jajanan Masa Kecil, Rasa Masa Kini</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 18" />
  <img src="https://img.shields.io/badge/Vite-5.3-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite 5" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Lucide_Icons-0.378-F43F7A?style=for-the-badge" alt="Lucide Icons" />
</p>

---

## 📖 Tentang Es Tong-Potong

**Es Tong-Potong** menghadirkan kembali nostalgia jajanan es potong tradisional Indonesia dengan kemasan dan cita rasa modern. Dilapisi cokelat renyah dengan 4 varian rasa favorit, dibuat dengan bahan berkualitas dan ramah di kantong pelajar/mahasiswa.

📍 **Lokasi Booth:** Fakultas Sains dan Matematika (FSM), Universitas Diponegoro, Tembalang, Semarang.

---

## ✨ Fitur Unggulan

- 🎨 **Ilustrasi SVG Kustom Interaktif**: Ilustrasi es potong murni berbasis SVG dengan efek *chocolate dip*, lelehan (*drip*), dan *topping bits* khas untuk tiap rasa.
- 📋 **Formulir Pre-Order WhatsApp Otomatis**: Pengunjung dapat memilih varian rasa, mengatur jumlah (qty), dan langsung meneruskan detail pesanan ke WhatsApp admin dengan teks pesan terformat otomatis.
- 🛵 **Metode Pengambilan Khusus**: Pengambilan pesanan langsung di booth bazaar FSM Undip.
- 📖 **Edukasi Alur Pemesanan**: Panduan langkah demi langkah (*Pilih Rasa &rarr; Isi Form &rarr; Kirim WA &rarr; Konfirmasi*).
- 💬 **Testimoni & FAQ Interaktif**: Tanya jawab interaktif dengan accordion dan ulasan kepuasan pelanggan.
- 🟢 **Floating WhatsApp Button**: Tombol aksi cepat melayang dengan animasi *pulse indicator*.
- ✨ **Animasi & Interaksi Halus**: Didukung efek *Scroll Reveal* berbasis `IntersectionObserver`, transisi *smooth scroll*, dan efek *hover lift*.
- 📱 **Mobile-First & Responsif Penuh**: Tampilan optimal di semua ukuran layar (smartphone, tablet, hingga desktop).

---

## 🍓 Varian Rasa

| Rasa | Karakteristik | Warna Aksen | Harga |
| :--- | :--- | :---: | :---: |
| **Stroberi** | Manis dan segar dengan rasa buah stroberi pilihan | `#F43F7A` | Rp 5.000 |
| **Mangga** | Rasa mangga tropis yang manis dan menyegarkan | `#FFB347` | Rp 5.000 |
| **Melon** | Manis lembut, ringan, dan menyegarkan | `#9EDB76` | Rp 5.000 |
| **Cookies** | Rasa creamy dengan taburan potongan biskuit gurih | `#D4A574` | Rp 5.000 |

---

## 🛠️ Tech Stack

- **Framework:** [React 18](https://react.dev/)
- **Bundler / Build Tool:** [Vite 5](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v3](https://tailwindcss.com/)
- **Ikon:** [Lucide React](https://lucide.dev/)
- **Font:** Google Fonts ([Fredoka](https://fonts.google.com/specimen/Fredoka) & [Poppins](https://fonts.google.com/specimen/Poppins))

---

## 🚀 Memulai (Quick Start)

### 1. Prasyarat
Pastikan Anda telah menginstal **Node.js** (versi 18 ke atas disarankan) dan **npm**.

### 2. Kloning Repositori
```bash
git clone https://github.com/Ixvaran/es-tong-potong.git
cd es-tong-potong
```

### 3. Instal Dependensi
```bash
npm install
```

### 4. Jalankan Server Pengembangan
```bash
npm run dev
```
Buka browser dan akses alamat `http://localhost:5173`.

### 5. Build untuk Produksi
```bash
# Membuat bundle siap rilis di folder /dist
npm run build

# Menjalankan preview build produksi
npm run preview
```

---

## 📂 Struktur Proyek

```text
es-tong-potong/
├── public/                 # Asset statis (logo, favicon, icon svg)
├── src/
│   ├── assets/             # Asset gambar tambahan
│   ├── components/         # Komponen React modular
│   │   ├── AboutSection.jsx        # Seksi tentang kami
│   │   ├── ContactSection.jsx      # Informasi kontak & booth
│   │   ├── FaqSection.jsx          # FAQ accordion
│   │   ├── FloatingWhatsApp.jsx    # Tombol WA melayang
│   │   ├── Footer.jsx              # Footer dengan hiasan chocolate drip
│   │   ├── Hero.jsx                # Hero banner & preview es potong
│   │   ├── HowToOrder.jsx          # 4 langkah cara pesan
│   │   ├── IcePop.jsx              # Komponen SVG es potong dinamis
│   │   ├── Navbar.jsx              # Header & navigasi responsif
│   │   ├── PreOrderForm.jsx        # Form kalkulator pre-order WA
│   │   ├── ProductCard.jsx         # Kartu display produk
│   │   ├── ProductSection.jsx      # Grid varian rasa
│   │   ├── TeamSection.jsx         # Profil tim
│   │   ├── TestimonialsSection.jsx # Ulasan pelanggan
│   │   └── WhyChooseUs.jsx         # Keunggulan produk
│   ├── data/               # Data terpusat (kontak, produk, tim)
│   │   ├── businessInfo.js         # Kontak WhatsApp, lokasi, link Maps, medsos
│   │   ├── products.js             # Data varian, deskripsi, harga, warna
│   │   └── team.js                 # Data nama & peran anggota tim
│   ├── hooks/
│   │   └── useScrollReveal.js      # Custom hook animasi saat scroll
│   ├── App.jsx             # Komponen utama penyusun tata letak
│   ├── index.css           # Konfigurasi Tailwind & Google Fonts
│   └── main.jsx            # Entry point aplikasi React
├── index.html              # HTML template & metadata
├── package.json            # Daftar dependensi & script
├── tailwind.config.js      # Konfigurasi tema warna & tipografi
└── vite.config.js          # Konfigurasi Vite
```

---

## ⚙️ Kustomisasi Data

Semua data bisnis dan produk terpisah rapi di folder `src/data/`:

* **`src/data/businessInfo.js`**: Mengatur nomor WhatsApp admin, username Instagram, alamat booth, dan link Google Maps.
* **`src/data/products.js`**: Mengatur daftar varian rasa, harga, kode warna tema, dan deskripsi produk.
* **`src/data/team.js`**: Mengatur nama anggota tim dan divisi.

---

## 👥 Tim Es Tong-Potong

* **Juan Paul** — CEO
* **Zerlina** — Finance
* **Farhan** — Creative & Marketing
* **Priyamitha** — Creative & Marketing
* **Nabilatuz** — Operations & Production
* **Galuh** — Operations & Production
* **Radhitya** — Kitchen & Customer Service
* **Intan** — Kitchen & Customer Service

---

<p align="center">
  Dibuat dengan sepenuh hati di <strong>Tembalang, Semarang</strong>.<br />
  © 2026 Es Tong-Potong. All rights reserved.
</p>
