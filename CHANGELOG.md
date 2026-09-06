# Changelog — PintarTech & TafsirBot STAM Web Portal

Semua perubahan, kemas kini reka bentuk, laluan SPA, dan penambahbaikan pada portal web **PintarTech** (`pintartech.my`) serta **TafsirBot STAM** (`pintartech.my/tafsirbotSTAM`) direkodkan di sini.

---

## [2.8.0] - 2026-09-06

### 🎁 Kemaskini Promosi PintarMathKids: 30 Mod Asas + 20 Bonus Tambahan & Pengecilan Mockup (10 Pilihan Utama)

- **Penonjolan Pakej Promosi 30 Mod Asas + 20 Permainan Bonus Ekstra (Jumlah 50 Permainan)**:
  - **Banner Promosi Teratas (Top Promo Announcement Banner)**: Menambah banner amaran promosi di bahagian paling atas skrin dengan kiraan `30 Mod KSPK + PERCUMA 20 Permainan Bonus (Total 50 Permainan) | JIMAT RM30` dan butang seruan bertindak segera.
  - **Hero Section**:
    - Mengemaskini tajuk utama dan penerangan bagi mengetengahkan tawaran 30 Mod Utama KSPK + 20 Mod Bonus Ekstra Percuma sepanjang tempoh promosi.
    - Menambah lencana tawaran promo `JIMAT RM30` dan `+20 BONUS` pada kad harga RM39 seumur hidup.
    - Mengemaskini paparan visual kad peranti hero kanan dengan lencana `30 Mod + 20 Bonus Percuma (50 Koleksi Lengkap)`.
  - **Zon Khas Bonus Promosi (`#bonus-promo`)**:
    - Mereka bentuk zon dedikasi bertema gelap & neon emas-ungu yang menampilkan 4 dunia pengembaraan bonus rasmi PintarMathKids (20 modul tambahan Game 31 - 50):
      1. **Dunia 7: Bandar Detektif & Misteri Masa (Game 31 - 35)**: Cermin Ajaib & Simetri Comel, Pengukur Jejak Kaki Dino, Detektif Kotak Matriks, Cerita Urutan Masa Bergambar, Kereta Api Rantai Domino.
      2. **Dunia 8: Kerajaan Ajaib & Khazanah Emas (Game 36 - 40)**: Mulut Buaya Lapar (> , < , =), Peta Grid Harta Karun, Mesin Nombor Ajaib, Tabung Syiling Cilik, Arkitek Bongkah 3D.
      3. **Dunia 9: Taman Ria Sains & Logik Pintar (Game 41 - 45)**: Rumah Ikatan Nombor, Jongkang-Jongkit Berat Ringan, Manik Sempoa Cilik, Detektif Suhu Panas & Sejuk, Gelung Himpunan Venn.
      4. **Dunia 10: Kemuncak Galaksi Angkasa Lepas (Game 46 - 50)**: Menara Blok Ketinggian, Pengelas Tiga Saiz, Detektif Jam Pasir, Piknik Riang Kongsi Sama Rata, Mahkota Bintang Galaksi.
    - Menambah kad ringkasan tawaran dengan butang tindakan terus ke borang pembelian FPX.
  - **Harga, FAQ & Modal Pembelian FPX (ToyyibPay)**:
    - Mengemaskini senarai ciri pakej di `#harga` untuk menyertakan `20 Permainan Bonus Promosi`.
    - Mengemaskini jawapan FAQ 1 & 3 untuk menerangkan pecahan 30 modul teras + 20 bonus promo.
    - Mengemaskini ringkasan borang pesanan FPX modal checkout dengan `30 Mod Utama + 20 Bonus Percuma (Jumlah 50 Koleksi Game)`.
  - **Portal Utama PintarTech (`PintartechEduGames.jsx`)**:
    - Mengemaskini kad produk Pintar Math Kids kepada `'30 Mod Permainan + Bonus 20 Tambahan (Total 50 Permainan Sepanjang Promo)'`.

