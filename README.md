# PintarTech & TafsirBot STAM — Official Web Portal

> **PintarTech** • Website: [pintartech.my](https://pintartech.my)  
> **TafsirBot STAM Page**: [pintartech.my/tafsirbotSTAM](https://pintartech.my/tafsirbotSTAM)  
> **Emel Sokongan Rasmi**: [support@pintartech.my](mailto:support@pintartech.my)  
> **Telegram Bot**: [@Ustaimantafsirbot](https://t.me/Ustaimantafsirbot)

Portal web rasmi **PintarTech** (Pusat Inovasi Teknologi & Pendidikan) yang mengandungi pautan kepada program latihan kemahiran digital, produk permainan pendidikan interaktif (*Edu Games*), serta sistem AI pembantu pembelajaran **TafsirBot STAM**.

---

## 🌟 Ekosistem Penawaran PintarTech

1. **Kelas Asas Microsoft Excel** (`/kelasexcel`): Bimbingan amali berpandu langkah demi langkah untuk pengurusan lembaran kerja, kemasukan data & formula asas.
2. **Kelas AppSheet No-Code App Dev** (`/kelasappsheet`): Pembinaan aplikasi perniagaan & sistem pengurusan tanpa kod pengaturcaraan.
3. **Koleksi Edu Games (Jualan Permainan Pendidikan Digital)**:
   - 🎮 **Pintar Arabic Kids** (`/pintararabickids`): Permainan Bahasa Arab interaktif kanak-kanak.
   - ✏️ **Pintar Jawi Kids** (`/pintarjawikids`): Permainan penguasaan Jawi secara gamifikasi.
   - 🔢 **Pintar Math Kids** (`/pintarmathkids`): Permainan matematik prasekolah lengkap merangkumi **30 mod permainan interaktif (6 Dunia Pengembaraan Bertema)** selaras kurikulum KSPK.
4. **TafsirBot STAM** (`/tafsirbotSTAM`): Laman jualan rasmi pembantu AI Telegram khas untuk calon STAM & Pengajian Islam berpandukan **Kurikulum Bersepadu Dini Menengah Atas dan Tingkatan Enam Dini (KBD MATED)**.

---

## 🏗️ Seni Bina Komponen & Laluan (SPA Architecture)

```
public/
├── mockups/
│   ├── game-1.jpg ... game-13.jpg  # Gambar Screenshot 13 Game PintarMathKids
│   └── (ai.jpg, kuiz.jpg, ...)     # Gambar Mockup Aplikasi PintarTech
├── pintarmathkids-cert-sample.jpg  # Gambar Contoh Sijil Penghargaan PintarMathKids
└── pintarmathkids-logo.png         # Logo Rasmi PintarMathKids

src/
├── pages/
│   ├── PintartechHome.jsx       # Laman Utama Portal PintarTech (/)
│   ├── TafsirbotPage.jsx        # Laman Jualan Rasmi TafsirBot STAM (/tafsirbotSTAM)
│   ├── PintarmathkidsPage.jsx   # Laman Jualan Rasmi PintarMathKids (/pintarmathkids)
│   ├── PintarmathkidsPage.css   # Gaya Kustom, Corak Background & Animasi PintarMathKids
│   └── MaintenancePage.jsx      # Halaman Penyelenggaraan Khas Produk/Kelas
├── components/
│   ├── pintartech/              # Komponen Terpencil Portal PintarTech
│   │   ├── PintartechNavbar.jsx # Header Glassmorphic & Logo PintarTech
│   │   ├── PintartechHero.jsx   # Hero utama & grid 4 penawaran ekosistem
│   │   ├── PintartechCourses.jsx# Katalog latihan & penapis (Filter Tabs)
│   │   ├── PintartechEduGames.jsx# Katalog jualan Pintar Kids Edu Games
│   │   ├── PintartechFeatures.jsx# Pillars nilai amali & Sistem AI Khas STAM
│   │   ├── PintartechTestimonials.jsx# Suara peserta & pengguna sebenar
│   │   ├── PintartechFAQ.jsx    # Accordion FAQ & Kad Sokongan support@pintartech.my
│   │   ├── PintartechFooter.jsx # Banner pautan & emel support@pintartech.my
│   │   └── AppSheetIcon.jsx     # Ikon SVG rasmi Google AppSheet
│   ├── Navbar.jsx               # Navigasi TafsirBot STAM (Termasuk Pautan Utama PintarTech)
│   ├── Hero.jsx                 # Hero TafsirBot STAM & Bingkai iPad
│   ├── Features.jsx             # Sorotan 8 modul utama TafsirBot
│   ├── SyllabusSection.jsx      # Liputan 5 Surah KBD MATED
│   ├── MockupsSection.jsx       # Split-Screen Dashboard & telefon 320px×650px
│   ├── Pricing.jsx              # Seksyen pelan harga & Payment Gateway
│   ├── Testimonials.jsx         # Testimoni calon STAM
│   ├── FAQ.jsx                  # Accordion soalan lazim TafsirBot
│   └── Footer.jsx               # Hak cipta TafsirBot & Emel Sokongan support@pintartech.my
├── App.jsx                      # Pengendali Laluan SPA (react-router-dom)
└── index.css                    # Scoped .pintartech-theme & Tema Telegram
```

---

## 🎨 Polisi Pengasingan Tema & Autentisiti Pemasaran

- **Pengasingan Tema Terpencil**:
  - Laman **TafsirBot STAM** (`/tafsirbotSTAM`) kekal 100% berasingan dengan palet warna Telegram Blue (`#229ED9`) asal tanpa terjejas.
  - Laman **PintarTech Home** (`/`) diuruskan di bawah kelas pembungkus `.pintartech-theme` dengan palet warna Royal Blue berasaskan aksen khusus (Excel Green `#059669`, Violet `#7c3aed`, Coral Rose `#f43f5e`, Telegram Blue `#0088cc`).
- **Khidmat Sokongan Rasmi**:
  - Saluran bantuan & sokongan rasmi diuruskan melalui emel rasmi `support@pintartech.my`.

---

## 🛠️ Teknologi Yang Digunakan

- **Frontend**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Routing**: [React Router DOM v7](https://reactrouter.com/)
- **Gerbang Pembayaran FPX**: [ToyyibPay API](https://toyyibpay.com/) disepadukan melalui Cloudflare Workers (`toyyibpay-pintarmathkids.sm-fakhrullah92.workers.dev`)
- **Ikon**: [Lucide React](https://lucide.dev/)
- **Kesan Perayaan**: [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)
- **Styling**: Scoped CSS Variables, Flexbox/Grid Layouts, Glassmorphism, & Responsive Design

---

## 🚀 Panduan Menjalankan Projek Locally

### 1. Pemasangan Dependensi
```bash
npm install
```

### 2. Jalankan Dev Server Local
```bash
npm run dev
```
Pelayar web akan dibuka pada `http://localhost:5173/`.

### 3. Bina Production Bundle
```bash
npm run build
```
Hasil binaan pengeluaran akan dijana di dalam folder `dist/`.

---

## 📌 Kredit & Hak Cipta

Dibina khas oleh **PintarTech** ([pintartech.my](https://pintartech.my)). Emel Sokongan: [support@pintartech.my](mailto:support@pintartech.my). Hak Cipta Terpelihara © 2026.
