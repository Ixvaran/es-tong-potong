Saya ingin membuat website landing page modern untuk sebuah brand es potong mahasiswa bernama:

ES TONG-POTONG
Tagline: "Potongin Dong!"

Website ini merupakan website resmi untuk brand makanan kecil yang akan dijual secara langsung melalui bazaar kampus dan pre-order.

KONSEP BRAND
Es Tong-Potong adalah produk es potong berlapis cokelat dengan empat pilihan rasa:
1. Stroberi
2. Mangga
3. Melon
4. Cookies

Target utama:
- Pelajar
- Mahasiswa
- Konsumen muda di sekitar Tembalang, Semarang

Brand personality:
- Playful
- Youthful
- Nostalgic
- Friendly
- Fun
- Affordable
- Modern tetapi tetap memiliki nuansa jajanan masa kecil

Website harus terasa seperti website brand dessert sungguhan, bukan seperti website tugas kuliah.

==================================================
1. TECHNICAL REQUIREMENTS
==================================================

Buat website menggunakan:
- React
- Vite
- Tailwind CSS
- Lucide React untuk icon
- Responsive design
- Mobile-first
- Smooth scrolling
- Component-based structure

Jangan menggunakan backend atau database untuk versi pertama.

Website harus dapat dijalankan secara lokal dengan:
npm install
npm run dev

Pastikan kode bersih, modular, dan mudah diedit.

==================================================
2. VISUAL DESIGN
==================================================

Gunakan bahasa desain:

"Clean modern dessert website + playful nostalgic ice cream brand"

Jangan membuat website terlalu ramai.

Gunakan prinsip:
- Banyak whitespace
- Product photography menjadi fokus utama
- Rounded cards
- Organic/wavy section divider
- Subtle chocolate drip decoration
- Playful typography hanya pada heading
- Body text tetap clean dan mudah dibaca
- Jangan menggunakan terlalu banyak ilustrasi sekaligus

COLOR PALETTE:

Primary pink:
#F43F7A

Soft pink:
#F9B6CB

Light pink:
#FDE7EF

Cream:
#FFF8F1

Chocolate brown:
#54261D

Dark text:
#3A2725

White:
#FFFFFF

Gunakan pink sebagai warna brand utama dan chocolate brown sebagai secondary/accent.

Website harus terlihat:
cute + modern + clean

bukan:
childish + overly colorful + cluttered.

==================================================
3. NAVBAR
==================================================

Navbar sticky di bagian atas.

Kiri:
Logo Es Tong-Potong.

Menu:
- Beranda
- Menu
- Tentang Kami
- Cara Pesan
- Tim Kami
- Kontak

Kanan:
Button:
"Pesan Sekarang"

Button menggunakan icon WhatsApp.

Navbar desktop:
- clean
- white/cream background
- subtle shadow
- rounded CTA

Navbar mobile:
- hamburger menu
- CTA tetap mudah diakses

Saat menu diklik, smooth scroll ke section terkait.

==================================================
4. HERO SECTION
==================================================

Hero section harus menjadi bagian paling menarik.

Layout desktop:
2 kolom.

LEFT:
Headline besar:

"ES
TONG-POTONG"

Subheadline:

"Potongin Dong!"

Description:

"Es potong klasik dengan lapisan cokelat dan empat pilihan rasa favoritmu."

CTA:
[ Pesan Sekarang ]
[ Lihat Menu ]

RIGHT:
Gunakan visual produk es potong sebagai focal point.

Tampilkan empat es potong:
- Stroberi
- Mangga
- Melon
- Cookies

Masing-masing memiliki lapisan cokelat di bagian atas.

Tambahkan elemen dekoratif kecil:
- chocolate drip
- strawberry
- mango
- melon
- cookies
- small doodle arrows

Tambahkan small label:
"4 Varian Rasa"
dan
"Jajanan Masa Kecil, Rasa Masa Kini"

Hero harus terlihat premium tetapi tetap playful.

==================================================
5. PRODUCT / MENU SECTION
==================================================

Heading:

"VARIAN RASA"

Subheading:

"Pilih rasa favoritmu atau coba semuanya!"

Buat 4 product cards dalam grid.

CARD 1:
Stroberi
Deskripsi:
"Manis dan segar dengan rasa buah stroberi pilihan."

CARD 2:
Mangga
Deskripsi:
"Rasa mangga yang manis dan menyegarkan."

CARD 3:
Melon
Deskripsi:
"Manis, ringan, dan cocok dinikmati kapan saja."

CARD 4:
Cookies
Deskripsi:
"Rasa creamy dengan potongan cookies yang gurih."

Setiap card berisi:
- Foto produk
- Nama rasa
- Deskripsi singkat
- Harga
- Button / icon "Pesan"

PENTING:
Jangan mengarang harga.

Gunakan placeholder:
"Rp [HARGA]"

Agar harga mudah diganti nanti.