- **Pengecilan & Pengoptimuman Galeri Mockup Peranti (10 Pilihan Utama)**:
  - Mengurangkan bilangan pratonton mockup dalam `#galeri-mockup` daripada 30 kepada **10 pilihan terbaik** (`game-1.jpg` hingga `game-10.jpg`).
  - Menghapuskan bar penapis dunia yang padat di atas galeri mockup bagi menghasilkan paparan yang bersih, fokus, dan kemas.
  - Menampilkan pemilih mockup 10 item yang anggun:
    - **Desktop / Tablet**: Grid responsif 5x2 yang memaparkan nombor, nama permainan, ikon dan objektif pembelajaran.
    - **Mobile**: Bar *stepper* padat dengan menu *dropdown* 10 pilihan serta butang navigasi pantas ◀ dan ▶.
  - Menambah kawalan navigasi pantas *Previous / Next* berserta penunjuk `X / 10 Pilihan` pada kad perincian permainan.
  - Menghadkan pra-muat turun imej (`image preloading`) kepada 10 imej pertama sahaja bagi kelajuan pemuatan laman yang lebih pantas.

---

## [2.7.0] - 2026-09-03

### 📚 Penambahan Info 2,500+ Bank Soalan Kuiz Pelbagai Aspek & KBAT (`/tafsirbotSTAM`)

- **Penonjolan 2,500+ Bank Soalan Kuiz Komprehensif**:
  - Mengemaskini portal jualan TafsirBot STAM dengan maklumat bank soalan kuiz bertimer yang melebihi **2,500+ soalan** untuk menguji kefahaman calon STAM.
  - Skop ujian merangkumi segenap aspek teras sukatan peperiksaan STAM:
    1. **Mufradat (Kosa Kata Arab-Melayu)**
    2. **Pengajaran Ayat & Istinbat Hukum**
    3. **Tafsir Ayat & Asbabun Nuzul**
    4. **Perbincangan Bahasa (Nahu, Sorf & Sirr Balaghi)**
    5. **Kemahiran Berfikir Aras Tinggi (KBAT)**
- **Kemas Kini Komponen & Seksyen Terlibat**:
  - **Hero Section (`Hero.jsx`)**:
    - Menambah lencana metrik kepercayaan (*Trust Metrics*) `2,500+ Bank Soalan Kuiz` (*Mufradat, Tafsir, Bahasa & KBAT*).
    - Mengemas kini teks perenggan pengenalan dan lencana modul (*feature quick chip*) dengan `2,500+ Bank Soalan Kuiz (KBAT)`.
  - **Pengenalan & Peranan Bot (`IntroductionSection.jsx`)**:
    - Mengemas kini peranan modul kuiz kepada `2. Mesin Kuiz Objektif & Timer (2,500+ Bank Soalan)` dengan huraian liputan aspek soalan.
  - **Ciri-Ciri Utama (`Features.jsx`)**:
    - Mengemas kini kad modul kuiz kepada `2,500+ Bank Soalan Kuiz & Pemasa` beserta lencana `⭐ Termasuk KBAT`.
    - Menegaskan ketersediaan 2,500+ bank soalan kuiz pada teks pengenalan seksyen ciri.
  - **Liputan Silibus (`SyllabusSection.jsx`)**:
    - Menambah poin kelebihan utama `2,500+ Bank Soalan Kuiz (Mufradat, Pengajaran Ayat, Tafsir, Bahasa & KBAT)`.
  - **Galeri Mockup (`MockupsSection.jsx`)**:
    - Memaparkan kelebihan 2,500+ soalan kuiz bertimer pada kad mockup pratonton Telegram.
  - **Pakej & Harga (`Pricing.jsx`)**:
    - Menyelaraskan ciri pelan langganan (7 hari, bulanan, semester & tahunan) dengan akses penuh kepada 2,500+ soalan kuiz & KBAT.
  - **Soalan Lazim (`FAQ.jsx`)**:
    - Mengemaskini jawapan silibus dan menambah entri soalan lazim khusus berkenaan jumlah dan skop ujian bank soalan kuiz.
  - **Seruan Promosi (`PromotionalCallouts.jsx`)**:
    - Memperincikan kelebihan 2,500+ soalan kuiz pada kad perbandingan dan sepanduk promosi utama.

---

## [2.6.0] - 2026-08-29

### 🚀 Peluasan 30 Mod Permainan, Sentuhan Emosi Ibu Bapa & Pemuatan ToyyibPay FPX (`/pintarmathkids`)

- **Peluasan Dataset Permainan Penuh (30 Games across 6 Themed Worlds)**:
  - **Dunia 1: Rimba Safari 🌿 (Game 1 - 5)**: Membilang Safari, Padanan Bentuk Asas, Lengkapkan Pola Warna, Tarik & Padan Nombor, Operasi Tambah Visual.
  - **Dunia 2: Istana Bentuk & Bayang 🏰 (Game 6 - 10)**: Padanan Sarang Bentuk, Teka Bayang Objek, Operasi Tolak Pop!, Padanan Gula-Gula, Roda Nombor Bertuah.
  - **Dunia 3: Lembah Manisan & Masa 🍭 (Game 11 - 15)**: Pasangan Nombor 10, Jam Analog Ceria, Teka Bentuk Misteri, Pasar Raya Pintar, Neraca Timbang Ajaib.
  - **Dunia 4: Angkasa Lepas & Kiraan Pantas 🚀 (Game 16 - 20)**: Tangga Roket Nombor (1-30), Pengembaraan Pecahan Pizza, Cabaran Ruang & Kedudukan, Kiraan Pantas Dadu (Subitizing), Menara Blok Tertinggi.
  - **Dunia 5: Lautan Magis & Statistik 🌊 (Game 21 - 25)**: Graf Akuarium Ceria, Nombor Ganjil & Genap, Rumah Puluh & Sa, Katak Garis Nombor, Kalendar Hari & Waktu.
  - **Dunia 6: Makmal Sains & Logik Magis 🧪 (Game 26 - 30)**: Makmal Isipadu & Kapasiti, Tangram Bentuk Ajaib, Kereta Api Bilang Lompat (Skip Counting), Pembahagian Adil Roti, Pengembaraan Grid Koding (Coding Maze).
- **Penapis Tab Dunia Bertema (`World Filter Pills`)**:
  - Menambah sistem penapis dunia interaktif di seksyen Galeri Mockup (`#galeri-mockup`) dan Senarai Permainan (`#permainan`) untuk memudahkan ibu bapa & guru menapis permainan mengikut dunia pengembaraan.
- **Penaiktarafan Pemilih Permainan Responsif (Desktop & Mobile)**:
  - **Desktop/Tablet**: Grid butang lencana responsif yang menyokong kesemua 30 permainan.
  - **Mobile**: Bar *stepper* & menu *dropdown* padat dengan navigasi anak panah ◀ / ▶ yang memuatkan kesemua 30 permainan secara teratur.
- **Sokongan Kanvas Skrin Mockup Interaktif (`Fallback HTML Screen`)**:
  - Menyediakan reka bentuk paparan kad skrin interaktif simulasi (`ipadHtml`) bagi setiap 30 permainan apabila imej fail fizikal belum dimuat naik.