Berikan data produk dalam satu file/data object agar mudah diedit.

==================================================
6. WHY ES TONG-POTONG
==================================================

Buat section dengan background soft pink.

Heading:

"KENAPA PILIH ES TONG-POTONG?"

Tampilkan 4 value proposition:

1. Lapisan Cokelat Lezat
"Perpaduan es yang segar dengan lapisan cokelat renyah."

2. Harga Terjangkau
"Nikmat tanpa menguras kantong."

3. Rasa Nostalgia
"Menghadirkan kembali jajanan masa kecil dengan sentuhan baru."

4. Pilihan Rasa Beragam
"Selalu ada rasa untuk setiap selera."

Gunakan icon sederhana.

Jangan membuat icon terlalu kompleks.

==================================================
7. ABOUT US
==================================================

Section:

"TENTANG KAMI"

Headline:

"Dari jajanan masa kecil, jadi favorit hari ini."

Deskripsi:

"Es Tong-Potong lahir dari keinginan menghadirkan kembali jajanan es potong yang sederhana, namun dikemas dengan rasa dan tampilan yang lebih menarik bagi generasi sekarang. Dengan lapisan cokelat dan empat pilihan rasa, kami ingin memberikan pengalaman nostalgia dalam setiap gigitan."

Tambahkan foto produk / foto brand.

CTA kecil:
"Kenal Lebih Dekat"

Jangan membuat bagian ini terlalu panjang.

==================================================
8. PRE-ORDER SECTION
==================================================

Ini adalah fitur penting.

Heading:

"PRE-ORDER SEKARANG"

Subheading:

"Isi pesananmu dan lanjutkan konfirmasi melalui WhatsApp."

Buat form:

Nama Lengkap
[input]

Nomor WhatsApp
[input]

Pilih Rasa & Jumlah

Stroberi:
[-] [jumlah] [+]

Mangga:
[-] [jumlah] [+]

Melon:
[-] [jumlah] [+]

Cookies:
[-] [jumlah] [+]

Metode Pengambilan:

( ) Ambil di Bazaar
( ) Ambil di lokasi lain

Catatan:
[textarea]

Tampilkan:

"Total: Rp [TOTAL]"

Kemudian button:

"Kirim Pesanan via WhatsApp"

==================================================
9. LOGIC PRE-ORDER
==================================================

JANGAN membuat sistem payment gateway.

JANGAN membuat login/register.

JANGAN membuat shopping cart kompleks.

JANGAN membuat database.

Gunakan sistem:

WEBSITE FORM
↓
GENERATE WHATSAPP MESSAGE
↓
OPEN WHATSAPP
↓
ADMIN CONFIRM ORDER

Ketika user menekan "Kirim Pesanan via WhatsApp", website harus membuat pesan otomatis.

Contoh:

"Halo Es Tong-Potong! Saya ingin melakukan pre-order.

Nama: [nama]

Pesanan:
- Stroberi: 2
- Mangga: 1
- Melon: 0
- Cookies: 1

Total: [total]

Metode pengambilan: Ambil di Bazaar

Catatan: [catatan]

Mohon konfirmasi pesanannya. Terima kasih!"

Kemudian buka WhatsApp dengan format URL:

https://wa.me/[NOMOR_WHATSAPP]?text=[ENCODED_MESSAGE]

Gunakan placeholder untuk nomor WhatsApp:

[WHATSAPP_NUMBER]

Jangan mengarang nomor WhatsApp.

==================================================
10. HOW TO ORDER
==================================================

Buat section:

"CARA PESAN"

Gunakan 4 langkah horizontal pada desktop dan vertical pada mobile.

STEP 1
"Pilih Rasa"
Pilih varian es favoritmu.

STEP 2
"Isi Form"
Masukkan jumlah dan data pemesanan.

STEP 3
"Kirim ke WhatsApp"
Pesanan otomatis diteruskan ke WhatsApp.

STEP 4
"Konfirmasi"
Admin mengonfirmasi pesananmu.

Gunakan icon:
- ice cream
- form
- WhatsApp
- check

==================================================
11. TEAM SECTION
==================================================

Heading:

"TIM KAMI"

Subheading:

"Behind the Potong"

Tampilkan 8 anggota dalam card kecil.

Gunakan data:

Juan Paul
CEO

Zerlina
Finance

Farhan
Creative & Marketing

Priyamitha
Creative & Marketing

Nabilatuz
Operations & Production

Galuh
Operations & Production

Radhitya
Kitchen & Customer Service

Intan
Kitchen & Customer Service

Gunakan avatar placeholder terlebih dahulu.

Buat layout:
4 columns desktop
2 columns tablet
2 columns mobile

Jangan membuat bagian ini terlalu besar karena fokus utama website tetap produk.

==================================================
12. CONTACT & LOCATION
==================================================

Heading:

"KONTAK & LOKASI"

Tampilkan:

Instagram:
@es.tongpotong