- **❤️ Seksyen Khas Sentuhan Emosi Ibu Bapa (*Guilt-Free Screen Time & Ketenangan Minda*)**:
  - Menambah seksyen dedikasi empati ibu bapa dengan 3 kad emosi berimpak tinggi:
    1. *Ibu Boleh Masak & Urus Rumah Dengan Tenang* (100% persekitaran digital selamat tanpa iklan luar atau link bahaya).
    2. *Tukar Ketagihan Gajet Kepada Asah Minda* (Ubah masa skrin pasif kepada sesi aktif mengira dan berfikir logik).
    3. *Tiada Lagi Drama Menangis Buat Latihan* (Menghapuskan rasa takut terhadap lembaran kerja kertas).
  - Menambah kad sentuhan hati *"Pelaburan Kecil untuk Keyakinan Awal Anak Anda"* bagi memupuk keyakinan sebelum melangkah ke Tahun 1.
  - Mengemaskini *copywriting* di Hero Utama dengan mesej mesra *"Beri anak anda masa skrin yang berfaedah tanpa rasa bersalah 💖"*.
- **💳 Skrin Pemuatan & Peralihan Penuh ToyyibPay FPX (*Full-Card Loading Screen*)**:
  - Menambah paparan skrin pemuatan penuh (*dedicated redirect screen*) sebaik sahaja pembeli menekan butang bayar:
    * Gelung pemuatan bercahaya (*glowing animated spinner*) dengan ikon kad 💳.
    * Lencana berdenyut *Sedang Menjana Bil FPX...*.
    * Bar kemajuan beranimasi (*animated progress bar*).
    * Jaminan keselamatan SSL 256-Bit ToyyibPay bagi memberi keyakinan maksima kepada ibu bapa semasa peralihan ke laman perbankan.
- **Pembersihan Visual Mockup Hero**:
  - Membuang kotak penunjuk garis putus-putus (*dashed placeholder box*) pada skrin Hero dan menggantikannya dengan paparan kemas 30 Permainan Matematik (6 Dunia).
- **Kemas Kini Menyeluruh Portal**:
  - Mengemas kini tajuk, lencana, seksyen Mod Ibu Bapa & Guru (30 topik analisis ketepatan), Sijil Penghargaan (30 modul), Senarai Ciri Tawaran Promosi, FAQ, Pautan Footer, serta Borang Pembelian ToyyibPay.

---

## [2.5.0] - 2026-08-15

### 🎮 Penambahbaikan Tetingkap Kejayaan Pendaftaran & Akses Permainan (`/pintarmathkids`)
- **Peringatan Semakan E-mel**:
  - Menambah kad makluman mesra pengguna yang memaklumkan pembeli bahawa pautan akses telah dihantar ke e-mel mereka, beserta peringatan untuk menyemak folder **Inbox** atau **Spam / Junk Mail**.
- **Pautan & Butang Akses Permainan Terus**:
  - Menambah butang utama menonjol **"🎮 Klik Di Sini Untuk Mula Bermain Sekarang"** yang membawa pembeli terus ke pautan aplikasi permainan `https://pintarmathkids.pages.dev/`.

---

## [2.4.0] - 2026-08-11

### 💳 Integrasi Pembayaran Rasmi ToyyibPay FPX (`/pintarmathkids`)
- **Penggantian Tetingkap Penyelenggaraan kepada Borang Pembelian Rasmi**:
  - Menggantikan tetingkap modal penyelenggaraan lama dengan **Borang Pembelian & Pendaftaran Rasmi PintarMathKids**.
  - Mengumpul data nama penuh, e-mel, dan nombor telefon / WhatsApp pembeli.
- **Integrasi Endpoint Cloudflare Worker ToyyibPay**:
  - Menyepadukan panggilan `fetch` secara terus ke custom domain API ToyyibPay Worker:  
    `https://payment-mathkids.pintartech.my/api/create-bill`
  - Memastikan semakan `response.ok` dan pengesahan `data.paymentUrl` dilakukan secara ketat sebelum melakukan lencongan (*redirect*) ke gerbang pembayaran FPX.
  - Menyelia parameter balasan ToyyibPay (`status_id`):
    - **`status_id=1`**: Menentukan kelulusan pembayaran sebenar dan memaparkan tetingkap kejayaan pendaftaran beserta *confetti*.
    - **`status_id=2` / `status_id=3` / `status_id=0`**: Mengesan pembatalan / kegagalan transaksi dari ToyyibPay dan memaparkan amaran yang tepat tanpa mencetuskan mesej kejayaan palsu.
  - Menyediakan penunjuk kemajuan (*loading spinner*) dan paparan mesej ralat mesra pengguna.

---

## [2.3.0] - 2026-08-10

### 📱 Penambahbaikan Bingkai iPad Mockup & Seksyen Sijil Penghargaan
- **Pembersihan Modul Sijil Penghargaan (`PintarmathkidsPage.jsx`)**:
  - Membuang butang tiruan (`Kembali`, `Cetak`) dan bingkai bertindih di dalam iPad.
  - Membolehkan gambar `pintarmathkids-cert-sample.jpg` memenuhi keseluruhan kanvas peranti iPad dari penjuru ke penjuru secara *edge-to-edge*.
- **Penaiktarafan Seksyen Pratonton Mockup 13 Permainan (`#galeri-mockup`)**:
  - **Penghapusan Bingkai Telefon**: Membuang bingkai iPhone dan menumpukan paparan kepada bingkai iPad peranti tunggal yang eksklusif.
  - **Pengemasan Saiz Bingkai 'Form-Fitting'**: Menghapuskan sela masa *min-height* dan ruang kosong (*black bars*) supaya bingkai iPad secara automatik melipat dan membalut mengikut nisbah resolusi gambar lanskap game secara rapat (*snug & form-fitting*).
  - **Gaya Visual Ultra-Premium**: Menambah lencana nombor bulat (`#1` hingga `#13`) pada butang penapis, *golden ambient spotlight glow*, dan bingkai berona gelap keemasan.
  - **Sokongan Gambar 13 Permainan Sebenar**: Menyediakan laluan automatik membaca fail `public/mockups/game-1.jpg` hingga `game-13.jpg` (dengan sokongan *fallback* automatik `.png`).
- **Pencegahan Sela Masa & Kelancaran Penukaran Gambar (0ms Instant Switch)**:
  - Menyepadukan fungsi **`useEffect` Image Preloading** untuk memuat turun kesemua 13 gambar ke dalam memori pelayar semasa halaman dibuka.
  - Membolehkan pertukaran gambar antara permainan #1 hingga #13 berlaku secara **serta-merta (0 milisaat)** tanpa sebarang sela masa (*lag/flicker*).

---

## [2.2.0] - 2026-08-07

### 🎮 Pelancaran Laman Jualan Khas PintarMathKids (`/pintarmathkids`)
- **Pembangunan Laman Jualan Dedicated (`PintarmathkidsPage.jsx` & `PintarmathkidsPage.css`)**:
  - **Identiti Visual & Header**: Menampilkan jenama PintarMathKids, slot muat naik logo khas (`/pintarmathkids-logo.png` dengan *fallback* automatik), dan menu navigasi mesra pengguna.
  - **Pratonton Visual Peranti (Mockup Device Showcase)**:
    - Latar belakang tema gelap bertokoh *ambient spotlight glow* ("putih sikit di tengah").
    - **13 Butang Permainan Interaktif**: Memilih butang permainan menukar paparan skrin bingkai iPad & iPhone secara langsung.
    - Bingkai iPad & iPhone dengan slot placeholder screenshot yang bersedia untuk muat naik gambar sebenar.
  - **Tawaran & Ganjaran**:
    - Kotak tawaran promosi **RM39 (Akses Seumur Hidup)**, 100% Offline Ready PWA, Bebas Iklan, & Selaras KSPK.
    - Seksyen Kedai Maskot (14 maskot haiwan), sistem syiling & Album Sticker Digital.
    - Dashboard Ibu Bapa & Guru dengan laporan peratusan ketepatan & butang cetak *Sijil Penghargaan*.
  - **Laporan & Tetingkap Penyelenggaraan / Akan Datang**:
    - Menyesuaikan butang pembelian untuk membuka tetingkap modal **Penyelenggaraan / Akan Datang** beserta borang simpanan e-mel pemakluman pelancaran.
  - **Footer Kaya Multi-Kolum**:
    - Memuatkan maklumat PintarMathKids, senarai penuh koleksi Edu Games (Pintar Arabic, Jawi, Math), serta program & kelas latihan PintarTech.
  - **Modul & Seksyen Sijil Penghargaan Khas (iPad Mockup Showcase)**:
    - Membaiki pepijat kunci terjemahan mentah (seperti `cert_awarded_to`, `cert_total_stars`, `cert_title_rank`, `cert_print_btn`) kepada teks Bahasa Melayu yang bersih dan indah.
    - Membina **Seksyen Khas Pencetakan Sijil Penghargaan** lengkap dengan **Bingkai iPad Mockup** (iPad Air Tablet Showcase) berserta slot placeholder `[ Slot Gambar Sijil Contoh ]` (`public/pintarmathkids-cert-sample.png`).
    - Membina tetingkap modal interaktif **Pratonton Sijil Penghargaan** dengan kebolehan menukar nama anak dan menguji fungsi cetakan PDF.