WhatsApp:
[WHATSAPP_NUMBER]

Lokasi:
Fakultas Sains dan Matematika
Universitas Diponegoro

Tambahkan button:

"Pesan via WhatsApp"

dan:

"Lihat Lokasi"

Untuk Google Maps, gunakan placeholder:

[GOOGLE_MAPS_LINK]

Jangan mengarang URL.

Tambahkan ilustrasi kecil booth Es Tong-Potong.

==================================================
13. FOOTER
==================================================

Footer menggunakan warna chocolate brown.

Isi:
Logo Es Tong-Potong

Navigation:
Beranda
Menu
Tentang Kami
Cara Pesan
Tim Kami
Kontak

Social:
Instagram
WhatsApp

Text:
"© 2026 Es Tong-Potong. All rights reserved."

==================================================
14. RESPONSIVE DESIGN
==================================================

Website harus benar-benar responsive.

DESKTOP:
- hero 2 columns
- product cards 4 columns
- team 4 columns
- preorder section 2 columns jika memungkinkan

TABLET:
- hero 2 columns
- product cards 2 columns
- team 2-4 columns

MOBILE:
- hero 1 column
- product cards 1 column atau 2 kolom compact
- preorder form 1 column
- team 2 columns
- navigation hamburger
- buttons full-width jika diperlukan

Pastikan tidak ada:
- horizontal overflow
- text terlalu kecil
- button terlalu sempit
- gambar terpotong secara buruk

==================================================
15. MICRO INTERACTIONS
==================================================

Tambahkan animasi ringan:

- fade-in saat section masuk viewport
- hover card sedikit naik
- image scale sangat kecil saat hover
- button hover
- smooth scrolling
- navbar shadow saat scroll

Jangan menggunakan animasi berlebihan.

Website harus terasa smooth dan modern.

==================================================
16. IMPORTANT UX PRINCIPLE
==================================================

Prioritas user journey:

1. User melihat brand
2. User melihat produk
3. User tertarik
4. User melihat harga
5. User klik Pesan
6. User mengisi pre-order
7. User diarahkan ke WhatsApp
8. Admin melakukan konfirmasi

Jangan membuat user harus mencari-cari tombol pemesanan.

CTA "Pesan Sekarang" harus muncul:
- Navbar
- Hero
- Product cards
- Pre-order section
- Footer

==================================================
17. CONTENT PRINCIPLE
==================================================

Jangan menggunakan lorem ipsum.

Gunakan bahasa Indonesia.

Tone:
- friendly
- singkat
- youthful
- natural
- tidak terlalu formal
- tidak terlalu banyak copywriting

Hindari kalimat marketing yang terlalu berlebihan.

==================================================
18. DESIGN DIRECTION
==================================================

Gunakan referensi visual berikut:

STRUCTURE:
Clean modern dessert website.

BRAND PERSONALITY:
Playful nostalgic ice cream brand.

VISUAL:
- pastel pink
- cream
- chocolate brown
- organic shapes
- subtle chocolate drip
- rounded cards
- large product photography
- playful handwritten/bubble-style heading
- clean sans-serif body text

PENTING:
Jangan membuat seluruh halaman menjadi pink.

Gunakan cream/white sebagai base background.
Pink menjadi accent.
Chocolate brown menjadi secondary color.

Hasil akhir harus terlihat seperti:
"brand dessert lokal yang modern dan serius mengelola brand"

bukan:
"website tugas kuliah yang penuh dekorasi."

==================================================
19. CODE QUALITY
==================================================

Pisahkan komponen seperti:

Navbar
Hero
ProductSection
ProductCard
WhyChooseUs
AboutSection
PreOrderForm
HowToOrder
TeamSection
ContactSection
Footer

Pisahkan product data dari UI.

Contoh:

const products = [
 {
   name: "Stroberi",
   description: "...",
   price: 0,
   image: "..."
 },
 ...
]

Gunakan placeholder price 0 atau "[HARGA]" sampai harga asli dimasukkan.

Buat konfigurasi:

const businessInfo = {
 whatsapp: "[WHATSAPP_NUMBER]",
 instagram: "@es.tongpotong",
 maps: "[GOOGLE_MAPS_LINK]"
}

Sehingga saya dapat mengganti informasi bisnis tanpa mengubah banyak bagian kode.

==================================================
20. FINAL RESULT
==================================================

Saya ingin hasil akhirnya berupa website one-page yang:

- modern
- clean
- playful
- nostalgic
- responsive
- mudah digunakan
- memiliki katalog produk
- memiliki pre-order form
- otomatis membuat pesan WhatsApp
- memiliki informasi brand
- memiliki informasi tim
- memiliki kontak dan lokasi
- memiliki visual identity yang konsisten

Fokus utama website adalah:

PRODUCT → BRAND → PRE-ORDER → WHATSAPP

Jangan membuat fitur yang tidak diperlukan.

aku juga melampirkan inspo untuk interface nya 