---

## [2.1.0] - 2026-08-05

### ✉️ Integrasi Emel Sokongan Rasmi (`support@pintartech.my`)
- **Penambahan Emel Sokongan Rasmi**: Menyepadukan pautan emel `support@pintartech.my` secara konsisten di seluruh laman web:
  - Footer Laman Utama PintarTech (`PintartechFooter.jsx`).
  - Seksyen FAQ PintarTech (`PintartechFAQ.jsx`) dengan kad soalan panggilan khas.
  - Halaman Penyelenggaraan (`MaintenancePage.jsx`).
  - Footer TafsirBot STAM (`Footer.jsx`).
- **Pembersihan Seksyen Sokongan (`Footer.jsx`)**: Membuang pautan Telegram Bot daripada seksyen sokongan pelanggan di halaman TafsirBot STAM dan menumpukan saluran sokongan terus kepada emel `support@pintartech.my`.

### 🧭 Navigasi Laman Utama Di Header TafsirBot STAM
- **Pautan Navigasi "Utama (PintarTech)" (`Navbar.jsx`)**: Menambah butang pautan menonjol `Utama (PintarTech)` di bar header dan menu mudah alih TafsirBot STAM (`/tafsirbotSTAM`) untuk memudahkan pengguna kembali ke portal utama.

### 🎮 Penjenamaan Semula: Pintar Math Kids (`/pintarmathkids`)
- **Penamaan Ringkas & Kemas**: Memendekkan nama produk daripada *Pintar Matematik Kids* kepada **Pintar Math Kids**.
- **Kemas Kini Laluan SPA (`App.jsx`)**: Mengubah laluan pautan penyelenggaraan daripada `/pintarmatematikkids` kepada **`/pintarmathkids`**.

---

## [2.0.0] - 2026-08-04

### 🚀 Integrasi Portal Utama PintarTech & Sistem Multi-Routing SPA
- **Pembangunan Laman Utama PintarTech (`PintartechHome.jsx`)**: Membina portal rasmi PintarTech di laluan utama (`/`) bagi menggabungkan semua penawaran perkhidmatan teknologi dan pendidikan.
- **Sistem Routing SPA (`App.jsx`)**: Menggunakan `react-router-dom` untuk memisahkan Laman Utama PintarTech (`/`), Laman Jualan TafsirBot STAM (`/tafsirbotSTAM`), dan Halaman Penyelenggaraan (`/pintararabickids`, `/pintarjawikids`, `/pintarmathkids`, `/kelasexcel`, `/kelasappsheet`).
- **Halaman Penyelenggaraan Khas (`MaintenancePage.jsx`)**: Membina komponen pemberitahuan *Penyelenggaraan / Coming Soon* yang berstruktur dan kemas bagi pautan produk & kelas yang belum dilancarkan secara rasmi.

### 🎨 Reka Bentuk & Tema Warna Aksen Kategori
- **Pengasingan Tema Terpencil (`.pintartech-theme`)**: Memastikan perubahan tema di Laman Utama PintarTech tidak menjejaskan estetika Telegram Ice-Blue di laman sales TafsirBot STAM.
- **Identiti Warna Aksen Kategori**:
  - **Kelas Asas Microsoft Excel**: Hijau Excel Rasmi (`#059669` / `#ecfdf5`).
  - **Kelas AppSheet No-Code**: Premium Violet Purple (`#7c3aed` / `#f5f3ff`).
  - **Katalog Edu Games**: Coral Rose Pink (`#f43f5e` / `#fff1f2`).
  - **TafsirBot STAM AI**: Telegram Ice Blue (`#0088cc` / `#e8f5fe`).

### 📦 Kemas Kini Modul & Produk PintarTech
- **Katalog Edu Games**:
  - Menukar nama *Arabic Kids Game* kepada **Pintar Arabic Kids**.
  - Menyediakan **Pintar Jawi Kids** untuk penguasaan ejaan dan sambungan Jawi.
  - Membuang tawaran *Custom Game* untuk menumpukan kepada produk jualan sedia ada.
- **Kelas Microsoft Excel**: Ditukar khusus kepada **Kelas Asas Microsoft Excel** dengan penekanan pada pengenalan lembaran kerja, format sel, dan formula asas.
- **Jenama Consisten**: Memastikan penulisan jenama menggunakan format **PintarTech** (bukan `PINTARTECH` atau `pintartech home`).
- **Autentisiti Pemasaran**: Membuang semua angka statistik rekaan, testimoni tiruan, dan pautan WhatsApp yang tidak dikehendaki.

---

## [1.5.0] - 2026-08-03

### 📱 Bingkai iPad Hero & Dokumentasi Projek
- **Bingkai iPad Hero (`Hero.jsx`)**: Menukar kad grid teks biasa di bahagian Hero kepada Bingkai Tablet iPad eksklusif (`maxWidth: 460px`, `background: #0f172a`) lengkap dengan pemuat gambar automatik (`public/ipad_hero.png` / `ipad_hero.jpg`).
- **Pemuatan Berkas README.md & CHANGELOG.md**: Menyediakan berkas dokumentasi projek rasmi lengkap dengan struktur seni bina, panduan pengurusan gambar `public/mockups/`, dan arahan pengendalian dev server.

---

## [1.4.0] - 2026-08-03

### 🎨 Reka Bentuk Mockup Split-Screen & Banner Metrik Lebar
- **Gaya Interactive Split-Screen Dashboard (`MockupsSection.jsx`)**: Menukar persembahan mockup kepada gaya Split-Screen (Menu Modul di Kiri + Stand Telefon `320px` × `650px` di Kanan) mengikut maklum balas pengguna.
- **Bingkai Telefon Kustom 320px × 650px**: Mengikut spesifikasi kod kustom pengguna dengan kamera *punch-hole*, *speaker slit*, dan *slate-800 frame*.
- **Penebalan & Ketinggian Skrin (650px Height)**: Membolehkan paparan perbualan Telegram kelihatan luas dan panjang.
- **Penambahbaikan Banner Metrik `Hero.jsx`**: Memperluaskan jalur metrik statistik kepada Banner Grid 5 Kolum Berkelebaran Penuh (*Full-Width Rich Metrics Grid Banner*).
- **Tajuk Mesra Jualan**: Mengemas kini tajuk seksyen kepada *"Gambaran Sebenar Modul Pembelajaran STAM"* dan membuang istilah jargun piksel.

---

## [1.3.0] - 2026-08-03

### 📚 Kemas Kini Silabus KBD MATED & 5 Surah Rasmi
- **Rujukan Kurikulum Rasmi**: Menukar semua rujukan KPM/JAKIM kepada **Kurikulum Bersepadu Dini Menengah Atas dan Tingkatan Enam Dini (KBD MATED)**.
- **5 Surah Sahaja**: Membuang Surah Al-Qamar. Mengemas kini senarai surah kepada **Surah Az-Zariyat, At-Tur, An-Najm, Al-Rahman, dan Al-Waqi'ah**.
- **Penekanan 4 Komponen Peperiksaan**: Menambah *banner* sorotan untuk 4 tiang silabus pada setiap surah:
  1. Ma'ani Kalimat (Mufradat / Kosa Kata)
  2. Tafsir Ayat & Asbabun Nuzul
  3. Perbincangan Bahasa (Nahu, Sorf, & Sirr Balaghi)
  4. Pengajaran Ayat & Istinbat Hukum.
- **Membaiki Teks Butang CTA (`PromotionalCallouts.jsx`)**: Membaiki masalah teks butang putih yang tidak kelihatan dengan warna Biru Telegram Gelap (`#0088cc`).

---

## [1.2.0] - 2026-08-03

### 🔔 Info Mufradat Harian 8:00 AM & Tekstur Latar Belakang
- **Sorotan Notifikasi Mufradat 8:00 AM (`Features.jsx`)**: Menjadikan kad *Info Mufradat Harian Automatik* sebagai kad sorotan berbingkai emas di bahagian atas grid.
- **Latar Belakang Tekstur `.bg-light-pattern`**: Menukar latar belakang putih rata kepada warna *Ice-Blue Toned (`#f0f6fc`)* bergaris *fine mesh grid* 32px dan limpahan cahaya *ambient cyan radial glow*.
- **Pembaikan Tag HTML JSX**: Menggantikan simbol string `**teks**` kepada tag HTML JSX rasmi `<strong>teks</strong>` merentasi seluruh komponen.

---

## [1.1.0] - 2026-08-03

### 💰 Pelan Diskaun & Latar Belakang Gelap Geometrik
- **Latar Belakang Pricing Pattern (`.bg-dark-pattern`)**: Menambah corak *geometric grid lines* berlatarkan warna gelap `#0b131e` dengan pancaran cahaya *cyan ambient*.
- **Harga Diskaun Struck-Through**:
  - Pelan 30 Hari: ~~RM30~~ ➔ **RM25** (`DISKAUN 17% • JIMAT RM5`)
  - Pelan 7 Hari: ~~RM15~~ ➔ **RM10** (`JIMAT RM5`)
  - Pelan 90 Hari: ~~RM90~~ ➔ **RM60** (`DISKAUN 33% • JIMAT RM30`)
  - Pelan 1 Tahun: ~~RM360~~ ➔ **RM180** (`DISKAUN 50% • JIMAT RM180`)
- **Kotak Keselamatan Payment Gateway**: Menambah pengesahan *Payment Gateway Rasmi (FPX / Credit Card)* disulitkan dengan *256-bit SSL Security*.
- **Penerangan Pengenalan Lengkap (`IntroductionSection.jsx`)**: Memperkemas seksyen pengenalan 1-minit fahami 5 peranan utama bot dan sebab mengulang di Telegram.

---

## [1.0.0] - 2026-08-03

### 🚀 Peluncuran Awal Laman Web Sales
- Inisialisasi projek Vite + React di `Tafsirbot-salesweb`.
- Pemasangan `lucide-react` dan `canvas-confetti`.
- Penjenamaan **PintarTech** (`pintartech.my`) dan warna rasmi Telegram Blue (`#229ED9`).
- Penetapan username bot rasmi: `@Ustaimantafsirbot`.
- Pembuangan simulator ujian interaktif atas permintaan pengguna.
