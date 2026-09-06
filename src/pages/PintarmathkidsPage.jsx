import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { 
  Gamepad2, 
  Check, 
  ShoppingBag, 
  Smartphone, 
  Tablet,
  Smile, 
  Sparkles, 
  ShieldCheck, 
  WifiOff, 
  Music, 
  Trophy, 
  Star, 
  Lock, 
  Printer, 
  HelpCircle, 
  ArrowLeft,
  ChevronDown,
  CheckCircle2,
  Zap,
  Award,
  CircleDollarSign,
  Image as ImageIcon,
  Mail,
  FileSpreadsheet,
  Bot,
  GraduationCap,
  Globe,
  Gift
} from 'lucide-react';
import './PintarmathkidsPage.css';

const API_BASE = (import.meta.env.VITE_API_BASE_URL || "https://payment-mathkids.pintartech.my").replace(/\/+$/, "");

export default function PintarmathkidsPage() {
  const [activeGameIndex, setActiveGameIndex] = useState(0);
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('fpx');
  const [parentName, setParentName] = useState('');
  const [parentEmail, setParentEmail] = useState('');
  const [parentPhone, setParentPhone] = useState('');
  const [isSubmittingPayment, setIsSubmittingPayment] = useState(false);
  const [paymentError, setPaymentError] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Certificate Modal State
  const [certModalOpen, setCertModalOpen] = useState(false);
  const [certName, setCertName] = useState('Adam Harith');
  const [certImgUrl, setCertImgUrl] = useState('/pintarmathkids-cert-sample.jpg');
  const [certImgError, setCertImgError] = useState(false);
  const [gameImgErrors, setGameImgErrors] = useState({});

  // App Logo placeholder state or image source
  const [appLogoUrl, setAppLogoUrl] = useState('/pintarmathkids-logo.png');
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    document.title = "PintarMathKids | Permainan Matematik Prasekolah & Tadika #1 Malaysia";
    window.scrollTo(0, 0);

    // Preload top 10 game mockup images in background for instant 0ms switching
    for (let i = 1; i <= 10; i++) {
      const img = new Image();
      img.src = `/mockups/game-${i}.jpg`;
    }

    // Check ToyyibPay Return Callback Payment Status
    const urlParams = new URLSearchParams(window.location.search);
    const statusId = urlParams.get('status_id') || urlParams.get('status');

    if (statusId === '1') {
      // Payment Successful on ToyyibPay!
      setCheckoutModalOpen(true);
      setPaymentSuccess(true);
      confetti({
        particleCount: 150,
        spread: 90,
        origin: { y: 0.6 }
      });
    } else if (statusId === '2' || statusId === '3' || statusId === '0') {
      // Payment Cancelled or Failed on ToyyibPay!
      setCheckoutModalOpen(true);
      setPaymentSuccess(false);
      setPaymentError('Pembayaran telah dibatalkan atau tidak berjaya di ToyyibPay. Sila cuba sekali lagi.');
    }

    // 30-Day Last-Click Affiliate Tracking
    try {
      const refCode = (urlParams.get('ref') || urlParams.get('aff') || '').trim().toUpperCase();
      if (refCode) {
        const attributionData = {
          ref: refCode,
          timestamp: Date.now(),
          expiresAt: Date.now() + 30 * 24 * 60 * 60 * 1000 // 30-day lifespan
        };
        localStorage.setItem('pmk_affiliate_attribution', JSON.stringify(attributionData));
        document.cookie = `pmk_aff_ref=${encodeURIComponent(refCode)}; max-age=${30 * 24 * 60 * 60}; path=/; SameSite=Lax`;

        // Send silent tracking ping
        fetch(`${API_BASE}/api/affiliates/track-click`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ref: refCode,
            landing_page: window.location.pathname,
            referer: document.referrer || ""
          }),
          keepalive: true
        }).catch(() => {});
      } else {
        // Validate existing attribution
        const stored = localStorage.getItem('pmk_affiliate_attribution');
        if (stored) {
          const parsed = JSON.parse(stored);
          if (Date.now() > parsed.expiresAt) {
            localStorage.removeItem('pmk_affiliate_attribution');
          }
        }
      }
    } catch (e) {
      console.debug("Affiliate tracking error:", e);
    }
  }, []);

  // 30 Games Comprehensive Data (6 Themed Worlds)
  const worldsData = [
    { id: 'all', name: 'Semua (30 Permainan)', icon: '⭐' },
    { id: 1, name: 'Dunia 1: Rimba Safari', icon: '🌿', range: '1-5' },
    { id: 2, name: 'Dunia 2: Istana Bentuk', icon: '🏰', range: '6-10' },
    { id: 3, name: 'Dunia 3: Lembah Manisan', icon: '🍭', range: '11-15' },
    { id: 4, name: 'Dunia 4: Angkasa Lepas', icon: '🚀', range: '16-20' },
    { id: 5, name: 'Dunia 5: Lautan Magis', icon: '🌊', range: '21-25' },
    { id: 6, name: 'Dunia 6: Makmal Sains & Logik', icon: '🧪', range: '26-30' },
  ];

  const [selectedWorldFilter, setSelectedWorldFilter] = useState('all');

  const gamesData = [
    // --- DUNIA 1: RIMBA SAFARI 🌿 (1 - 5) ---
    {
      id: 1,
      world: 1,
      worldName: "Dunia 1: Rimba Safari 🌿",
      name: "Safari Membilang",
      shortName: "1. Safari Membilang",
      numBadgeBg: "bg-amber-100 text-amber-700",
      topRightIcon: "🦁",
      desc: "Membilang objek interaktif seperti epal, singa, kereta, dan belon secara langkah demi langkah.",
      descFormatted: "Membilang objek interaktif seperti epal, singa, kereta, dan belon secara langkah demi langkah.",
      goal: "Penguasaan Nombor 1 - 10",
      ageFit: "4 - 6 Tahun",
      kspk: "Matematik Awal Prasekolah",
      ipadHtml: (
        <div className="text-center text-white">
          <div className="text-xs text-amber-200 font-bold mb-1">Membilang Haiwan Safari</div>
          <div className="bg-white/20 backdrop-blur-md p-2.5 rounded-2xl w-full max-w-[220px] mx-auto flex justify-center gap-2 text-2xl shadow-inner my-2">
            🦁 🦁 🦁 🦁
          </div>
          <div className="flex gap-2 justify-center">
            <span className="bg-white/20 px-3 py-1 rounded-lg text-xs font-bold">3</span>
            <span className="bg-amber-400 text-slate-900 px-3.5 py-1 rounded-lg text-xs font-extrabold shadow animate-bounce">4</span>
            <span className="bg-white/20 px-3 py-1 rounded-lg text-xs font-bold">6</span>
          </div>
        </div>
      )
    },
    {
      id: 2,
      world: 1,
      worldName: "Dunia 1: Rimba Safari 🌿",
      name: "Padan Bentuk & Saiz",
      shortName: "2. Padan Bentuk",
      numBadgeBg: "bg-teal-100 text-teal-700",
      topRightIcon: "📐",
      desc: "Mengenal bentuk geometri asas serta perbandingan saiz objek (Besar vs Kecil).",
      descFormatted: <span>Mengenal bentuk geometri asas serta perbandingan saiz objek (<strong>Besar vs Kecil</strong>).</span>,
      goal: "Pengamatan Geometri",
      ageFit: "4 - 6 Tahun",
      kspk: "Bentuk & Ruang",
      ipadHtml: (
        <div className="text-center text-white">
          <div className="text-xs text-amber-200 font-bold mb-1">Manakah Bentuk Segi Tiga?</div>
          <div className="bg-white/20 backdrop-blur-md p-2.5 rounded-2xl w-full max-w-[220px] mx-auto flex justify-center gap-3 text-3xl shadow-inner my-2">
            <span className="p-1 bg-white/20 rounded-xl">🔴</span>
            <span className="p-1 bg-amber-400 text-slate-900 rounded-xl shadow animate-pulse">🔺</span>
            <span className="p-1 bg-white/20 rounded-xl">🟦</span>
          </div>
        </div>
      )
    },
    {
      id: 3,
      world: 1,
      worldName: "Dunia 1: Rimba Safari 🌿",
      name: "Pesta Pola & Urutan",
      shortName: "3. Pola & Urutan",
      numBadgeBg: "bg-purple-100 text-purple-700",
      topRightIcon: "🧩",
      desc: "Melengkapkan susunan pola gambar berulang dan urutan nombor bersiri.",
      descFormatted: "Melengkapkan susunan pola gambar berulang dan urutan nombor bersiri.",
      goal: "Pemikiran Logik & Pola",
      ageFit: "5 - 7 Tahun",
      kspk: "Menaakul Pola Nombor",
      ipadHtml: (
        <div className="text-center text-white">
          <div className="text-xs text-amber-200 font-bold mb-1">Lengkapkan Pola Gambar</div>
          <div className="bg-white/20 backdrop-blur-md p-2 rounded-xl text-lg mb-2">🍎 🍌 🍎 🍌 [ ? ]</div>
          <button className="bg-amber-400 text-slate-900 font-extrabold px-3 py-1 rounded-lg text-xs shadow">Jawapan: 🍎</button>
        </div>
      )
    },
    {
      id: 4,
      world: 1,
      worldName: "Dunia 1: Rimba Safari 🌿",
      name: "Suaikannya!",
      shortName: "4. Suaikannya!",
      numBadgeBg: "bg-rose-100 text-rose-600",
      topRightIcon: "🎯",
      desc: "Menarik (drag and drop) kad nombor jawapan dari bawah ke sangkar sasaran di atas.",
      descFormatted: <span>Menarik (<strong>drag and drop</strong>) kad nombor jawapan dari bawah ke sangkar sasaran di atas.</span>,
      goal: "Koordinasi Tangan & Mata",
      ageFit: "4 - 6 Tahun",
      kspk: "Padanan Nombor",
      ipadHtml: (
        <div className="text-center text-white">
          <div className="text-xs text-amber-200 font-bold mb-1">Tarik Kad Jawapan</div>
          <div className="border-2 border-dashed border-white/80 bg-white/10 px-4 py-1.5 rounded-xl text-xs font-bold my-2">Sangkar Sasaran: 5</div>
          <div className="flex gap-2 justify-center text-xs">
            <span className="bg-white/30 px-2 py-1 rounded-lg">2</span>
            <span className="bg-amber-400 text-slate-900 px-3 py-1 rounded-lg font-bold animate-bounce shadow">5</span>
          </div>
        </div>
      )
    },
    {
      id: 5,
      world: 1,
      worldName: "Dunia 1: Rimba Safari 🌿",
      name: "Operasi Tambah",
      shortName: "5. Tambah Visual",
      numBadgeBg: "bg-blue-100 text-blue-600",
      topRightIcon: "➕",
      desc: "Visual penambahan dua kumpulan objek comel bagi julat jumlah 1 hingga 5.",
      descFormatted: "Visual penambahan dua kumpulan objek comel bagi julat jumlah 1 hingga 5.",
      goal: "Asas Penambahan KSPK",
      ageFit: "5 - 7 Tahun",
      kspk: "Operasi Tambah",
      ipadHtml: (
        <div className="text-center text-white">
          <div className="text-xs text-amber-200 font-bold mb-1">Kira Jumlah Semua</div>
          <div className="bg-white/20 p-2 rounded-xl text-lg my-2">🐱 🐱 + 🐱 = ❓</div>
          <span className="bg-amber-400 text-slate-900 px-3 py-1 rounded-xl text-xs font-extrabold shadow">Jawapan: 3 🐱</span>
        </div>
      )
    },

    // --- DUNIA 2: ISTANA BENTUK & BAYANG 🏰 (6 - 10) ---
    {
      id: 6,
      world: 2,
      worldName: "Dunia 2: Istana Bentuk & Bayang 🏰",
      name: "Sarang Drag & Drop",
      shortName: "6. Sarang Telur",
      numBadgeBg: "bg-emerald-100 text-emerald-600",
      topRightIcon: "🪺",
      desc: "Menarik kad jawapan ke sarang burung sasaran secara mesra skrin sentuh iPad dan telefon.",
      descFormatted: "Menarik kad jawapan ke sarang burung sasaran secara mesra skrin sentuh iPad dan telefon.",
      goal: "Kemahiran Motor Halus",
      ageFit: "4 - 6 Tahun",
      kspk: "Kuantiti & Sarang",
      ipadHtml: (
        <div className="text-center text-white">
          <div className="text-xs text-amber-200 font-bold mb-1">Isikan Sarang Burung</div>
          <div className="bg-white/20 p-2 rounded-xl text-2xl my-1.5">🪺 (Isi 3 Telur)</div>
          <div className="flex gap-1 justify-center text-xs">
            <span className="bg-amber-400 text-slate-900 px-2 py-0.5 rounded font-bold">🥚 🥚 🥚</span>
          </div>
        </div>
      )
    },
    {
      id: 7,
      world: 2,
      worldName: "Dunia 2: Istana Bentuk & Bayang 🏰",
      name: "Pencari Bayangan",
      shortName: "7. Bayangan Haiwan",
      numBadgeBg: "bg-amber-100 text-amber-800",
      topRightIcon: "🐘",
      desc: "Padanan diskriminasi visual gambar objek dengan bayangan hitam yang betul.",
      descFormatted: "Padanan diskriminasi visual gambar objek dengan bayangan hitam yang betul.",
      goal: "Diskriminasi Visual",
      ageFit: "4 - 6 Tahun",
      kspk: "Amatan Penglihatan",
      ipadHtml: (
        <div className="text-center text-white">
          <div className="text-xs text-amber-200 font-bold mb-1">Cari Bayangan Gajah</div>
          <div className="bg-white/20 p-2 rounded-xl flex justify-center gap-3 text-2xl my-1.5">
            <span>🐘</span> ➔ <span className="brightness-0 opacity-80">🐘</span>
          </div>
          <span className="bg-emerald-400 text-slate-900 px-2.5 py-1 rounded-lg text-xs font-extrabold">Padanan Tepat!</span>
        </div>
      )
    },
    {
      id: 8,
      world: 2,
      worldName: "Dunia 2: Istana Bentuk & Bayang 🏰",
      name: "Operasi Tolak Pop!",
      shortName: "8. Operasi Tolak",
      numBadgeBg: "bg-red-100 text-red-600",
      topRightIcon: "💥",
      desc: "Meletupkan belon (balloon pop) untuk memahami konsep penolakan secara visual.",
      descFormatted: <span>Meletupkan belon (<strong>balloon pop</strong>) untuk memahami konsep penolakan secara visual.</span>,
      goal: "Asas Penolakan Visual",
      ageFit: "5 - 7 Tahun",
      kspk: "Operasi Tolak",
      ipadHtml: (
        <div className="text-center text-white">
          <div className="text-xs text-amber-200 font-bold mb-1">5 − 2 = ? (Letup Belon)</div>
          <div className="bg-white/20 p-2 rounded-xl text-lg my-1.5">🎈 🎈 🎈 <span className="opacity-30">💥 💥</span></div>
          <span className="bg-amber-400 text-slate-900 font-extrabold px-3 py-1 rounded-lg text-xs">Baki: 3 🎈</span>
        </div>
      )
    },
    {
      id: 9,
      world: 2,
      worldName: "Dunia 2: Istana Bentuk & Bayang 🏰",
      name: "Gula-Gula Drag & Drop",
      shortName: "9. Banding Kuantiti",
      numBadgeBg: "bg-yellow-100 text-yellow-800",
      topRightIcon: "🍬",
      desc: "Perbandingan kuantiti menggunakan simbol matematik ('>', '<', '=').",
      descFormatted: <span>Perbandingan kuantiti menggunakan simbol matematik (<strong>'&gt;'</strong>, <strong>'&lt;'</strong>, <strong>'='</strong>).</span>,
      goal: "Simbol Matematik Awal",
      ageFit: "5 - 7 Tahun",
      kspk: "Nisbah & Kuantiti",
      ipadHtml: (
        <div className="text-center text-white">
          <div className="text-xs text-amber-200 font-bold mb-1">Bandingkan Kuantiti Gula-Gula</div>
          <div className="bg-white/20 p-2 rounded-xl text-base font-bold my-1.5">🍬🍬🍬 [ &gt; ] 🍬</div>
          <span className="bg-amber-400 text-slate-900 font-extrabold px-3 py-1 rounded-lg text-xs">Simbol: &gt; (Lebih)</span>
        </div>
      )
    },
    {
      id: 10,
      world: 2,
      worldName: "Dunia 2: Istana Bentuk & Bayang 🏰",
      name: "Roda Bertuah",
      shortName: "10. Roda Bertuah",
      numBadgeBg: "bg-indigo-100 text-indigo-700",
      topRightIcon: "🎡",
      desc: "Roda putar dengan ganjaran syiling berganda dan cabaran soalan matematik.",
      descFormatted: "Roda putar dengan ganjaran syiling berganda dan cabaran soalan matematik.",
      goal: "Motivasi & Ganjaran",
      ageFit: "4 - 7 Tahun",
      kspk: "Pengukuhan Positif",
      ipadHtml: (
        <div className="text-center text-white">
          <div className="text-xs text-amber-200 font-bold mb-1">Putar & Menang!</div>
          <div className="w-10 h-10 rounded-full border-2 border-yellow-300 bg-purple-500 mx-auto flex items-center justify-center text-lg my-1 animate-spin">🎡</div>
          <span className="bg-amber-400 text-slate-900 font-extrabold px-2.5 py-0.5 rounded-lg text-[10px]">+50 Syiling! 💰</span>
        </div>
      )
    },

    // --- DUNIA 3: LEMBAH MANISAN & MASA 🍭 (11 - 15) ---
    {
      id: 11,
      world: 3,
      worldName: "Dunia 3: Lembah Manisan & Masa 🍭",
      name: "Cukupkan Kawan!",
      shortName: "11. Cukupkan Kawan",
      numBadgeBg: "bg-cyan-100 text-cyan-700",
      topRightIcon: "🐧",
      desc: "Menarik kumpulan gambar haiwan (number bonds) untuk mencukupkan kuantiti sasaran 10.",
      descFormatted: <span>Menarik kumpulan gambar haiwan (<strong>number bonds</strong>) untuk mencukupkan kuantiti sasaran 10.</span>,
      goal: "Pecahan Nombor 10",
      ageFit: "5 - 7 Tahun",
      kspk: "Kombinasi Nombor",
      ipadHtml: (
        <div className="text-center text-white">
          <div className="text-xs text-amber-200 font-bold mb-1">Kawan 10 (Number Bonds)</div>
          <div className="bg-white/20 p-2 rounded-xl text-sm font-bold my-1.5">7 + [ 3 ] = 10</div>
          <span className="bg-amber-400 text-slate-900 font-extrabold px-3 py-1 rounded-lg text-xs">Lengkap 10!</span>
        </div>
      )
    },
    {
      id: 12,
      world: 3,
      worldName: "Dunia 3: Lembah Manisan & Masa 🍭",
      name: "Kawan Jam Comel!",
      shortName: "12. Kawan Jam",
      numBadgeBg: "bg-sky-100 text-sky-700",
      topRightIcon: "⏰",
      desc: "Menggerakkan jarum jam analog mengikut paparan jam digital LED (⏰ 04:00).",
      descFormatted: <span>Menggerakkan jarum jam analog mengikut paparan jam digital LED (<strong>⏰ 04:00</strong>).</span>,
      goal: "Membaca Jam & Masa",
      ageFit: "5 - 7 Tahun",
      kspk: "Masa & Waktu",
      ipadHtml: (
        <div className="text-center text-white">
          <div className="bg-slate-900 text-emerald-400 font-mono text-xs px-2 py-0.5 rounded mb-1 inline-block">⏰ 04:00</div>
          <div className="w-12 h-12 rounded-full border-2 border-white bg-amber-100 mx-auto flex items-center justify-center relative my-1">
            <div className="w-0.5 h-4 bg-slate-900 absolute top-1 rounded"></div>
            <div className="w-3 h-0.5 bg-amber-600 absolute right-1 rounded"></div>
          </div>
        </div>
      )
    },
    {
      id: 13,
      world: 3,
      worldName: "Dunia 3: Lembah Manisan & Masa 🍭",
      name: "Teka Gambar Bentuk!",
      shortName: "13. Teka Bentuk",
      numBadgeBg: "bg-violet-100 text-violet-700",
      topRightIcon: "🔺",
      desc: "Meneka bentuk asas objek sebenar (Donut 🍩 ➔ Bulatan 🔴, Piza 🍕 ➔ Segi Tiga 🔺).",
      descFormatted: <span>Meneka bentuk asas objek sebenar (Donut 🍩 ➔ Bulatan 🔴, Piza 🍕 ➔ Segi Tiga 🔺).</span>,
      goal: "Aplikasi Geometri Sebenar",
      ageFit: "4 - 6 Tahun",
      kspk: "Bentuk Alam Sekitar",
      ipadHtml: (
        <div className="text-center text-white">
          <div className="text-xs text-amber-200 font-bold mb-1">Donut Ini Bentuk Apa?</div>
          <div className="bg-white/20 p-1.5 rounded-xl text-2xl my-1">🍩</div>
          <span className="bg-amber-400 text-slate-900 font-extrabold px-3 py-1 rounded-lg text-xs">🔴 Bulatan</span>
        </div>
      )
    },
    {
      id: 14,
      world: 3,
      worldName: "Dunia 3: Lembah Manisan & Masa 🍭",
      name: "Kedai Runcit Pintar",
      shortName: "14. Kedai Runcit",
      numBadgeBg: "bg-green-100 text-green-700",
      topRightIcon: "🏪",
      desc: "Pengenalan mata wang Malaysia (10 sen, 20 sen, 50 sen, RM1) dan pembelian barangan runcit dengan wang tepat.",
      descFormatted: <span>Pengenalan wang Malaysia (<strong>10 sen, 20 sen, 50 sen, RM1</strong>) & pembelian barang.</span>,
      goal: "Pengurusan Wang Asas",
      ageFit: "5 - 7 Tahun",
      kspk: "Mata Wang & Wang Saku",
      ipadHtml: (
        <div className="text-center text-white">
          <div className="text-xs text-amber-200 font-bold mb-1">Beli Susu Kotak 🥛 (RM 1.00)</div>
          <div className="bg-white/20 p-2 rounded-xl text-base font-bold my-1.5 flex justify-center gap-2">
            <span className="bg-emerald-500 px-2 py-1 rounded-lg text-xs">💵 RM1.00</span>
            <span className="bg-amber-400 text-slate-900 px-2 py-1 rounded-lg text-xs font-black">Bayar Tepat!</span>
          </div>
        </div>
      )
    },
    {
      id: 15,
      world: 3,
      worldName: "Dunia 3: Lembah Manisan & Masa 🍭",
      name: "Timbang Comel",
      shortName: "15. Timbang Comel",
      numBadgeBg: "bg-orange-100 text-orange-700",
      topRightIcon: "⚖️",
      desc: "Konsep jisim dan berat (Berat vs Ringan) menggunakan neraca imbangan dan jongkang-jongkit fizik comel.",
      descFormatted: <span>Konsep jisim & berat (<strong>Berat vs Ringan</strong>) menggunakan neraca imbangan comel.</span>,
      goal: "Konsep Jisim & Berat",
      ageFit: "4 - 6 Tahun",
      kspk: "Ukuran & Jisim",
      ipadHtml: (
        <div className="text-center text-white">
          <div className="text-xs text-amber-200 font-bold mb-1">Manakah Yang Lebih Berat?</div>
          <div className="bg-white/20 p-2 rounded-xl text-lg font-bold my-1.5">
            🐘 (Berat) ⚖️ 🪶 (Ringan)
          </div>
          <span className="bg-amber-400 text-slate-900 font-extrabold px-3 py-1 rounded-lg text-xs">Gajah Lebih Berat!</span>
        </div>
      )
    },

    // --- DUNIA 4: ANGKASA LEPAS & KIRAAN PANTAS 🚀 (16 - 20) ---
    {
      id: 16,
      world: 4,
      worldName: "Dunia 4: Angkasa Lepas & Kiraan Pantas 🚀",
      name: "Tangga Roket Nombor",
      shortName: "16. Tangga Roket",
      numBadgeBg: "bg-purple-100 text-purple-800",
      topRightIcon: "🚀",
      desc: "Susunan nombor menaik dan turutan undur (countdown) untuk pelancaran roket ke angkasa.",
      descFormatted: <span>Susunan nombor menaik & turutan undur (<strong>countdown</strong>) pelancaran roket.</span>,
      goal: "Susunan Nombor Menaik & Menurun",
      ageFit: "4 - 7 Tahun",
      kspk: "Tertib Nombor",
      ipadHtml: (
        <div className="text-center text-white">
          <div className="text-xs text-amber-200 font-bold mb-1">Undur Pelancaran Roket!</div>
          <div className="bg-white/20 p-2 rounded-xl text-base font-mono my-1.5">5 ➔ 4 ➔ 3 ➔ 2 ➔ 1 ➔ 🚀 BLAST OFF!</div>
          <span className="bg-purple-400 text-slate-950 font-black px-3 py-1 rounded-lg text-xs">Pelancaran Berjaya!</span>
        </div>
      )
    },
    {
      id: 17,
      world: 4,
      worldName: "Dunia 4: Angkasa Lepas & Kiraan Pantas 🚀",
      name: "Piza & Kek Pecahan",
      shortName: "17. Kek Pecahan",
      numBadgeBg: "bg-rose-100 text-rose-700",
      topRightIcon: "🍕",
      desc: "Pengenalan konsep pecahan asas (1 Penuh, 1/2 Separuh, 1/4 Suku) melalui potongan makanan lazat.",
      descFormatted: <span>Pengenalan konsep pecahan asas (<strong>1 Penuh, 1/2 Separuh, 1/4 Suku</strong>).</span>,
      goal: "Asas Pecahan Awal",
      ageFit: "5 - 7 Tahun",
      kspk: "Pecahan Mudah",
      ipadHtml: (
        <div className="text-center text-white">
          <div className="text-xs text-amber-200 font-bold mb-1">Pilih Potongan 1/2 Separuh</div>
          <div className="bg-white/20 p-2 rounded-xl text-xl my-1.5 flex justify-center gap-3">
            <span>🍕 (1/2)</span> <span>🍰 (1/4)</span>
          </div>
          <span className="bg-rose-400 text-slate-950 font-black px-3 py-1 rounded-lg text-xs">Pecahan 1/2 Tepat!</span>
        </div>
      )
    },
    {
      id: 18,
      world: 4,
      worldName: "Dunia 4: Angkasa Lepas & Kiraan Pantas 🚀",
      name: "Kembara Posisi & Ruang",
      shortName: "18. Posisi & Ruang",
      numBadgeBg: "bg-blue-100 text-blue-800",
      topRightIcon: "🧭",
      desc: "Mengenal kedudukan relatif (Di Dalam, Di Luar, Di Atas, Di Bawah, Di Hadapan, Di Belakang, Di Sebelah).",
      descFormatted: <span>Kedudukan relatif (<strong>Di Atas, Di Bawah, Di Dalam, Di Luar</strong>).</span>,
      goal: "Orientasi Spasial & Ruang",
      ageFit: "4 - 6 Tahun",
      kspk: "Kedudukan & Ruang",
      ipadHtml: (
        <div className="text-center text-white">
          <div className="text-xs text-amber-200 font-bold mb-1">Di Manakah Kucing Berada?</div>
          <div className="bg-white/20 p-2 rounded-xl text-lg my-1.5">🐱 📦 (Di Atas Kotak)</div>
          <span className="bg-blue-400 text-slate-950 font-black px-3 py-1 rounded-lg text-xs">Kedudukan: Di Atas</span>
        </div>
      )
    },
    {
      id: 19,
      world: 4,
      worldName: "Dunia 4: Angkasa Lepas & Kiraan Pantas 🚀",
      name: "Golek Dadu Ajaib",
      shortName: "19. Dadu Ajaib",
      numBadgeBg: "bg-amber-100 text-amber-900",
      topRightIcon: "🎲",
      desc: "Pengecaman pantas titik dadu (subitizing) dan padanan kuantiti secara visual tanpa perlu mengira satu demi satu.",
      descFormatted: <span>Pengecaman pantas corak titik dadu (<strong>subitizing</strong>) tanpa mengira satu-satu.</span>,
      goal: "Subitizing & Pengecaman Pantas",
      ageFit: "4 - 6 Tahun",
      kspk: "Pengecaman Corak Titik",
      ipadHtml: (
        <div className="text-center text-white">
          <div className="text-xs text-amber-200 font-bold mb-1">Pengecaman Pantas Titik Dadu</div>
          <div className="bg-white/20 p-2 rounded-xl text-3xl my-1.5">⚄ = 5</div>
          <span className="bg-amber-400 text-slate-950 font-black px-3 py-1 rounded-lg text-xs">Subitizing 5!</span>
        </div>
      )
    },
    {
      id: 20,
      world: 4,
      worldName: "Dunia 4: Angkasa Lepas & Kiraan Pantas 🚀",
      name: "Ukur Menara Ketinggian",
      shortName: "20. Ukur Menara",
      numBadgeBg: "bg-lime-100 text-lime-800",
      topRightIcon: "🦒",
      desc: "Membandingkan ketinggian menara blok dan haiwan (Tinggi vs Rendah, Panjang vs Pendek) menggunakan unit piawai.",
      descFormatted: <span>Membandingkan ketinggian menara (<strong>Tinggi vs Rendah, Panjang vs Pendek</strong>).</span>,
      goal: "Perbandingan Ketinggian & Panjang",
      ageFit: "4 - 7 Tahun",
      kspk: "Ukuran Panjang & Tinggi",
      ipadHtml: (
        <div className="text-center text-white">
          <div className="text-xs text-amber-200 font-bold mb-1">Bandingkan Ketinggian</div>
          <div className="bg-white/20 p-2 rounded-xl text-base my-1.5 flex justify-center gap-4">
            <span>🦒 6 Blok (Tinggi)</span>
            <span>🐈 2 Blok (Rendah)</span>
          </div>
          <span className="bg-lime-400 text-slate-950 font-black px-3 py-1 rounded-lg text-xs">Zirafah Lebih Tinggi!</span>
        </div>
      )
    },

    // --- DUNIA 5: LAUTAN MAGIS & STATISTIK 🌊 (21 - 25) ---
    {
      id: 21,
      world: 5,
      worldName: "Dunia 5: Lautan Magis & Statistik 🌊",
      name: "Graf Akuarium Ikan",
      shortName: "21. Graf Akuarium",
      numBadgeBg: "bg-teal-100 text-teal-800",
      topRightIcon: "🐠",
      desc: "Mengumpul data hidupan laut (ikan badut, tapak sulaiman, obor-obor) dan memplot piktograf / graf palang warna-warni.",
      descFormatted: <span>Mengumpul data hidupan laut & memplot <strong>piktograf / carta graf palang</strong>.</span>,
      goal: "Pengendalian Data & Piktograf",
      ageFit: "5 - 7 Tahun",
      kspk: "Pengurusan Data Asas",
      ipadHtml: (
        <div className="text-center text-white">
          <div className="text-xs text-amber-200 font-bold mb-1">Carta Hidupan Laut</div>
          <div className="bg-white/20 p-2 rounded-xl text-xs my-1.5 space-y-1">
            <div>🐠 🐠 🐠 (3 Ikan)</div>
            <div>⭐ ⭐ (2 Tapak Sulaiman)</div>
          </div>
          <span className="bg-teal-400 text-slate-950 font-black px-3 py-1 rounded-lg text-xs">Graf Selesai!</span>
        </div>
      )
    },
    {
      id: 22,
      world: 5,
      worldName: "Dunia 5: Lautan Magis & Statistik 🌊",
      name: "Nombor Ganjil & Genap",
      shortName: "22. Ganjil & Genap",
      numBadgeBg: "bg-pink-100 text-pink-700",
      topRightIcon: "🎈",
      desc: "Mengasingkan belon nombor ke dalam bakul Ganjil dan Genap melalui visual berpasangan (pairs).",
      descFormatted: <span>Mengasingkan belon ke bakul (<strong>Nombor Ganjil vs Nombor Genap</strong>).</span>,
      goal: "Pengecaman Ganjil & Genap",
      ageFit: "5 - 7 Tahun",
      kspk: "Ciri Nombor",
      ipadHtml: (
        <div className="text-center text-white">
          <div className="text-xs text-amber-200 font-bold mb-1">Asingkan Nombor 4</div>
          <div className="bg-white/20 p-2 rounded-xl text-base my-1.5 font-bold">
            🎈 4 ➔ [ Bakul Genap ✨ ]
          </div>
          <span className="bg-pink-400 text-slate-950 font-black px-3 py-1 rounded-lg text-xs">Genap (Ada Pasangan)</span>
        </div>
      )
    },
    {
      id: 23,
      world: 5,
      worldName: "Dunia 5: Lautan Magis & Statistik 🌊",
      name: "Rumah Puluh & Sa",
      shortName: "23. Puluh & Sa",
      numBadgeBg: "bg-indigo-100 text-indigo-800",
      topRightIcon: "🏠",
      desc: "Membina nilai tempat nombor dua digit (11 hingga 50) menggunakan blok kayu Rumah Puluh dan Rumah Sa.",
      descFormatted: <span>Membina nilai tempat 2 digit (<strong>Rumah Puluh & Rumah Sa</strong>).</span>,
      goal: "Nilai Tempat Puluh & Sa",
      ageFit: "6 - 7 Tahun",
      kspk: "Nilai Tempat Nombor",
      ipadHtml: (
        <div className="text-center text-white">
          <div className="text-xs text-amber-200 font-bold mb-1">Bina Nombor 24</div>
          <div className="bg-white/20 p-2 rounded-xl text-xs font-bold my-1.5 flex justify-center gap-3">
            <span className="bg-indigo-600 px-2 py-1 rounded">2 Puluh (20)</span>
            <span className="bg-amber-500 px-2 py-1 rounded">4 Sa (4)</span>
          </div>
          <span className="bg-indigo-300 text-slate-950 font-black px-3 py-1 rounded-lg text-xs">= 24</span>
        </div>
      )
    },
    {
      id: 24,
      world: 5,
      worldName: "Dunia 5: Lautan Magis & Statistik 🌊",
      name: "Katak Garis Nombor",
      shortName: "24. Garis Nombor",
      numBadgeBg: "bg-emerald-100 text-emerald-800",
      topRightIcon: "🐸",
      desc: "Membantu katak comel melompat di atas garis nombor interaktif bagi operasi tambah dan tolak langkah demi langkah.",
      descFormatted: <span>Katak melompat di atas <strong>garis nombor interaktif</strong> (3 + 2 = 5).</span>,
      goal: "Garis Nombor & Lompatan",
      ageFit: "5 - 7 Tahun",
      kspk: "Strategi Garis Nombor",
      ipadHtml: (
        <div className="text-center text-white">
          <div className="text-xs text-amber-200 font-bold mb-1">Lompat 3 + 2 Langkah</div>
          <div className="bg-white/20 p-2 rounded-xl text-xs font-mono my-1.5">
            0 ➔ 1 ➔ 2 ➔ [3] 🦘+2 ➔ [5 🐸]
          </div>
          <span className="bg-emerald-400 text-slate-950 font-black px-3 py-1 rounded-lg text-xs">Mendarat di 5!</span>
        </div>
      )
    },
    {
      id: 25,
      world: 5,
      worldName: "Dunia 5: Lautan Magis & Statistik 🌊",
      name: "Kalendar Hari & Waktu",
      shortName: "25. Kalendar Hari",
      numBadgeBg: "bg-sky-100 text-sky-800",
      topRightIcon: "📅",
      desc: "Mengenal 7 hari dalam seminggu, bulan dalam setahun, serta waktu harian (Pagi, Tengah Hari, Petang, Malam).",
      descFormatted: <span>Mengenal <strong>7 hari seminggu, bulan & waktu harian</strong> (Pagi, Malam).</span>,
      goal: "Kalendar & Konsep Waktu Harian",
      ageFit: "4 - 7 Tahun",
      kspk: "Waktu & Kalendar",
      ipadHtml: (
        <div className="text-center text-white">
          <div className="text-xs text-amber-200 font-bold mb-1">Urutan Hari Dalam Seminggu</div>
          <div className="bg-white/20 p-2 rounded-xl text-xs font-bold my-1.5">
            Isnin ➔ Selasa ➔ [ Rabu 🌟 ] ➔ Khamis
          </div>
          <span className="bg-sky-400 text-slate-950 font-black px-3 py-1 rounded-lg text-xs">Hari: Rabu!</span>
        </div>
      )
    },

    // --- DUNIA 6: MAKMAL SAINS & LOGIK MAGIS 🧪 (26 - 30) ---
    {
      id: 26,
      world: 6,
      worldName: "Dunia 6: Makmal Sains & Logik 🧪",
      name: "Makmal Isipadu & Kapasiti",
      shortName: "26. Makmal Isipadu",
      numBadgeBg: "bg-cyan-100 text-cyan-800",
      topRightIcon: "🧪",
      desc: "Mengenal isipadu cecair dalam bikar makmal (Penuh, Separuh, Kosong) dan perbandingan cecair Paling Banyak vs Paling Sedikit.",
      descFormatted: <span>Mengenal konsep isipadu cecair bikar (<strong>Penuh, Separuh, Kosong</strong>).</span>,
      goal: "Konsep Isipadu Cecair",
      ageFit: "4 - 7 Tahun",
      kspk: "Isipadu & Kapasiti",
      ipadHtml: (
        <div className="text-center text-white">
          <div className="text-xs text-cyan-200 font-bold mb-1">Bikar Cecair Magis</div>
          <div className="bg-white/20 p-2 rounded-xl text-lg my-1.5 flex justify-center gap-3">
            <span>🧪 (Penuh)</span>
            <span>🫗 (Separuh)</span>
            <span>🫧 (Kosong)</span>
          </div>
          <span className="bg-cyan-400 text-slate-950 font-black px-3 py-1 rounded-lg text-xs">Kapasiti Penuh!</span>
        </div>
      )
    },
    {
      id: 27,
      world: 6,
      worldName: "Dunia 6: Makmal Sains & Logik 🧪",
      name: "Tangram Bentuk Ajaib",
      shortName: "27. Tangram Ajaib",
      numBadgeBg: "bg-fuchsia-100 text-fuchsia-800",
      topRightIcon: "🧩",
      desc: "Menyusun blok bentuk geometri asas untuk melengkapkan siluet kapal layar, rumah, roket, pokok dan kucing comel.",
      descFormatted: <span>Menyusun blok bentuk geometri melengkapkan siluet (<strong>Kapal ⛵, Rumah 🏠, Roket 🚀</strong>).</span>,
      goal: "Visual-Spasial & Tangram",
      ageFit: "4 - 7 Tahun",
      kspk: "Manipulasi Bentuk Geometri",
      ipadHtml: (
        <div className="text-center text-white">
          <div className="text-xs text-fuchsia-200 font-bold mb-1">Bina Kapal Layar Tangram</div>
          <div className="bg-white/20 p-2 rounded-xl text-2xl my-1.5">⛵ (🔺 + 🔺 + 🟨)</div>
          <span className="bg-fuchsia-400 text-slate-950 font-black px-3 py-1 rounded-lg text-xs">Bentuk Dicantum Tepat!</span>
        </div>
      )
    },
    {
      id: 28,
      world: 6,
      worldName: "Dunia 6: Makmal Sains & Logik 🧪",
      name: "Kereta Api Bilang Lompat",
      shortName: "28. Bilang Lompat",
      numBadgeBg: "bg-amber-100 text-amber-800",
      topRightIcon: "🚂",
      desc: "Melengkapkan gerabak kereta api wap beranimasi dengan susunan bilang lompat 2-2, 5-5, dan 10-10 sebagai asas darab awal.",
      descFormatted: <span>Melengkapkan gerabak kereta api wap (<strong>Bilang Lompat 2-2, 5-5, 10-10</strong>).</span>,
      goal: "Bilang Lompat (Skip Counting)",
      ageFit: "5 - 7 Tahun",
      kspk: "Pola Siri & Asas Darab",
      ipadHtml: (
        <div className="text-center text-white">
          <div className="text-xs text-amber-200 font-bold mb-1">Kereta Api Bilang 5-5</div>
          <div className="bg-white/20 p-2 rounded-xl text-xs font-mono my-1.5">
            🚂 ➔ [5] ➔ [10] ➔ [ 15 📦 ] ➔ [20]
          </div>
          <span className="bg-amber-400 text-slate-950 font-black px-3 py-1 rounded-lg text-xs">Gerabak Lengkap 15!</span>
        </div>
      )
    },
    {
      id: 29,
      world: 6,
      worldName: "Dunia 6: Makmal Sains & Logik 🧪",
      name: "Bahagi Sama Rata",
      shortName: "29. Bahagi Sama",
      numBadgeBg: "bg-rose-100 text-rose-800",
      topRightIcon: "🧁",
      desc: "Membahagikan biskut, kek cawan, dan buah strawberi sama banyak ke pinggan kawan haiwan sebagai asas bahagi awal.",
      descFormatted: <span>Membahagi biskut & kek (<strong>Fair Share / Perkongsian Sama Rata</strong>).</span>,
      goal: "Perkongsian Sama Rata (Fair Share)",
      ageFit: "5 - 7 Tahun",
      kspk: "Pembahagian Sama Banyak",
      ipadHtml: (
        <div className="text-center text-white">
          <div className="text-xs text-rose-200 font-bold mb-1">Bahagi 6 Biskut Kepada 2 Kawan</div>
          <div className="bg-white/20 p-2 rounded-xl text-xs font-bold my-1.5 flex justify-center gap-3">
            <span>🍽️ 🍪🍪🍪 (3)</span>
            <span>🍽️ 🍪🍪🍪 (3)</span>
          </div>
          <span className="bg-rose-400 text-slate-950 font-black px-3 py-1 rounded-lg text-xs">Sama Rata (3 Setiap Kawan)!</span>
        </div>
      )
    },
    {
      id: 30,
      world: 6,
      worldName: "Dunia 6: Makmal Sains & Logik 🧪",
      name: "Grid Logik & Kembara Kod",
      shortName: "30. Kembara Kod",
      numBadgeBg: "bg-violet-100 text-violet-800",
      topRightIcon: "🤖",
      desc: "Menyusun blok anak panah arah (⬆️, ⬇️, ⬅️, ➡️) untuk memandu maskot merentasi grid koordinat ke sasaran bintang.",
      descFormatted: <span>Asas pemikiran komputasi & kod arah (<strong>⬆️ Atas, ➡️ Kanan, ⬇️ Bawah</strong>).</span>,
      goal: "Pemikiran Komputasi & Arah",
      ageFit: "5 - 7 Tahun",
      kspk: "Logik Algoritma & Arah",
      ipadHtml: (
        <div className="text-center text-white">
          <div className="text-xs text-violet-200 font-bold mb-1">Pandu Robot Ke Bintang ⭐</div>
          <div className="bg-white/20 p-2 rounded-xl text-xs font-bold my-1.5 flex justify-center gap-1.5">
            <span className="bg-violet-500 px-2 py-0.5 rounded">➡️ Kanan</span>
            <span className="bg-violet-500 px-2 py-0.5 rounded">➡️ Kanan</span>
            <span className="bg-emerald-500 px-2 py-0.5 rounded">⬆️ Atas</span>
          </div>
          <span className="bg-violet-400 text-slate-950 font-black px-3 py-1 rounded-lg text-xs">Robot Sampai Sasaran! 🤖⭐</span>
        </div>
      )
    }
  ];

  const handlePaymentSubmit = async (e) => {
    e.preventDefault();
    if (!parentEmail || !parentName || !parentPhone) {
      setPaymentError('Sila lengkapkan kesemua maklumat nama, e-mel, dan nombor telefon.');
      return;
    }

    setIsSubmittingPayment(true);
    setPaymentError('');

    try {
      // Retrieve stored affiliate referral code (30-day Last-Click attribution)
      let refCode = null;
      try {
        const stored = localStorage.getItem('pmk_affiliate_attribution');
        if (stored) {
          const parsed = JSON.parse(stored);
          if (parsed && parsed.ref && Date.now() <= parsed.expiresAt) {
            refCode = parsed.ref;
          }
        }
        if (!refCode) {
          const match = document.cookie.match(/(?:^|;\s*)pmk_aff_ref=([^;]+)/);
          if (match && match[1]) refCode = decodeURIComponent(match[1]);
        }
      } catch (e) {}

      const response = await fetch(
        `${API_BASE}/api/create-bill`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify({
            name: parentName,
            email: parentEmail,
            phone: parentPhone,
            referral_code: refCode || undefined
          })
        }
      );

      const data = await response.json();
      console.log("ToyyibPay Worker Response:", data);

      if (!response.ok || !data.paymentUrl) {
        throw new Error(data.error || data.message || "Bill gagal dicipta di ToyyibPay.");
      }

      // Direct redirection to ToyyibPay FPX
      window.location.href = data.paymentUrl;

    } catch (err) {
      console.error("Payment API Error:", err);
      setPaymentError(err.message || "Gagal menghubung ke gerbang pembayaran ToyyibPay. Sila cuba lagi.");
      setIsSubmittingPayment(false);
    }
  };

  // 10 Selected Games for iPad Mockup Showcase (Game 1 - 10)
  const mockupGames = gamesData.slice(0, 10);
  const selectedMockupGame = mockupGames[activeGameIndex >= 10 ? 0 : activeGameIndex] || mockupGames[0];
  const selectedGame = selectedMockupGame;

  // 20 Bonus Games Data (Worlds 7, 8, 9 & 10 from PintarMathKids Changelog)
  const bonusCategories = [
    {
      id: "W7",
      title: "Dunia 7: Bandar Detektif & Misteri Masa",
      icon: "🕵️‍♂️",
      desc: "Misteri waktu, simetri cermin, penemuan dino & rantai domino",
      badge: "5 Mod Detektif (Game 31-35)",
      headerBg: "bg-gradient-to-r from-blue-500/20 to-indigo-500/10 border-blue-500/30 text-blue-300",
      accentPill: "bg-blue-400 text-slate-950",
      games: [
        { id: "31", name: "Cermin Ajaib & Simetri Comel", icon: "🪞", desc: "Visual pantulan simetri rama-rama, topeng & corak geometri.", skill: "Garis Simetri & Pantulan" },
        { id: "32", name: "Pengukur Jejak Kaki Dino", icon: "🐾", desc: "Ukur panjang artifak guna tapak kaki dino, daun & kayu.", skill: "Ukuran Bukan Piawai" },
        { id: "33", name: "Detektif Kotak Matriks", icon: "🔍", desc: "Penalaran matriks ruang 2 atribut lajur × baris (bentuk, warna & aksesori).", skill: "Matriks & Grid Ruang" },
        { id: "34", name: "Cerita Urutan Masa Bergambar", icon: "🕰️", desc: "Susun urutan kronologi logik 1-2-3-4 kitaran naratif & rutin harian.", skill: "Urutan Masa Kronologi" },
        { id: "35", name: "Kereta Api Rantai Domino", icon: "🚂", desc: "Subitizing corak bintik nombor & sambungan rantai gerabak landasan.", skill: "Subitizing & Rantai Nombor" },
      ]
    },
    {
      id: "W8",
      title: "Dunia 8: Kerajaan Ajaib & Khazanah Emas",
      icon: "👑",
      desc: "Simbol perbandingan, peta koordinat, gear mesin & syiling Malaysia",
      badge: "5 Mod Khazanah (Game 36-40)",
      headerBg: "bg-gradient-to-r from-amber-500/20 to-yellow-500/10 border-amber-500/30 text-amber-300",
      accentPill: "bg-amber-400 text-slate-950",
      games: [
        { id: "36", name: "Mulut Buaya Lapar", icon: "🐊", desc: "Simbol perbandingan matematik (> , < , =) bersama buaya comel.", skill: "Simbol Perbandingan (> , < , =)" },
        { id: "37", name: "Peta Grid Harta Karun", icon: "🗺️", desc: "Navigasi koordinat ruang grid 3x3 (Lajur A-C × Baris 1-3) cari peti emas.", skill: "Koordinat Ruang Awal" },
        { id: "38", name: "Mesin Nombor Ajaib", icon: "⚙️", desc: "Fungsi input-output formula (+1, +2, -1, -2) dengan cogs berputar.", skill: "Penaakulan Input-Output" },
        { id: "39", name: "Tabung Syiling Cilik", icon: "🪙", desc: "Mengenal pasti nilai & kiraan wang syiling sen Malaysia (5s, 10s, 20s, 50s).", skill: "Pengenalan Wang Syiling" },
        { id: "40", name: "Arkitek Bongkah 3D", icon: "🏰", desc: "Geometri bongkah 3D (Kubus, Sfera, Silinder, Kon) dalam objek sebenar.", skill: "Geometri Bongkah 3D" },
      ]
    },
    {
      id: "W9",
      title: "Dunia 9: Taman Ria Sains & Logik Pintar",
      icon: "🎪",
      desc: "Ikatan nombor, neraca jisim, sempoa klasik & himpunan rajah Venn",
      badge: "5 Mod Sains & Logik (Game 41-45)",
      headerBg: "bg-gradient-to-r from-purple-500/20 to-pink-500/10 border-purple-500/30 text-purple-300",
      accentPill: "bg-purple-400 text-slate-950",
      games: [
        { id: "41", name: "Rumah Ikatan Nombor", icon: "🏡", desc: "Konsep cerakinan nombor keseluruhan & bilik (Part-Part-Whole 1-10).", skill: "Ikatan Nombor (Part-Part-Whole)" },
        { id: "42", name: "Jongkang-Jongkit Berat Ringan", icon: "⚖️", desc: "Intuisi jisim & berat relatif objek di taman permainan riang.", skill: "Konsep Jisim & Berat Relatif" },
        { id: "43", name: "Manik Sempoa Cilik", icon: "🧮", desc: "Sempoa manik sentuh klasik (1-10) untuk kemahiran subitizing pantas.", skill: "Kemahiran Sempoa & Subitizing" },
        { id: "44", name: "Detektif Suhu Panas & Sejuk", icon: "🌡️", desc: "Meneroka persepsi suhu & tolok termometer (Panas 🔥 vs Sejuk ❄️).", skill: "Persepsi Suhu & Tolok" },
        { id: "45", name: "Gelung Himpunan Venn", icon: "⭕", desc: "Logik gambar rajah Venn 2-set & persilangan atribut bersama.", skill: "Logik Gambar Rajah Venn" },
      ]
    },
    {
      id: "W10",
      title: "Dunia 10: Kemuncak Galaksi Angkasa Lepas",
      icon: "🌌",
      desc: "Ukuran ketinggian, pengelasan saiz, jam pasir & buruj finale",
      badge: "5 Mod Galaksi Finale (Game 46-50)",
      headerBg: "bg-gradient-to-r from-teal-500/20 to-emerald-500/10 border-teal-500/30 text-teal-300",
      accentPill: "bg-teal-400 text-slate-950",
      games: [
        { id: "46", name: "Menara Blok Ketinggian", icon: "🗼", desc: "Ukur ketinggian bukan piawai menyusun tiang blok menegak.", skill: "Ukuran Ketinggian Bukan Piawai" },
        { id: "47", name: "Pengelas Tiga Saiz", icon: "📏", desc: "Siri saiz 3 peringkat (Kecil, Sederhana, Besar) pada podium bertingkat.", skill: "Siri & Diskriminasi Saiz" },
        { id: "48", name: "Detektif Jam Pasir", icon: "⏳", desc: "Konsep tempoh masa (Lama vs Sekejap) & kelajuan (Pantas vs Lambat).", skill: "Konsep Tempoh & Laju Masa" },
        { id: "49", name: "Piknik Riang Kongsi Sama Rata", icon: "🧺", desc: "Asas pembahagian adil mengagihkan hidangan kepada haiwan comel.", skill: "Asas Pembahagian Sama Rata" },
        { id: "50", name: "Mahkota Bintang Galaksi", icon: "👑", desc: "Urutan nombor, bilang lompat & sambung titik bintang neon finale!", skill: "Urutan Nombor & Grand Finale" },
      ]
    }
  ];

  return (
    <div className="pmk-theme min-h-screen flex flex-col selection:bg-amber-400 selection:text-slate-900 pb-20 md:pb-0">
      
      {/* Top Promotional Announcement Banner */}
      <div className="bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 text-white py-2 sm:py-2.5 px-3 sm:px-4 text-center text-xs sm:text-sm font-bold shadow-md relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
          <span className="bg-white/20 backdrop-blur-xs px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-wider flex items-center gap-1 shrink-0">
            <Sparkles size={13} className="text-yellow-200 animate-spin" /> PROMOSI TERHAD
          </span>
          <span className="leading-snug">
            Dapatkan <strong>30 Mod Permainan Utama</strong> + <span className="underline decoration-yellow-300 decoration-2 font-black text-yellow-200">PERCUMA 20 Bonus Permainan Ekstra</span> (Jumlah 50 Permainan)!
          </span>
          <button 
            onClick={() => { setCheckoutModalOpen(true); setPaymentSuccess(false); }}
            className="bg-yellow-300 hover:bg-yellow-200 text-slate-950 font-black px-3.5 py-1 rounded-full text-xs shadow-md transition-transform hover:scale-105 inline-flex items-center gap-1 shrink-0 cursor-pointer"
          >
            <span>Tuntut RM39 Sekarang</span>
            <span>➔</span>
          </button>
        </div>
      </div>

      {/* Sticky Top Navigation Bar */}
      <nav className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-slate-200/80 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 gap-2">
            
            {/* Brand Logo & Slot Placeholder */}
            <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
              <Link to="/" className="text-slate-500 hover:text-slate-800 transition-colors shrink-0" title="Kembali ke Home PintarTech">
                <ArrowLeft size={18} className="sm:w-5 sm:h-5" />
              </Link>
              
              <a href="#" className="flex items-center gap-2 sm:gap-3 group shrink-0">
                {/* Logo Frame Slot */}
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-teal-400 to-emerald-500 group-hover:scale-105 transition-transform overflow-hidden flex items-center justify-center shrink-0 shadow-md" title="Logo Apps PintarMathKids">
                  {!logoError ? (
                    <img 
                      src={appLogoUrl} 
                      alt="Logo Apps PintarMathKids" 
                      className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
                      onError={() => setLogoError(true)}
                    />
                  ) : (
                    <span className="text-xl sm:text-2xl">🦁</span>
                  )}
                </div>
                <div>
                  <span className="pmk-heading-font text-base sm:text-2xl font-bold tracking-tight sm:tracking-wide bg-gradient-to-r from-teal-500 via-purple-600 to-amber-500 bg-clip-text text-transparent block whitespace-nowrap">
                    PintarMathKids
                  </span>
                  <span className="hidden sm:block text-[10px] text-slate-500 font-bold tracking-widest uppercase whitespace-nowrap">
                    Edisi Prasekolah & Tadika
                  </span>
                </div>
              </a>
            </div>

            {/* Nav Links */}
            <div className="hidden lg:flex items-center space-x-5 xl:space-x-6 text-sm font-bold text-slate-600">
              <a href="#ciri" className="hover:text-teal-600 transition-colors">Ciri-Ciri</a>
              <a href="#galeri-mockup" className="hover:text-teal-600 transition-colors text-teal-600 flex items-center gap-1">
                <Sparkles size={14} /> Galeri Mockup (10 Pilihan)
              </a>
              <a href="#permainan" className="hover:text-teal-600 transition-colors">30 Game KSPK</a>
              <a href="#bonus-promo" className="hover:text-amber-600 transition-colors text-amber-600 flex items-center gap-1 font-black">
                <span>🎁 +20 Bonus Promo</span>
              </a>
              <a href="#testimoni" className="hover:text-teal-600 transition-colors">Testimoni</a>
              <a href="#faq" className="hover:text-teal-600 transition-colors">FAQ</a>
            </div>

            {/* CTA Button */}
            <div className="flex items-center shrink-0">
              <button 
                onClick={() => { setCheckoutModalOpen(true); setPaymentSuccess(false); }}
                className="inline-flex items-center gap-1.5 sm:gap-2 bg-amber-500 hover:bg-amber-600 text-white font-extrabold px-3 py-2 sm:px-5 sm:py-2.5 rounded-xl sm:rounded-2xl pmk-shadow-3d-orange transition-all active:translate-y-1 text-xs sm:text-sm whitespace-nowrap cursor-pointer"
              >
                <ShoppingBag size={15} className="sm:w-[18px] sm:h-[18px]" />
                <span>Dapatkan RM39</span>
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-8 pb-16 md:pt-16 md:pb-24 overflow-hidden bg-gradient-to-b from-teal-50/80 via-purple-50/40 to-white">
        
        {/* Floating Visual Math Symbols */}
        <div className="absolute top-10 left-6 text-4xl pmk-animate-float opacity-50 select-none pointer-events-none">🔢</div>
        <div className="absolute top-1/4 left-8 text-5xl pmk-animate-float-rev opacity-40 select-none pointer-events-none">➕</div>
        <div className="absolute top-1/3 right-8 text-5xl pmk-animate-float opacity-50 select-none pointer-events-none" style={{ animationDelay: '1.5s' }}>🧩</div>
        <div className="absolute bottom-16 left-1/3 text-4xl pmk-animate-float opacity-40 select-none pointer-events-none" style={{ animationDelay: '2.5s' }}>⭐</div>
        <div className="absolute bottom-10 right-1/4 text-4xl pmk-animate-float-rev opacity-40 select-none pointer-events-none">➖</div>

        {/* Floating Interactive Math Doodles */}
        <div className="hidden lg:flex absolute top-16 right-1/3 items-center gap-1.5 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-2xl shadow-md border border-teal-200 text-teal-700 font-extrabold text-xs pmk-animate-math-drift pointer-events-none">
          <span className="text-base">📐</span>
          <span>1 + 2 = 3</span>
        </div>
        <div className="hidden lg:flex absolute bottom-28 left-8 items-center gap-1.5 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-2xl shadow-md border border-purple-200 text-purple-700 font-extrabold text-xs pmk-animate-float-rev pointer-events-none" style={{ animationDelay: '1s' }}>
          <span className="text-base">📏</span>
          <span>5 − 2 = 3</span>
        </div>
        <div className="hidden lg:flex absolute top-1/2 left-4 items-center gap-1.5 bg-amber-100/90 backdrop-blur-md px-3.5 py-1.5 rounded-2xl shadow-md border border-amber-300 text-amber-900 font-extrabold text-xs pmk-animate-math-drift pointer-events-none" style={{ animationDelay: '2s' }}>
          <span className="text-base">✏️</span>
          <span>4 × 2 = 8</span>
        </div>
        <div className="hidden lg:flex absolute top-2/3 right-12 items-center gap-1.5 bg-pink-100/90 backdrop-blur-md px-3.5 py-1.5 rounded-2xl shadow-md border border-pink-300 text-pink-700 font-extrabold text-xs pmk-animate-float pointer-events-none" style={{ animationDelay: '3s' }}>
          <span className="text-base">🎈</span>
          <span>10 ÷ 2 = 5</span>
        </div>

        {/* Glowing background blobs */}
        <div className="absolute top-12 left-1/3 w-72 h-72 bg-teal-300/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-300/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Headline & Offer Column */}
            <div className="lg:col-span-7 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100/90 border border-teal-200 text-teal-800 font-extrabold text-xs sm:text-sm mb-6 shadow-sm flex-wrap">
                <span className="bg-gradient-to-r from-rose-500 to-amber-500 text-white text-[10px] px-2.5 py-0.5 rounded-full uppercase font-black">TAWARAN PROMO</span>
                <span>30 Mod Utama + 20 Bonus Permainan Percuma (Jumlah 50 Game)</span>
              </div>

              <h1 className="pmk-heading-font pmk-hero-title text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
                Anak Kuasai <span className="bg-gradient-to-r from-teal-500 via-purple-600 to-amber-500 bg-clip-text text-transparent">Matematik Prasekolah</span> Dengan 30 Mod + 20 Bonus Ekstra!
              </h1>

              <p className="text-slate-600 text-base sm:text-lg mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                Beri anak anda masa skrin yang berfaedah tanpa rasa bersalah 💖. Aplikasi Web Game (PWA) 100% bebas iklan untuk anak 4 hingga 7 tahun. Dilengkapi <strong>30 mod permainan interaktif KSPK (6 Dunia Bertema)</strong> — dan khas dalam tempoh promosi ini, terima <strong>PERCUMA 20 Permainan Bonus Tambahan (Jumlah 50 Permainan!)</strong>, sokongan dwi-bahasa (BM & EN), dan dashboard laporan kemajuan ibu bapa!
              </p>

              {/* Main Offer Box */}
              <div className="bg-white/95 backdrop-blur p-6 rounded-3xl border-2 border-slate-200 shadow-xl max-w-xl mx-auto lg:mx-0 relative">
                
                {/* Badge Tag */}
                <div className="absolute -top-3.5 right-6 bg-gradient-to-r from-rose-500 to-amber-500 text-white text-[11px] font-black px-3.5 py-0.5 rounded-full shadow-md flex items-center gap-1">
                  <Zap size={12} className="text-yellow-300" />
                  <span>PROMO: 30 MOD + 20 BONUS PERCUMA</span>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-slate-400 line-through text-lg font-bold">RM 69</span>
                      <span className="bg-red-100 text-red-600 text-xs font-extrabold px-2.5 py-0.5 rounded-md">JIMAT RM30</span>
                      <span className="bg-amber-100 text-amber-800 text-[11px] font-extrabold px-2 py-0.5 rounded-md">+20 BONUS</span>
                    </div>
                    <div className="text-3xl sm:text-4xl font-extrabold text-teal-600 pmk-heading-font flex items-baseline gap-2">
                      RM 39 <span className="text-xs font-normal text-slate-500 font-sans">/ Sekali bayar (50 Koleksi Permainan)</span>
                    </div>
                  </div>

                  <button 
                    onClick={() => { setCheckoutModalOpen(true); setPaymentSuccess(false); }}
                    className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-amber-600 text-white font-extrabold text-lg px-8 py-4 rounded-2xl pmk-shadow-3d-orange hover:brightness-110 active:translate-y-1 transition-all text-center flex items-center justify-center gap-3 pmk-animate-pulse-glow cursor-pointer"
                  >
                    <Zap size={20} className="text-yellow-300 fill-yellow-300" />
                    <span>Beli RM39 Sekarang</span>
                  </button>
                </div>
                
                {/* Badges Grid */}
                <div className="pt-4 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs font-bold text-slate-700">
                  <div className="flex items-center justify-center gap-1.5 bg-teal-50 py-2 rounded-xl border border-teal-100">
                    <Gamepad2 size={15} className="text-teal-600" />
                    <span>30 Mod Utama</span>
                  </div>
                  <div className="flex items-center justify-center gap-1.5 bg-amber-50 py-2 rounded-xl border border-amber-200">
                    <Sparkles size={15} className="text-amber-600" />
                    <span>+20 Bonus Promo</span>
                  </div>
                  <div className="flex items-center justify-center gap-1.5 bg-purple-50 py-2 rounded-xl border border-purple-100">
                    <WifiOff size={15} className="text-purple-600" />
                    <span>100% Offline</span>
                  </div>
                  <div className="flex items-center justify-center gap-1.5 bg-emerald-50 py-2 rounded-xl border border-emerald-100">
                    <ShieldCheck size={15} className="text-emerald-600" />
                    <span>Bebas Iklan</span>
                  </div>
                </div>

              </div>

            </div>

            {/* Right Hero Visual & App Screenshot Placeholder Slot */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Decorative Ring */}
                <div className="absolute -inset-4 bg-gradient-to-r from-teal-400 via-purple-500 to-amber-400 opacity-20 rounded-[3rem] blur-xl animate-pulse"></div>

                {/* Hero App Screen Frame */}
                <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 rounded-[2.5rem] p-5 shadow-2xl border-4 border-amber-300/40 relative overflow-hidden">
                  
                  {/* Header Bar */}
                  <div className="flex items-center justify-between text-white text-xs mb-3 font-bold bg-white/10 p-2.5 rounded-2xl backdrop-blur">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">🦁</span>
                      <span className="pmk-heading-font text-yellow-300">PintarMathKids Hub</span>
                    </div>
                    <span className="bg-emerald-500 text-white px-2.5 py-0.5 rounded-full text-[10px]">VERSI 2026</span>
                  </div>

                  {/* Visual Screen Container */}
                  <div className="bg-gradient-to-b from-teal-600 via-cyan-600 to-indigo-800 rounded-2xl p-6 text-center text-white relative shadow-inner overflow-hidden min-h-[300px] flex flex-col justify-center items-center">
                    
                    <div className="text-4xl mb-2">🎈 🦁 🧪 🚀 🎁</div>
                    <h3 className="pmk-heading-font text-2xl sm:text-3xl font-extrabold text-white shadow-sm mb-1">
                      30 Mod + 20 Bonus Percuma
                    </h3>
                    <span className="inline-block bg-white/20 text-yellow-200 text-xs font-black px-3 py-1 rounded-full mb-3 border border-white/20">
                      🌟 50 Koleksi Lengkap Permainan Matematik!
                    </span>
                    <p className="text-xs text-teal-100 max-w-xs font-medium leading-relaxed mb-4">
                      Merangkumi 6 Dunia Bertema KSPK + Zon Bonus Arked, Teka-Teki Logik & Duel 2-Pemain!
                    </p>
                    
                    <a href="#galeri-mockup" className="bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-extrabold text-xs px-5 py-2.5 rounded-xl shadow-lg transition-transform hover:scale-105 inline-flex items-center gap-2 cursor-pointer">
                      <span>Lihat Galeri Mockup (10 Pilihan)</span>
                      <ChevronDown size={16} />
                    </a>
                  </div>

                  {/* Floating Badges */}
                  <div className="absolute -bottom-2 -right-2 bg-white text-slate-800 p-3 rounded-2xl shadow-xl border border-slate-200 flex items-center gap-2 text-xs font-extrabold">
                    <span className="text-2xl">📱</span>
                    <div>
                      <span>PWA Offline Ready</span>
                      <span className="block text-[10px] text-slate-500 font-normal">Tekan "Add to Home Screen"</span>
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Problem Checklist Section */}
      <section id="masalah" className="py-16 pmk-bg-math-grid relative border-t border-slate-200/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="bg-red-100 text-red-600 font-extrabold px-3.5 py-1 rounded-full text-xs uppercase tracking-wider inline-flex items-center gap-1.5">
              <span>❓ Cabaran Pembelajaran Awal</span>
            </span>
            <h2 className="pmk-heading-font text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-4">
              Adakah Anak Anda Menghadapi Masalah Ini Dalam Matematik?
            </h2>
            <p className="text-slate-600 text-base">
              Ramai ibu bapa risau apabila anak prasekolah sukar fokus dan tiada minat belajar Matematik asas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="bg-white/90 p-6 rounded-3xl border border-red-200 shadow-sm flex items-start gap-4 hover:border-red-300 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-red-100 text-red-500 flex items-center justify-center text-2xl shrink-0 font-bold">😩</div>
              <div>
                <h4 className="pmk-heading-font font-bold text-slate-900 text-lg mb-1">Cepat Bosan Dengan Lembaran Kerja Kertas</h4>
                <p className="text-slate-600 text-sm leading-relaxed">Anak menangis atau mengelak apabila diminta membuat buku latihan matematik biasa yang membosankan.</p>
              </div>
            </div>

            <div className="bg-white/90 p-6 rounded-3xl border border-red-200 shadow-sm flex items-start gap-4 hover:border-red-300 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-red-100 text-red-500 flex items-center justify-center text-2xl shrink-0 font-bold">📱</div>
              <div>
                <h4 className="pmk-heading-font font-bold text-slate-900 text-lg mb-1">Terdedah Iklan Berbahaya Di YouTube / App Lain</h4>
                <p className="text-slate-600 text-sm leading-relaxed">Bila bagi telefon, anak terganggu dengan iklan game pop-up yang tak sesuai dan membuatkan mereka hilang fokus.</p>
              </div>
            </div>

            <div className="bg-white/90 p-6 rounded-3xl border border-red-200 shadow-sm flex items-start gap-4 hover:border-red-300 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-red-100 text-red-500 flex items-center justify-center text-2xl shrink-0 font-bold">🧩</div>
              <div>
                <h4 className="pmk-heading-font font-bold text-slate-900 text-lg mb-1">Sukar Memahami Konsep Abstrak</h4>
                <p className="text-slate-600 text-sm leading-relaxed">Sukar faham simbol +, -, dan jam jika sekadar menghafal tanpa gambaran visual animasi yang menarik.</p>
              </div>
            </div>

            <div className="bg-white/90 p-6 rounded-3xl border border-red-200 shadow-sm flex items-start gap-4 hover:border-red-300 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-red-100 text-red-500 flex items-center justify-center text-2xl shrink-0 font-bold">⚡</div>
              <div>
                <h4 className="pmk-heading-font font-bold text-slate-900 text-lg mb-1">Ibu Bapa Tiada Masa Pantau Kemajuan</h4>
                <p className="text-slate-600 text-sm leading-relaxed">Gagal mengesan topik mana yang anak belum kuasai secara terperinci sebelum masuk Tahun 1.</p>
              </div>
            </div>

          </div>

          {/* Solution Banner */}
          <div className="mt-10 bg-gradient-to-r from-teal-600 to-emerald-600 p-6 sm:p-8 rounded-3xl text-white text-center shadow-lg relative overflow-hidden">
            <div className="relative z-10">
              <span className="text-3xl mb-2 inline-block animate-bounce">💡</span>
              <h3 className="pmk-heading-font text-2xl sm:text-3xl font-extrabold mb-2">PintarMathKids Adalah Solusinya!</h3>
              <p className="text-teal-50 text-sm sm:text-base max-w-2xl mx-auto">
                Aplikasi yang menukarkan sesi pembelajaran matematik menjadi aktiviti permainan interaktif yang penuh warna-warni, ganjaran maskot, dan maklum balas visual yang menenangkan.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Guilt-Free Screen Time: Sentuhan Emosi Ibu Bapa */}
      <section className="py-16 bg-gradient-to-b from-teal-50/60 via-amber-50/40 to-white border-t border-slate-200/80 relative overflow-hidden">
        
        {/* Decorative soft blurs */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-teal-200/30 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-amber-200/30 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="bg-gradient-to-r from-rose-100 to-pink-100 text-rose-700 font-extrabold px-4 py-1.5 rounded-full text-xs uppercase tracking-wider inline-flex items-center gap-1.5 shadow-xs">
              <span>❤️ Dari Hati Ibu Bapa Ke Hati Ibu Bapa</span>
            </span>
            <h2 className="pmk-heading-font text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 mb-4 leading-tight">
              Masa Skrin Tanpa Rasa Bersalah <span className="text-teal-600">(Guilt-Free Screen Time)</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Kami faham, ada ketikanya ibu ayah perlukan masa untuk selesaikan urusan rumah, memasak, atau berehat seketika. Dengan PintarMathKids, anda tidak lagi perlu rasa bersalah apabila memberikan peranti kepada anak.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="bg-white p-7 rounded-3xl border-2 border-teal-100 shadow-lg hover:border-teal-300 hover:shadow-xl transition-all relative group flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
                  🧘‍♀️
                </div>
                <h3 className="pmk-heading-font font-bold text-slate-900 text-lg sm:text-xl mb-2">
                  Ibu Boleh Masak & Urus Rumah Dengan Tenang
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Bila anak pegang iPad/telefon, anda tahu 100% mereka berada dalam persekitaran yang <strong>bebas iklan luar, tiada video kartun lagha, dan tiada link berbahaya</strong>.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-bold text-teal-700 flex items-center gap-1.5">
                <CheckCircle2 size={16} className="text-teal-600" />
                <span>100% Selamat & Terkawal</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-7 rounded-3xl border-2 border-amber-100 shadow-lg hover:border-amber-300 hover:shadow-xl transition-all relative group flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
                  🧠
                </div>
                <h3 className="pmk-heading-font font-bold text-slate-900 text-lg sm:text-xl mb-2">
                  Tukar Ketagihan Gajet Kepada Asah Minda
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Daripada menonton video kartun secara pasif tanpa henti, jari dan minda anak <strong>aktif berfikir, mengira pecahan, padan nombor, dan menyelesaikan teka-teki</strong>.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-bold text-amber-700 flex items-center gap-1.5">
                <CheckCircle2 size={16} className="text-amber-600" />
                <span>Rangsang Kognitif & Logik</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-7 rounded-3xl border-2 border-purple-100 shadow-lg hover:border-purple-300 hover:shadow-xl transition-all relative group flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
                  🌈
                </div>
                <h3 className="pmk-heading-font font-bold text-slate-900 text-lg sm:text-xl mb-2">
                  Tiada Lagi Drama Menangis Buat Latihan
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Matematik bukan lagi subjek yang membosankan atau menakutkan. Anak anda sendiri yang akan <strong>teruja meminta untuk bermain dan mengumpul bintang ganjaran</strong> setiap hari!
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-bold text-purple-700 flex items-center gap-1.5">
                <CheckCircle2 size={16} className="text-purple-600" />
                <span>Belajar Sambil Bergembira</span>
              </div>
            </div>

          </div>

          {/* Emotional Quote Card */}
          <div className="mt-10 bg-white/90 backdrop-blur p-6 sm:p-7 rounded-3xl border border-rose-200 shadow-md text-center max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <span className="text-4xl sm:text-5xl shrink-0">💖</span>
            <div className="text-left">
              <h4 className="pmk-heading-font font-bold text-slate-900 text-base sm:text-lg mb-1">
                "Pelaburan Kecil untuk Keyakinan Awal Anak Anda"
              </h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Asas matematik yang kukuh sejak usia 4–7 tahun membentuk keyakinan diri yang tinggi apabila anak melangkah ke Tahun 1 kelak. Jangan biarkan mereka fobia atau ketinggalan dalam subjek penting ini.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Feature Highlights Section */}
      <section id="ciri" className="py-16 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="bg-teal-100 text-teal-700 font-extrabold px-3.5 py-1 rounded-full text-xs uppercase tracking-wider">✨ Ciri-Ciri Utama</span>
            <h2 className="pmk-heading-font text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-4">
              Mengapa PintarMathKids Pilihan #1 Ibu Bapa?
            </h2>
            <p className="text-slate-600 text-base">
              Direka khas dengan ciri-ciri mesra pengguna dan keselamatan digital tahap tertinggi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-md hover:shadow-lg transition-all relative">
              <div className="w-14 h-14 rounded-2xl bg-teal-100 text-teal-600 flex items-center justify-center text-2xl mb-4 font-bold">
                <Smartphone size={28} />
              </div>
              <h3 className="pmk-heading-font text-lg font-bold text-slate-900 mb-2">Aplikasi Web PWA (Offline)</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Boleh disimpan terus pada skrin utama (Home Screen) peranti anda. Sekali muat turun, anak boleh main secara 100% offline tanpa perlukan kuota internet!
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-md hover:shadow-lg transition-all relative">
              <div className="w-14 h-14 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center text-2xl mb-4 font-bold">
                <ShieldCheck size={28} />
              </div>
              <h3 className="pmk-heading-font text-lg font-bold text-slate-900 mb-2">100% Selamat & Bebas Iklan</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Bebas daripada sebarang iklan pop-up berbahaya, tiada pembelian in-app tersembunyi, dan tidak mengumpul sebarang data peribadi anak anda.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-md hover:shadow-lg transition-all relative">
              <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center text-2xl mb-4 font-bold">
                <Music size={28} />
              </div>
              <h3 className="pmk-heading-font text-lg font-bold text-slate-900 mb-2">Antaramuka Visual Interaktif</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Dilengkapi grafik berwarna-warni yang direka khas untuk merangsang kognitif kanak-kanak, menjadikannya sesi belajar yang tenang dan menyeronokkan.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-md hover:shadow-lg transition-all relative">
              <div className="w-14 h-14 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center text-2xl mb-4 font-bold">
                <Globe size={28} />
              </div>
              <h3 className="pmk-heading-font text-lg font-bold text-slate-900 mb-2">Sokongan Dwi-Bahasa (BM & EN)</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Menyokong Bahasa Melayu 🇲🇾 & Bahasa Inggeris 🇬🇧 secara penuh. Anak-anak boleh menukar pilihan arahan teks & soalan dengan mudah!
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* DEDICATED DEVICE MOCKUP SHOWCASE SECTION (DARK THEME WITH CENTER WHITE SPOTLIGHT GLOW) */}
      <section id="galeri-mockup" className="py-20 bg-[#0f172a] text-white relative overflow-hidden pmk-bg-polka-dots border-t border-b border-slate-800">
        
        {/* Glowing Ambient White & Indigo Radial Spotlight in Center ("putih sikit di tengah") */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-radial from-white/20 via-indigo-500/15 to-transparent rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[450px] h-[300px] bg-white/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Floating Math Doodles */}
        <div className="absolute top-8 left-8 text-yellow-300/20 text-5xl font-extrabold select-none pointer-events-none pmk-animate-math-drift">➕</div>
        <div class="absolute bottom-12 right-12 text-teal-300/20 text-5xl font-extrabold select-none pointer-events-none pmk-animate-float-rev">➖</div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="bg-gradient-to-r from-amber-400 to-yellow-300 text-slate-950 font-black px-4 py-1.5 rounded-full text-xs uppercase tracking-wider shadow-md inline-flex items-center gap-2">
              <Tablet size={15} />
              <span>PRATONTON VISUAL MOCKUP PERANTI (10 PILIHAN UTAMA)</span>
            </span>
            <h2 className="pmk-heading-font text-3xl sm:text-5xl font-black text-white mt-4 mb-3 leading-tight">
              Lihat Paparan Skrin iPad Sebenar Bagi <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400">10 Permainan Pilihan!</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Pratonton 10 mod permainan pilihan di bawah dalam bingkai iPad sebenar — grafik ceria, warna terang dan interaktif mesra skrin sentuh untuk kanak-kanak!
            </p>
          </div>

          {/* GAME SELECTOR FOR 10 MOCKUPS */}
          <div className="mb-8 max-w-5xl mx-auto">
            
            {/* MOBILE ONLY: Ultra-Sleek Stepper Bar with Dropdown & Prev/Next Arrows */}
            <div className="block sm:hidden mb-2">
              <div className="flex items-center justify-between gap-1.5 p-2 rounded-2xl bg-[#172138]/95 border border-amber-400/40 backdrop-blur-md shadow-xl w-full max-w-full overflow-hidden">
                <button
                  onClick={() => setActiveGameIndex((prev) => (prev > 0 ? (prev >= 10 ? 0 : prev - 1) : 9))}
                  className="w-9 h-9 rounded-xl bg-slate-800 text-amber-300 hover:bg-slate-700 active:scale-95 flex items-center justify-center font-black text-sm border border-slate-700 shrink-0 cursor-pointer"
                  aria-label="Permainan Sebelumnya"
                >
                  ◀
                </button>

                <select
                  value={activeGameIndex >= 10 ? 0 : activeGameIndex}
                  onChange={(e) => setActiveGameIndex(Number(e.target.value))}
                  className="bg-slate-900 text-amber-300 font-extrabold text-xs py-2 px-2.5 rounded-xl border border-amber-400/40 w-0 flex-1 min-w-0 text-center outline-none cursor-pointer truncate"
                >
                  {mockupGames.map((g, idx) => (
                    <option key={g.id} value={idx} className="bg-slate-900 text-white font-bold">
                      🎮 #{g.id}: {g.name}
                    </option>
                  ))}
                </select>

                <button
                  onClick={() => setActiveGameIndex((prev) => (prev < 9 ? prev + 1 : 0))}
                  className="w-9 h-9 rounded-xl bg-slate-800 text-amber-300 hover:bg-slate-700 active:scale-95 flex items-center justify-center font-black text-sm border border-slate-700 shrink-0 cursor-pointer"
                  aria-label="Permainan Seterusnya"
                >
                  ▶
                </button>
              </div>
            </div>

            {/* TABLET & DESKTOP: Sleek 5x2 Grid for the 10 Selected Mockups */}
            <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-5 gap-2.5 p-3 rounded-3xl bg-[#172138]/90 border border-indigo-500/30 backdrop-blur-md shadow-2xl">
              {mockupGames.map((game, idx) => {
                const isActive = (activeGameIndex >= 10 ? 0 : activeGameIndex) === idx;
                return (
                  <button
                    key={game.id}
                    onClick={() => setActiveGameIndex(idx)}
                    className={`px-3 py-2.5 rounded-2xl text-xs font-bold transition-all duration-200 border text-left cursor-pointer flex items-center gap-2.5 ${
                      isActive 
                        ? 'bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 text-slate-950 border-yellow-200 shadow-lg shadow-amber-500/20 font-black scale-[1.03]' 
                        : 'bg-slate-800/80 text-slate-300 border-slate-700/60 hover:bg-slate-700 hover:text-white hover:border-slate-500'
                    }`}
                  >
                    <span className={`w-7 h-7 rounded-xl text-xs font-black flex items-center justify-center shrink-0 shadow-inner ${
                      isActive ? 'bg-slate-950 text-amber-300' : 'bg-slate-700 text-slate-300'
                    }`}>
                      {game.id}
                    </span>
                    <div className="min-w-0 flex-1">
                      <span className="truncate block font-extrabold text-[12px]">{game.name}</span>
                      <span className={`text-[10px] block truncate ${isActive ? 'text-slate-800 font-bold' : 'text-slate-400'}`}>
                        {game.topRightIcon} {game.goal}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* SINGLE DEVICE MOCKUP CONTAINER - IPAD FRAME ON TOP FOR MOBILE */}
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 gap-8 items-center bg-gradient-to-br from-[#1e293b]/95 via-[#172138]/95 to-[#0f172a]/95 p-5 sm:p-10 rounded-[2.5rem] border border-amber-400/30 backdrop-blur-xl shadow-2xl relative overflow-hidden">
            
            {/* Corner Math Symbols Background Accent */}
            <div className="absolute top-6 right-8 text-indigo-400/10 text-6xl font-black select-none pointer-events-none">+ −</div>
            <div className="absolute bottom-6 left-8 text-indigo-400/10 text-6xl font-black select-none pointer-events-none">× ÷</div>

            {/* Left Column: Game Information */}
            <div className="lg:col-span-5 text-left z-10 w-full">
              <div className="flex items-center gap-2 flex-wrap mb-3">
                <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-400/20 to-amber-500/10 text-yellow-300 border border-amber-400/40 font-black px-3.5 py-1 rounded-full text-xs shadow-xs">
                  🎮 Pratonton #{selectedMockupGame.id} daripada 10 Pilihan Utama
                </span>
                <span className="inline-flex items-center gap-1 bg-indigo-500/20 text-indigo-200 border border-indigo-400/30 font-bold px-3 py-1 rounded-full text-[11px]">
                  {selectedMockupGame.worldName}
                </span>
              </div>
              
              <h3 className="pmk-heading-font text-2xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-100 to-amber-200 mb-3">
                {selectedMockupGame.name}
              </h3>
              
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-medium">
                {selectedMockupGame.desc}
              </p>

              <div className="space-y-3 bg-[#0f172a]/90 p-4 sm:p-5 rounded-2xl border border-slate-700/70 text-xs shadow-inner">
                <div className="flex items-center justify-between text-slate-300 pb-2 border-b border-slate-800/80">
                  <span className="font-semibold text-slate-400">🎯 Objektif Pembelajaran:</span>
                  <strong className="text-emerald-400 font-extrabold text-right">{selectedMockupGame.goal}</strong>
                </div>
                <div className="flex items-center justify-between text-slate-300 pb-2 border-b border-slate-800/80">
                  <span className="font-semibold text-slate-400">👧 Kesesuaian Umur:</span>
                  <strong className="text-amber-300 font-extrabold">{selectedMockupGame.ageFit}</strong>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span className="font-semibold text-slate-400">📘 Peringkat KSPK:</span>
                  <strong className="text-teal-300 font-extrabold">{selectedMockupGame.kspk}</strong>
                </div>
              </div>

              {/* Pedagogy / Offline Feature Badge */}
              <div className="mt-5 p-4 rounded-2xl bg-gradient-to-r from-indigo-950/80 to-slate-900/90 border border-indigo-500/30 text-xs text-indigo-100 flex items-center justify-between shadow-md">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{selectedMockupGame.topRightIcon || '✨'}</span>
                  <div>
                    <span className="font-extrabold text-amber-300 block text-xs">Modul Pratonton Pilihan</span>
                    <span className="text-[11px] text-slate-300">100% Selaras Kurikulum KSPK KPM</span>
                  </div>
                </div>
                <span className="bg-teal-500/20 text-teal-300 border border-teal-400/30 px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase shrink-0">
                  Offline Ready
                </span>
              </div>

              {/* Quick Stepper Switcher Buttons */}
              <div className="mt-4 flex items-center justify-between gap-2 pt-3 border-t border-slate-700/60">
                <button
                  onClick={() => setActiveGameIndex((prev) => (prev > 0 ? (prev >= 10 ? 0 : prev - 1) : 9))}
                  className="px-3.5 py-2 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-amber-300 font-extrabold text-xs border border-slate-700 flex items-center gap-1.5 cursor-pointer transition-all active:scale-95 shadow-sm"
                >
                  ◀ Sebelum
                </button>
                <span className="text-slate-400 text-xs font-bold">
                  {selectedMockupGame.id} / 10 Pilihan
                </span>
                <button
                  onClick={() => setActiveGameIndex((prev) => (prev < 9 ? prev + 1 : 0))}
                  className="px-3.5 py-2 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-amber-300 font-extrabold text-xs border border-slate-700 flex items-center gap-1.5 cursor-pointer transition-all active:scale-95 shadow-sm"
                >
                  Seterusnya ▶
                </button>
              </div>
            </div>

            {/* Right Column: Snug, Ultra-Realistic iPad Mockup Frame */}
            <div className="lg:col-span-7 flex justify-center z-10 w-full mb-2 lg:mb-0">
              
              <div className="relative w-full max-w-xl">
                
                {/* Golden Radial Glow Accent Behind iPad */}
                <div className="absolute -inset-3 bg-gradient-to-r from-amber-400/25 via-yellow-300/15 to-teal-400/25 rounded-[3rem] blur-2xl pointer-events-none animate-pulse"></div>

                {/* Outer Metallic iPad Frame (Snug Bezel) */}
                <div className="bg-slate-900 p-2.5 sm:p-3.5 rounded-[2.2rem] sm:rounded-[2.6rem] border-4 border-amber-400/80 shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative overflow-hidden w-full">
                  
                  {/* iPad Camera Dot */}
                  <div className="flex items-center justify-center mb-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-800 border border-slate-700"></div>
                  </div>

                  {/* iPad Screen Canvas Area - SNUG FORM-FITTING IMAGE CONTAINER */}
                  <div className="bg-slate-950 rounded-[1.4rem] sm:rounded-[1.8rem] overflow-hidden shadow-2xl border border-slate-800/80 w-full relative min-h-[220px]">
                    {!gameImgErrors[selectedGame.id] ? (
                      <img 
                        src={`/mockups/game-${selectedGame.id}.jpg`} 
                        alt={`Paparan Skrin iPad ${selectedGame.name}`} 
                        className="w-full h-auto object-cover block rounded-[1.4rem] sm:rounded-[1.8rem] transition-all duration-150"
                        onError={(e) => {
                          if (e.target.src.endsWith('.jpg')) {
                            e.target.src = `/mockups/game-${selectedGame.id}.png`;
                          } else {
                            setGameImgErrors(prev => ({ ...prev, [selectedGame.id]: true }));
                          }
                        }}
                      />
                    ) : (
                      <div className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] p-6 sm:p-8 text-center text-white flex flex-col items-center justify-center min-h-[260px] sm:min-h-[300px] w-full">
                        <div className="w-14 h-14 rounded-2xl bg-amber-400/20 text-yellow-300 flex items-center justify-center text-3xl font-bold border border-amber-300/30 shadow-inner mb-2">
                          {selectedGame.topRightIcon || '🎮'}
                        </div>
                        <div className="font-extrabold text-sm sm:text-base text-yellow-300 mb-1">
                          #{selectedGame.id}: {selectedGame.name}
                        </div>
                        <span className="text-[11px] text-slate-300 mb-3 block">
                          {selectedGame.worldName}
                        </span>
                        <div className="w-full max-w-sm">
                          {selectedGame.ipadHtml}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* iPad Bottom Home Indicator Bar */}
                  <div className="w-28 h-1 bg-slate-700 rounded-full mx-auto mt-2.5 sm:mt-3"></div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 30 Mini-Games Overview Grid */}
      <section id="permainan" className="py-16 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="bg-purple-100 text-purple-700 font-extrabold px-3.5 py-1 rounded-full text-xs uppercase tracking-wider">Senarai Permainan</span>
            <h2 className="pmk-heading-font text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-4">
              30 Mod Permainan Matematik Prasekolah Lengkap
            </h2>
            <p className="text-slate-600 text-base">
              Merangkumi 6 Dunia Pengembaraan bertema, direka khas mengikut tahap intelek kanak-kanak dari mengenal nombor asas hingga pemikiran komputasi & logik.
            </p>
          </div>

          {/* Overview Grid World Filters */}
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap mb-8">
            {worldsData.map((w) => {
              const isSelected = selectedWorldFilter === w.id;
              return (
                <button
                  key={w.id}
                  onClick={() => setSelectedWorldFilter(w.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all duration-150 cursor-pointer flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-purple-600 text-white font-black shadow-md scale-105'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  <span>{w.icon}</span>
                  <span>{w.name}</span>
                </button>
              );
            })}
          </div>

          {/* Games Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {gamesData
              .filter(g => selectedWorldFilter === 'all' || g.world === selectedWorldFilter)
              .map((g) => (
                <div key={g.id} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all relative overflow-hidden group flex flex-col justify-between hover:border-purple-300">
                  <div>
                    {/* Top Right Icon */}
                    <span className="absolute top-4 right-4 text-2xl select-none group-hover:scale-110 transition-transform">
                      {g.topRightIcon || '🔢'}
                    </span>

                    {/* World Tag Pill */}
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block mb-2">
                      {g.worldName}
                    </span>

                    {/* Top Header: Colored Number Badge + Game Title */}
                    <div className="flex items-center gap-3 mb-3 pr-8">
                      <span className={`w-11 h-11 rounded-xl ${g.numBadgeBg || 'bg-amber-100 text-amber-700'} flex items-center justify-center text-lg font-black shrink-0 shadow-xs transition-transform group-hover:scale-105`}>
                        {g.id}
                      </span>
                      <h4 className="pmk-heading-font font-bold text-slate-900 text-sm sm:text-base leading-tight">
                        {g.name}
                      </h4>
                    </div>

                    {/* Description with JSX Formatted Markdown Support */}
                    <p className="text-xs text-slate-600 leading-relaxed mb-3">
                      {g.descFormatted || g.desc}
                    </p>
                  </div>

                  {/* Card Footer: Goal / KSPK Tag */}
                  <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500 font-semibold">
                    <span className="text-teal-700 font-bold">🎯 {g.goal}</span>
                    <span className="bg-slate-100 px-2 py-0.5 rounded text-slate-600">{g.ageFit}</span>
                  </div>
                </div>
              ))}
          </div>

        </div>
      </section>

      {/* EXCLUSIVE PROMO BONUS ZONE: 20 EXTRA GAMES FREE */}
      <section id="bonus-promo" className="py-20 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 text-white relative overflow-hidden border-t-4 border-amber-400">
        
        {/* Glow ambient background effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-radial from-amber-400/20 via-purple-600/15 to-transparent rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-10 left-10 text-5xl opacity-20 pointer-events-none select-none">🎁</div>
        <div className="absolute bottom-10 right-10 text-5xl opacity-20 pointer-events-none select-none">⭐</div>
        <div className="absolute top-1/2 right-12 text-5xl opacity-15 pointer-events-none select-none">🚀</div>
        <div className="absolute bottom-1/3 left-12 text-5xl opacity-15 pointer-events-none select-none">🎈</div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-rose-400 text-slate-950 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-lg mb-4">
              <Gift size={16} className="text-slate-950" />
              <span>🎁 BONUS PERCUMA SEMPENA PROMO TERHAD</span>
            </div>
            
            <h2 className="pmk-heading-font text-3xl sm:text-5xl font-black text-white leading-tight mb-4">
              20 Mod Permainan Ekstra <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400">PERCUMA!</span>
            </h2>
            
            <p className="text-purple-200 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Bukan sekadar 30 mod asas KSPK — sepanjang tempoh promosi khas ini, anda akan menerima <strong>20 permainan bonus tambahan bernilai RM49 secara PERCUMA</strong>. Menjadikan jumlah keseluruhan <strong className="text-amber-300">50 Koleksi Permainan Interaktif</strong> tanpa sebarang langganan bulanan!
            </p>
          </div>

          {/* 4 Bonus Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
            {bonusCategories.map((category) => (
              <div 
                key={category.id} 
                className="bg-white/5 backdrop-blur-md rounded-3xl p-6 sm:p-7 border border-white/10 hover:border-amber-400/50 transition-all duration-300 shadow-xl flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{category.icon}</span>
                      <div>
                        <h3 className="pmk-heading-font text-lg sm:text-xl font-black text-amber-300">
                          {category.title}
                        </h3>
                        <p className="text-xs text-slate-300 font-medium">
                          {category.desc}
                        </p>
                      </div>
                    </div>
                    <span className="bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-950 font-black text-[11px] px-3 py-1 rounded-full uppercase tracking-wider shrink-0 shadow-sm">
                      {category.badge}
                    </span>
                  </div>

                  {/* 5 Games List */}
                  <div className="space-y-2.5">
                    {category.games.map((game, idx) => (
                      <div 
                        key={idx}
                        className="bg-slate-900/80 hover:bg-slate-900 p-3 rounded-2xl border border-white/5 hover:border-amber-400/30 flex items-center justify-between gap-3 transition-colors group"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <span className="text-2xl group-hover:scale-110 transition-transform shrink-0">
                            {game.icon}
                          </span>
                          <div className="min-w-0">
                            <span className="font-extrabold text-sm text-white group-hover:text-amber-300 transition-colors block truncate">
                              #{game.id}. {game.name}
                            </span>
                            <span className="text-[11px] text-slate-400 block truncate">
                              🎯 {game.desc}
                            </span>
                          </div>
                        </div>

                        <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase shrink-0">
                          PERCUMA
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1 text-amber-200/80 font-semibold">
                    <Sparkles size={14} className="text-yellow-400" />
                    <span>Akses Penuh Tanpa Had</span>
                  </span>
                  <span className="text-slate-400">Sedia Dimainkan Offline</span>
                </div>
              </div>
            ))}
          </div>

          {/* Value Summary Call-to-Action Card */}
          <div className="bg-gradient-to-r from-amber-500 via-amber-600 to-rose-600 rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-950 flex flex-col lg:flex-row items-center justify-between gap-6 border-2 border-yellow-200">
            <div className="text-center lg:text-left text-white">
              <span className="bg-slate-950 text-amber-300 text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider inline-block mb-2">
                PAKEJ BUNDLE LENGKAP 2026
              </span>
              <h3 className="pmk-heading-font text-2xl sm:text-3xl font-black text-white">
                30 Mod Asas + 20 Bonus Tambahan = 50 Permainan!
              </h3>
              <p className="text-yellow-100 text-xs sm:text-sm font-medium mt-1 max-w-xl">
                Harga asal RM69 (Jimat RM30) — Hanya <strong>RM39 sekali bayar</strong> seumur hidup untuk kesemua 50 modul permainan, sokongan dwi-bahasa dan Parent Dashboard!
              </p>
            </div>

            <button
              onClick={() => { setCheckoutModalOpen(true); setPaymentSuccess(false); }}
              className="w-full lg:w-auto bg-slate-950 hover:bg-slate-900 text-amber-300 hover:text-yellow-200 font-black text-base sm:text-lg px-8 py-4 rounded-2xl shadow-xl transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3 cursor-pointer shrink-0 border border-amber-400/40"
            >
              <Zap size={20} className="text-yellow-400 fill-yellow-400" />
              <span>Dapatkan 50 Game (RM39)</span>
            </button>
          </div>

        </div>
      </section>

      {/* Mascot Store & Sticker Album Interactive Showcase */}
      <section id="ganjaran" className="py-16 bg-gradient-to-b from-amber-50/60 via-purple-50/40 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="bg-amber-100 text-amber-800 font-extrabold px-3.5 py-1 rounded-full text-xs uppercase tracking-wider">Sistem Motivasi & Ganjaran</span>
            <h2 className="pmk-heading-font text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-4">
              Kumpul Syiling 💰 & Kunci Maskot Comel!
            </h2>
            <p className="text-slate-600 text-base">
              Anak-anak dipacu oleh ganjaran positif. Setiap soalan yang betul memberikan bintang dan syiling untuk ditebus dengan 14 watak maskot & album sticker khas!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Mascot Showcase Box */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border-2 border-amber-200 shadow-xl">
              <div className="flex items-center justify-between border-b pb-4 mb-6">
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase">Kedai Maskot PintarKids</span>
                  <h3 className="pmk-heading-font text-2xl font-bold text-slate-900">14 Koleksi Maskot Haiwan Comel</h3>
                </div>
                <div className="bg-amber-100 text-amber-900 font-bold px-3 py-1.5 rounded-xl text-xs flex items-center gap-1.5">
                  <span>💰 450 Syiling</span>
                </div>
              </div>

              {/* Mascot Avatars Grid */}
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                <div className="bg-teal-50 p-3 rounded-2xl text-center border-2 border-teal-500 relative">
                  <span className="text-4xl block mb-1">🦁</span>
                  <span className="text-xs font-bold text-slate-800 block">Singa Pintar</span>
                  <span className="text-[10px] bg-emerald-500 text-white font-extrabold px-2 py-0.5 rounded-full inline-block mt-1">Aktif</span>
                </div>
                <div className="bg-amber-50 p-3 rounded-2xl text-center border border-amber-200 relative">
                  <span className="text-4xl block mb-1">🦝</span>
                  <span className="text-xs font-bold text-slate-800 block">Raccoon Comel</span>
                  <span className="text-[10px] bg-amber-400 text-slate-900 font-extrabold px-2 py-0.5 rounded-full inline-block mt-1">100 💰</span>
                </div>
                <div className="bg-purple-50 p-3 rounded-2xl text-center border border-purple-200 relative">
                  <span className="text-4xl block mb-1">🐼</span>
                  <span className="text-xs font-bold text-slate-800 block">Panda Bijak</span>
                  <span className="text-[10px] bg-purple-400 text-white font-extrabold px-2 py-0.5 rounded-full inline-block mt-1">150 💰</span>
                </div>
                <div className="bg-pink-50 p-3 rounded-2xl text-center border border-pink-200 relative">
                  <span className="text-4xl block mb-1">🦊</span>
                  <span className="text-xs font-bold text-slate-800 block">Musang Ceria</span>
                  <span className="text-[10px] bg-pink-500 text-white font-extrabold px-2 py-0.5 rounded-full inline-block mt-1">200 💰</span>
                </div>
                <div className="bg-slate-100 p-3 rounded-2xl text-center border border-slate-200 relative">
                  <span className="text-4xl block mb-1 opacity-50 filter grayscale">🐨</span>
                  <span className="text-xs font-bold text-slate-600 block">Koala Legend</span>
                  <span className="text-[10px] bg-slate-300 text-slate-700 font-bold px-2 py-0.5 rounded-full inline-block mt-1">🔒 Kunci</span>
                </div>
                <div className="bg-slate-100 p-3 rounded-2xl text-center border border-slate-200 relative">
                  <span className="text-4xl block mb-1 opacity-50 filter grayscale">🦒</span>
                  <span className="text-xs font-bold text-slate-600 block">Zirafah Tinggi</span>
                  <span className="text-[10px] bg-slate-300 text-slate-700 font-bold px-2 py-0.5 rounded-full inline-block mt-1">🔒 Kunci</span>
                </div>
                <div className="bg-slate-100 p-3 rounded-2xl text-center border border-slate-200 relative">
                  <span className="text-4xl block mb-1 opacity-50 filter grayscale">🐸</span>
                  <span className="text-xs font-bold text-slate-600 block">Katak Melompat</span>
                  <span className="text-[10px] bg-slate-300 text-slate-700 font-bold px-2 py-0.5 rounded-full inline-block mt-1">🔒 Kunci</span>
                </div>
                <div className="bg-slate-100 p-3 rounded-2xl text-center border border-slate-200 relative">
                  <span className="text-4xl block mb-1 opacity-50 filter grayscale">🐯</span>
                  <span className="text-xs font-bold text-slate-600 block">Harimau Gagah</span>
                  <span className="text-[10px] bg-slate-300 text-slate-700 font-bold px-2 py-0.5 rounded-full inline-block mt-1">🔒 Kunci</span>
                </div>
              </div>
            </div>

            {/* Sticker Album Highlights */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-md">
                <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center text-2xl font-bold mb-4">
                  <Star size={24} />
                </div>
                <h4 className="pmk-heading-font text-xl font-bold text-slate-900 mb-2">Album Sticker Digital Khas</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Setiap kali anak berjaya melepasi tahap permainan, mereka dihadiahkan sticker pelekat unik untuk dilekatkan pada Album Sticker Digital peribadi mereka!
                </p>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-md">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center text-2xl font-bold mb-4">
                  <ShieldCheck size={24} />
                </div>
                <h4 className="pmk-heading-font text-xl font-bold text-slate-900 mb-2">100% Mesra Kanak-Kanak</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Kesemua maskot haiwan adalah comel, mesra keluarga (child-safe), dan dipastikan bebas daripada gambaran elemen haiwan yang tidak bersesuaian.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimoni" className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="bg-teal-100 text-teal-700 font-extrabold px-4 py-1.5 rounded-full text-xs uppercase tracking-wider">
              💬 Komen & Maklum Balas Pengguna
            </span>
            <h2 className="pmk-heading-font text-3xl sm:text-5xl font-extrabold text-slate-900 mt-3 mb-4">
              Apa Kata Ibu Bapa & Guru Matematik?
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Lihat pengalaman sebenar ibu bapa dan pendidik prasekolah yang telah menggunakan PintarMathKids untuk anak-anak mereka.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="flex text-amber-400 gap-1 text-sm mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-amber-400" />)}
                </div>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic mb-6">
                  "Sebelum ni anak saya umur 5 tahun susah sangat nak ajak buat lembaran kerja nombor. Tapi lepas bagi main PintarMathKids di iPad, dia sendiri yang minta nak main! Terutamanya game Safari Membilang dan Operasi Tolak Pop!. Visual grafik dia pun comel dan menarik sangat."
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                <div className="w-12 h-12 rounded-full bg-teal-500 text-white font-bold flex items-center justify-center text-lg">SN</div>
                <div>
                  <h4 className="pmk-heading-font font-bold text-slate-900">Pn. Siti Najwa</h4>
                  <span className="text-xs text-teal-600 font-extrabold block">Ibu Kepada Seorang Anak</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="flex text-amber-400 gap-1 text-sm mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-amber-400" />)}
                </div>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic mb-6">
                  "Anak buah saya memang susah nak duduk belajar Matematik. Tapi bila guna PintarMathKids, dia anggap macam tengah main game. Paling saya suka sebab aktiviti dia pelbagai dan tak cepat bosan. Sekarang dia sendiri yang minta nak main lagi."
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                <div className="w-12 h-12 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-lg">RZ</div>
                <div>
                  <h4 className="pmk-heading-font font-bold text-slate-900">Encik Rezza</h4>
                  <span className="text-xs text-purple-600 font-extrabold block">Pengasuh Anak Buah</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="flex text-amber-400 gap-1 text-sm mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-amber-400" />)}
                </div>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic mb-6">
                  "PintarMathKids mempunyai pendekatan yang sesuai untuk memperkenalkan konsep Matematik awal kepada kanak-kanak. Aktiviti visual dan interaktif membantu menjadikan konsep seperti membilang, bentuk, pola serta operasi asas lebih mudah difahami"
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                <div className="w-12 h-12 rounded-full bg-amber-500 text-white font-bold flex items-center justify-center text-lg">AR</div>
                <div>
                  <h4 className="pmk-heading-font font-bold text-slate-900">Cikgu Asri</h4>
                  <span className="text-xs text-amber-600 font-extrabold block">Guru Matematik Sekolah</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Parent & Teacher Dashboard Section */}
      <section id="dashboard" className="py-16 bg-gradient-to-b from-white to-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6">
              <span className="bg-amber-100 text-amber-800 font-extrabold px-3.5 py-1 rounded-full text-xs uppercase tracking-wider">Mod Ibu Bapa & Guru</span>
              <h2 className="pmk-heading-font text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-4">
                Pantau Prestasi Pembelajaran Anak Dengan Ketepatan 100%
              </h2>
              <p className="text-slate-600 text-base leading-relaxed mb-6">
                Ibu bapa & guru boleh melihat topik mana yang sudah dikuasai anak dan topik mana yang memerlukan latihan tambahan melalui laporan analisis intuitif.
              </p>

              <ul className="space-y-4 text-slate-700 font-medium text-sm">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-teal-600 shrink-0 mt-0.5" />
                  <span><strong>Pintu Keselamatan Matematik (Math Gatekeeper):</strong> Pintu masuk khas dengan soalan matematik dewasa agar anak tidak mengubah tetapan sistem.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-teal-600 shrink-0 mt-0.5" />
                  <span><strong>Laporan Analisis Ketepatan:</strong> Paparan peratusan jawapan betul (accuracy rate) mengikut kesemua 30 topik KSPK (6 Dunia Bertema).</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-teal-600 shrink-0 mt-0.5" />
                  <span><strong>Sijil Penghargaan Boleh Dicetak:</strong> Cetak sijil kejayaan khas nama anak untuk disematkan di dinding rumah!</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xl relative">
                
                <div className="flex items-center justify-between mb-4 border-b pb-3 border-slate-100">
                  <div className="flex items-center gap-2">
                    <Lock size={18} className="text-slate-600" />
                    <h4 className="pmk-heading-font font-bold text-slate-800">Mod Ibu Bapa & Guru</h4>
                  </div>
                  <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2 py-1 rounded">Profil: Adam Harith (6 Tahun)</span>
                </div>

                {/* Progress Mock */}
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs font-semibold text-slate-600 mb-1">
                      <span>Membilang Safari (Dunia 1)</span>
                      <span className="text-teal-600 font-bold">95% (Sangat Baik)</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-teal-500 h-full rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-semibold text-slate-600 mb-1">
                      <span>Operasi Tambah Visual (Dunia 1)</span>
                      <span className="text-amber-600 font-bold">80% (Baik)</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-amber-500 h-full rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-semibold text-slate-600 mb-1">
                      <span>Makmal Isipadu & Logik (Dunia 6)</span>
                      <span className="text-purple-600 font-bold">90% (Cemerlang)</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-purple-600 h-full rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="text-xs text-slate-500">Jumlah Soalan Dijawab: <strong>240 Soalan (30 Topik)</strong></div>
                  <button 
                    onClick={() => setCertModalOpen(true)}
                    className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm hover:scale-105"
                  >
                    <Printer size={14} className="text-amber-400" /> Cetak Sijil (Pratonton)
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Dedicated Section: Mencetak Sijil Penghargaan Khas & iPad Tablet Mockup */}
      <section id="sijil" className="py-20 bg-gradient-to-b from-amber-50/50 via-teal-50/40 to-white border-t border-slate-200/80 relative overflow-hidden">
        
        {/* Background Ambient Elements */}
        <div className="absolute top-1/2 left-10 w-80 h-80 bg-amber-200/30 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="bg-amber-100 text-amber-800 font-extrabold px-4 py-1.5 rounded-full text-xs uppercase tracking-wider inline-flex items-center gap-1.5 shadow-xs">
              <Award size={16} className="text-amber-600" /> Cetak Sijil Kejayaan Khas
            </span>
            <h2 className="pmk-heading-font text-3xl sm:text-5xl font-extrabold text-slate-900 mt-3 mb-4">
              Pencetakan Sijil Penghargaan Khas Anak Anda
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Tingkatkan keyakinan diri anak anda! Setiap kali berjaya menguasai 30 modul permainan (6 Dunia Pengembaraan), anda boleh menjana dan mencetak Sijil Penghargaan rasmi bertaraf profesional terus dari peranti.
            </p>
          </div>

          {/* iPad Tablet Mockup Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: iPad Mockup Frame */}
            <div className="lg:col-span-7">
              <div className="relative mx-auto max-w-2xl">
                
                {/* Glow Ring Behind iPad */}
                <div className="absolute -inset-4 bg-gradient-to-r from-amber-400 via-teal-400 to-purple-500 opacity-25 rounded-[3.5rem] blur-2xl animate-pulse"></div>

                {/* iPad Frame (Tablet Mockup) */}
                <div className="bg-slate-900 rounded-[2.8rem] p-3 sm:p-4 border-4 border-amber-300/50 shadow-2xl relative overflow-hidden">
                  
                  {/* iPad Top Camera Notch */}
                  <div className="flex items-center justify-center mb-2.5">
                    <div className="w-3 h-3 rounded-full bg-slate-800 border border-slate-700"></div>
                  </div>

                  {/* iPad Screen Canvas Area - Pure Certificate Image Showcase */}
                  <div className="bg-slate-950 rounded-[1.8rem] overflow-hidden shadow-inner border border-slate-800">
                    {!certImgError ? (
                      <img 
                        src={certImgUrl} 
                        alt="Sijil Penghargaan PintarMathKids" 
                        className="w-full h-auto object-cover block rounded-[1.8rem]"
                        onError={() => {
                          if (certImgUrl.endsWith('.jpg')) {
                            setCertImgUrl('/pintarmathkids-cert-sample.png');
                          } else {
                            setCertImgError(true);
                          }
                        }}
                      />
                    ) : (
                      <div className="bg-slate-900 p-12 text-center text-white flex flex-col items-center justify-center gap-2">
                        <ImageIcon size={36} className="text-amber-300" />
                        <span className="font-extrabold text-sm text-amber-300">[ Slot Gambar Sijil Contoh ]</span>
                        <p className="text-xs text-slate-300 max-w-xs leading-relaxed">
                          Muat naik screenshot contoh sijil sebenar anda ke `public/pintarmathkids-cert-sample.jpg`
                        </p>
                      </div>
                    )}
                  </div>

                  {/* iPad Bottom Home Bar Indicator */}
                  <div className="w-32 h-1 bg-slate-700 rounded-full mx-auto mt-3"></div>

                </div>

              </div>
            </div>

            {/* Right: Key Features */}
            <div className="lg:col-span-5">
              <span className="bg-teal-100 text-teal-800 font-extrabold px-3.5 py-1 rounded-full text-xs uppercase tracking-wider">
                ✨ Pengiktirafan Rasmi
              </span>
              <h3 className="pmk-heading-font text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3 mb-4">
                Tingkatkan Keyakinan & Semangat Belajar Anak
              </h3>
              <p className="text-slate-600 text-base leading-relaxed mb-6">
                Sijil Penghargaan ini bukan sekadar sekeping kertas, tetapi lambang pencapaian fizikal yang membina daya saing dan keyakinan kendiri anak sejak umur prasekolah.
              </p>

              <div className="space-y-4">
                
                <div className="flex items-start gap-3.5 bg-white p-4 rounded-2xl border border-slate-200/90 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center text-lg font-bold shrink-0">
                    ✍️
                  </div>
                  <div>
                    <h4 className="pmk-heading-font font-bold text-slate-900 text-sm">Nama Boleh Diubahsuai Secara Fleksibel</h4>
                    <p className="text-slate-600 text-xs mt-0.5">Taip nama anak atau murid dengan mudah sebelum mencetak dalam format PDF.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 bg-white p-4 rounded-2xl border border-slate-200/90 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center text-lg font-bold shrink-0">
                    🖨️
                  </div>
                  <div>
                    <h4 className="pmk-heading-font font-bold text-slate-900 text-sm">Format Cetakan PDF Beresolusi Tinggi</h4>
                    <p className="text-slate-600 text-xs mt-0.5">Sedia dicetak pada kertas saiz A4 atau photo paper untuk dibingkaikan di bilik anak.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 bg-white p-4 rounded-2xl border border-slate-200/90 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center text-lg font-bold shrink-0">
                    ⭐
                  </div>
                  <div>
                    <h4 className="pmk-heading-font font-bold text-slate-900 text-sm">Laporan Skor Bintang, Syiling & Gelaran</h4>
                    <p className="text-slate-600 text-xs mt-0.5">Mengandungi jumlah terkumpul bintang, syiling, dan gelaran pencapaian (Super Juara).</p>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Pricing Section */}
      <section id="harga" className="py-20 bg-gradient-to-b from-purple-50/50 via-teal-50/30 to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          
          <span className="bg-red-100 text-red-600 font-extrabold px-4 py-1.5 rounded-full text-xs uppercase tracking-wider animate-pulse">
            ⚡ Tawaran Promosi Terhad
          </span>

          <h2 className="pmk-heading-font text-3xl sm:text-5xl font-extrabold text-slate-900 mt-4 mb-4">
            Pelaburan Terbaik Untuk Masa Depan Anak Anda
          </h2>
          <p className="text-slate-600 text-base max-w-xl mx-auto mb-10">
            Sekali bayar sahaja. Tiada langganan bulanan, tiada bayaran tersembunyi.
          </p>

          {/* Pricing Card */}
          <div className="bg-white rounded-3xl border-2 border-teal-400 shadow-2xl p-6 sm:p-10 relative max-w-2xl mx-auto">
            
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs font-extrabold px-6 py-2 rounded-full shadow-lg">
              TAWARAN PROMOSI HARI INI
            </div>

            <div className="mt-4 mb-6">
              <span className="text-slate-400 text-xl font-bold line-through">RM 69</span>
              <div className="text-5xl sm:text-6xl font-extrabold text-slate-900 pmk-heading-font my-2">
                RM 39 <span className="text-sm font-sans text-slate-500 font-semibold">/ Sekali Bayar</span>
              </div>
              <p className="text-xs text-emerald-600 font-bold">✓ Akses Seumur Hidup + Kemaskini Percuma</p>
            </div>

            {/* Features list */}
            <div className="text-left bg-slate-50 p-6 rounded-2xl border border-slate-200 mb-8 space-y-3 text-sm font-semibold text-slate-700">
              <div className="flex items-center gap-3">
                <Check size={18} className="text-teal-600 font-extrabold shrink-0" />
                <span>Akses Penuh Kesemua 30 Mod Permainan Utama KSPK (6 Dunia Bertema)</span>
              </div>
              <div className="flex items-center gap-3 bg-amber-50 p-2.5 rounded-xl border border-amber-200 text-amber-950 font-bold">
                <Sparkles size={18} className="text-amber-600 font-extrabold shrink-0" />
                <span>🎁 BONUS PROMOSI: Percuma 20 Permainan Ekstra (Jumlah 50 Permainan!)</span>
              </div>
              <div className="flex items-center gap-3">
                <Check size={18} className="text-teal-600 font-extrabold shrink-0" />
                <span>Sokongan Dwi-Bahasa Penuh (Bahasa Melayu 🇲🇾 & English 🇬🇧)</span>
              </div>
              <div className="flex items-center gap-3">
                <Check size={18} className="text-teal-600 font-extrabold shrink-0" />
                <span>Sokongan PWA (Boleh Main Offline Tanpa Internet)</span>
              </div>
              <div className="flex items-center gap-3">
                <Check size={18} className="text-teal-600 font-extrabold shrink-0" />
                <span>Mod Dashboard Ibu Bapa & Penjana Sijil PDF</span>
              </div>
              <div className="flex items-center gap-3">
                <Check size={18} className="text-teal-600 font-extrabold shrink-0" />
                <span>100% Bebas Iklan & Bebas Pembelian Dalam Aplikasi</span>
              </div>
              <div className="flex items-center gap-3">
                <Check size={18} className="text-teal-600 font-extrabold shrink-0" />
                <span>Boleh Di-install Pada Pelbagai Peranti Keluarga</span>
              </div>
            </div>

            {/* Checkout Button */}
            <button 
              onClick={() => { setCheckoutModalOpen(true); setPaymentSuccess(false); }}
              className="w-full bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500 text-white font-extrabold text-xl py-5 rounded-2xl pmk-shadow-3d-orange hover:brightness-110 transition-all flex items-center justify-center gap-3 cursor-pointer"
            >
              <Lock size={20} className="text-yellow-300" />
              <span>Dapatkan Akses PintarMathKids Sekarang</span>
            </button>

            <div className="mt-4 flex items-center justify-center gap-4 text-xs text-slate-400">
              <span><ShieldCheck size={14} className="inline mr-1 text-slate-500" /> Pembayaran Selamat FPX Online Banking</span>
            </div>

          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="pmk-heading-font text-3xl font-bold text-slate-900 mb-2">Soalan Lazim (FAQ)</h2>
            <p className="text-slate-600 text-sm">Ada soalan sebelum membeli? Kami mempunyai jawapannya.</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Berapa banyakkah permainan matematik yang disediakan di dalam aplikasi ini?",
                a: "PintarMathKids mengandungi 30 mod permainan interaktif asas yang dibahagikan kepada 6 Dunia Pengembaraan Bertema (Rimba Safari, Istana Bentuk, Lembah Manisan, Angkasa Lepas, Lautan Magis, dan Makmal Sains & Logik). Istimewa dalam tempoh promosi ini, anda turut menerima PERCUMA 20 permainan bonus tambahan merangkumi Dunia 7 hingga Dunia 10 (Bandar Detektif, Kerajaan Khazanah Emas, Taman Ria Sains & Logik, dan Kemuncak Galaksi Angkasa) — menjadikan jumlah keseluruhan 50 modul permainan lengkap!"
              },
              {
                q: "Adakah permainan ini dalam Bahasa Melayu atau Bahasa Inggeris?",
                a: "PintarMathKids menyokong Dwi-Bahasa Penuh (Bahasa Melayu 🇲🇾 & English 🇬🇧)! Anda atau anak boleh menukar mod bahasa teks arahan dan soalan kuiz dengan satu sentuhan mudah di skrin tetapan."
              },
              {
                q: "Adakah ini langganan bulanan atau bayaran sekali sahaja?",
                a: "Ini adalah bayaran SEKALI SAHAJA (RM 39). Anda akan mendapat akses seumur hidup ke atas kesemua 30 mod asas + 20 permainan bonus (Jumlah 50 koleksi permainan) tanpa sebarang yuran bulanan atau kos tersembunyi."
              },
              {
                q: "Bagaimanakah cara untuk bermain secara offline?",
                a: "Aplikasi PintarMathKids dibina berasaskan Progressive Web App (PWA). Selepas membuka pautan rasmi, anda hanya perlu menekan butang 'Add to Home Screen' pada telefon atau iPad/tablet anda. Aplikasi akan tersimpan dan boleh dibuka terus tanpa internet!"
              },
              {
                q: "Sesuai untuk kanak-kanak berumur berapa?",
                a: "PintarMathKids direka khusus untuk kanak-kanak berumur 4 hingga 7 tahun (Prasekolah, Tadika, Tabika, dan Tahun 1)."
              },
              {
                q: "Boleh tak saya install pada telefon & iPad serentak?",
                a: "Ya, anda boleh mengakses pautan peribadi anda di mana-mana peranti milik isi rumah keluarga anda."
              }
            ].map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden">
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full text-left p-5 font-bold text-slate-800 flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown size={18} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Rich Multi-Column Footer */}
      <footer className="bg-slate-900 text-slate-400 pt-16 pb-12 border-t border-slate-800 text-sm mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
            
            {/* Column 1: Brand & App Logo */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="pmk-logo-slot overflow-hidden flex items-center justify-center shrink-0" title="Logo Apps PintarMathKids">
                  {!logoError ? (
                    <img 
                      src={appLogoUrl} 
                      alt="Logo Apps PintarMathKids" 
                      className="w-full h-full object-cover rounded-2xl"
                      onError={() => setLogoError(true)}
                    />
                  ) : (
                    <span className="text-2xl">🦁</span>
                  )}
                </div>
                <div>
                  <span className="pmk-heading-font text-2xl font-bold tracking-wide bg-gradient-to-r from-teal-400 via-purple-400 to-amber-400 bg-clip-text text-transparent">
                    PintarMathKids
                  </span>
                  <span className="block text-[10px] text-slate-400 font-bold tracking-widest uppercase">
                    Edisi Prasekolah & Tadika
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                Aplikasi permainan matematik digital interaktif tanpa iklan khas untuk kanak-kanak 4 hingga 7 tahun. Sebahagian daripada ekosistem produk pendidikan digital <strong>PintarTech</strong>.
              </p>

              <div className="text-xs font-semibold text-slate-300 space-y-1 pt-1">
                <div className="text-teal-400 font-mono">pintartech.my/pintarmathkids</div>
                <a 
                  href="mailto:support@pintartech.my" 
                  className="text-amber-400 hover:underline inline-flex items-center gap-1.5"
                >
                  <Mail size={14} /> support@pintartech.my
                </a>
              </div>
            </div>

            {/* Column 2: Koleksi Edu Games PintarTech */}
            <div>
              <h4 className="pmk-heading-font font-bold text-white text-base mb-4 flex items-center gap-2">
                <Gamepad2 size={18} className="text-amber-400" />
                <span>Koleksi Edu Games</span>
              </h4>
              <ul className="space-y-2.5 text-xs">
                <li>
                  <Link to="/pintararabickids" className="hover:text-white transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
                    <span>Pintar Arabic Kids</span>
                  </Link>
                </li>
                <li>
                  <Link to="/pintarjawikids" className="hover:text-white transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                    <span>Pintar Jawi Kids</span>
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-teal-400 font-bold flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                    <span>Pintar Math Kids (30 Mod + 20 Bonus)</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Kelas & Produk AI PintarTech */}
            <div>
              <h4 className="pmk-heading-font font-bold text-white text-base mb-4 flex items-center gap-2">
                <GraduationCap size={18} className="text-teal-400" />
                <span>Program & Kelas PintarTech</span>
              </h4>
              <ul className="space-y-2.5 text-xs">
                <li>
                  <Link to="/kelasexcel" className="hover:text-white transition-colors flex items-center gap-2">
                    <FileSpreadsheet size={14} className="text-emerald-400" />
                    <span>Kelas Microsoft Excel Asas & Lanjutan</span>
                  </Link>
                </li>
                <li>
                  <Link to="/kelasappsheet" className="hover:text-white transition-colors flex items-center gap-2">
                    <Smartphone size={14} className="text-sky-400" />
                    <span>Kelas AppSheet (No-Code App Dev)</span>
                  </Link>
                </li>
                <li>
                  <Link to="/tafsirbotSTAM" className="hover:text-white transition-colors flex items-center gap-2 text-cyan-400 font-semibold">
                    <Bot size={14} className="text-cyan-400" />
                    <span>TafsirBot STAM (AI Tutor Telegram)</span>
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-white transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                    <span>Portal Utama PintarTech (pintartech.my)</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Navigasi Cepat PintarMathKids */}
            <div>
              <h4 className="pmk-heading-font font-bold text-white text-base mb-4 flex items-center gap-2">
                <Sparkles size={18} className="text-purple-400" />
                <span>Navigasi Laman Ini</span>
              </h4>
              <ul className="space-y-2.5 text-xs">
                <li><a href="#ciri" className="hover:text-white transition-colors">✨ Ciri-Ciri Utama</a></li>
                <li><a href="#galeri-mockup" className="hover:text-white transition-colors">📱 Galeri Mockup (10 Pilihan)</a></li>
                <li><a href="#permainan" className="hover:text-white transition-colors">🎮 30 Mod Permainan KSPK</a></li>
                <li><a href="#bonus-promo" className="text-amber-400 font-bold hover:text-yellow-300 transition-colors">🎁 +20 Bonus Promo Percuma</a></li>
                <li><a href="#ganjaran" className="hover:text-white transition-colors">💰 Sistem Ganjaran & Maskot</a></li>
                <li><a href="#testimoni" className="hover:text-white transition-colors">💬 Testimoni Ibu Bapa & Guru</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">❓ Soalan Lazim (FAQ)</a></li>
              </ul>
            </div>

          </div>

          {/* Bottom Copyright Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
            <div>
              © {new Date().getFullYear()} <strong>PintarTech</strong>. Hak Cipta Terpelihara.
            </div>
            <div className="flex items-center gap-6">
              <Link to="/" className="hover:text-slate-300 transition-colors">Utama PintarTech</Link>
              <a href="mailto:support@pintartech.my" className="hover:text-slate-300 transition-colors">support@pintartech.my</a>
              <a href="https://pintartech.my" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">pintartech.my</a>
            </div>
          </div>

        </div>
      </footer>

      {/* Mobile Floating CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur border-t border-slate-200 px-4 py-2.5 z-40 md:hidden shadow-lg flex items-center justify-between gap-3">
        <div>
          <span className="text-[10px] text-slate-400 line-through block leading-none">RM 69</span>
          <div className="text-lg font-extrabold text-teal-600 pmk-heading-font leading-tight">RM 39</div>
        </div>
        <button 
          onClick={() => { setCheckoutModalOpen(true); setPaymentSuccess(false); }}
          className="bg-amber-500 hover:bg-amber-600 text-white font-extrabold text-xs sm:text-sm px-5 py-2.5 rounded-xl pmk-shadow-3d-orange whitespace-nowrap active:translate-y-1 transition-all"
        >
          Beli Sekarang
        </button>
      </div>

      {/* Official Checkout & Payment Modal (ToyyibPay FPX Integration - Responsive Mobile Optimized) */}
      {checkoutModalOpen && (
        <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-md z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-lg w-full p-4 sm:p-7 shadow-2xl relative border-2 border-amber-300 my-auto max-h-[92vh] overflow-y-auto">
            
            {/* Close Button */}
            <button 
              onClick={() => setCheckoutModalOpen(false)}
              className="absolute top-3 right-3 bg-slate-100 hover:bg-slate-200 text-slate-600 w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center font-bold text-base sm:text-lg transition-colors z-10 cursor-pointer"
              aria-label="Tutup"
            >
              ✕
            </button>

            {!paymentSuccess ? (
              isSubmittingPayment ? (
                /* FULL DEDICATED LOADING & REDIRECTING SCREEN */
                <div className="py-10 px-4 text-center flex flex-col items-center justify-center animate-fadeIn">
                  {/* Glowing Animated Spinner & Icon */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 rounded-full border-4 border-amber-200 border-t-amber-500 animate-spin"></div>
                    <div className="absolute inset-0 flex items-center justify-center text-3xl">
                      💳
                    </div>
                  </div>

                  {/* Header Badge */}
                  <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-950 font-extrabold px-3.5 py-1 rounded-full text-xs uppercase tracking-wider mb-3 shadow-xs">
                    <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping"></span>
                    <span>Sedang Menjana Bil FPX...</span>
                  </div>

                  <h3 className="pmk-heading-font text-xl sm:text-2xl font-black text-slate-900 mb-2">
                    Membuka Gerbang Pembayaran ToyyibPay
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed mb-6">
                    Sila tunggu sebentar. Anda sedang dibawa secara automatik ke portal perbankan selamat <strong>ToyyibPay FPX</strong> untuk melengkapkan bayaran RM39...
                  </p>

                  {/* Animated Progress Bar */}
                  <div className="w-full max-w-xs bg-slate-100 h-2.5 rounded-full overflow-hidden mb-6 border border-slate-200 shadow-inner">
                    <div className="bg-gradient-to-r from-amber-500 via-teal-500 to-amber-500 h-full rounded-full animate-pulse w-full"></div>
                  </div>

                  {/* Security Assurance Badge */}
                  <div className="bg-teal-50 border border-teal-200 rounded-2xl p-3 text-xs text-teal-900 flex items-center justify-center gap-2 max-w-xs mx-auto font-bold shadow-xs">
                    <ShieldCheck size={18} className="text-teal-600 shrink-0" />
                    <span>Perlindungan Enkripsi SSL 256-Bit ToyyibPay</span>
                  </div>
                </div>
              ) : (
                <>
                  {/* Header Badge */}
                  <div className="text-center mb-3 pr-6 sm:pr-0">
                    <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black px-3 py-1 rounded-full text-[10px] sm:text-xs uppercase tracking-wider mb-2 shadow-xs">
                      <span>🛍️ BORANG PEMBELIAN & PENDAFTARAN RASMI</span>
                    </div>
                    <h3 className="pmk-heading-font text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                      PintarMathKids — Pakej Akses Seumur Hidup
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-600 mt-1">
                      Isikan maklumat anda di bawah untuk ke gerbang pembayaran selamat ToyyibPay FPX.
                    </p>
                  </div>

                  {/* Price Promotion Card (Mobile Responsive Layout) */}
                  <div className="bg-gradient-to-br from-amber-50 via-yellow-50/60 to-teal-50 p-3.5 sm:p-4 rounded-2xl border border-amber-200 mb-4 shadow-xs text-left">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                      <div>
                        <span className="text-[10px] sm:text-[11px] font-bold text-slate-500 line-through block">Harga Asal: RM 69</span>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="text-2xl sm:text-3xl font-black text-teal-600 pmk-heading-font">RM 39</span>
                          <span className="bg-rose-100 text-rose-700 text-[10px] font-black px-2 py-0.5 rounded-full uppercase whitespace-nowrap">
                            Diskaun RM 30
                          </span>
                        </div>
                      </div>
                      <div className="flex sm:flex-col items-center sm:items-end justify-between gap-1 border-t sm:border-t-0 pt-2 sm:pt-0 border-amber-200/80">
                        <span className="bg-amber-400/30 text-amber-900 border border-amber-300 font-extrabold text-[10px] sm:text-[11px] px-2.5 py-0.5 rounded-lg whitespace-nowrap">
                          🎉 Promosi Pelancaran
                        </span>
                        <span className="text-[10px] text-slate-500 whitespace-nowrap">Akses Seumur Hidup • Sekali Bayar</span>
                      </div>
                    </div>

                    {/* Included Highlights */}
                    <div className="mt-2.5 pt-2.5 border-t border-amber-200/80 grid grid-cols-2 gap-1.5 text-[10px] sm:text-[11px] text-slate-700 font-semibold">
                      <div className="flex items-center gap-1">
                        <span className="text-emerald-500 font-bold">✓</span>
                        <span>30 Mod Utama (6 Dunia)</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-amber-500 font-bold">🎁</span>
                        <span className="text-amber-900 font-extrabold">+20 Bonus Percuma</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-emerald-500 font-bold">✓</span>
                        <span>Jumlah 50 Koleksi Game</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-emerald-500 font-bold">✓</span>
                        <span>Dashboard & Sijil PDF</span>
                      </div>
                    </div>
                  </div>

                  {/* Error Alert Box */}
                  {paymentError && (
                    <div className="bg-rose-50 border border-rose-200 text-rose-700 text-xs p-2.5 sm:p-3 rounded-xl mb-3 font-bold text-center">
                      ⚠️ {paymentError}
                    </div>
                  )}

                  {/* Registration Form */}
                  <form onSubmit={handlePaymentSubmit} className="space-y-3 text-left">
                    <div>
                      <label className="block text-xs font-extrabold text-slate-800 mb-1">
                        Nama Penuh (Ibu Bapa / Guru): <span className="text-rose-500">*</span>
                      </label>
                      <input 
                        type="text" 
                        required 
                        value={parentName}
                        onChange={(e) => setParentName(e.target.value)}
                        placeholder="Cth: Ahmad Bin Abdullah" 
                        className="w-full px-3.5 py-2 sm:py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-xs sm:text-sm font-semibold text-slate-900 bg-slate-50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-extrabold text-slate-800 mb-1">
                        Alamat E-mel (Untuk Akses & Resit): <span className="text-rose-500">*</span>
                      </label>
                      <input 
                        type="email" 
                        required 
                        value={parentEmail}
                        onChange={(e) => setParentEmail(e.target.value)}
                        placeholder="Cth: e-mel.anda@gmail.com" 
                        className="w-full px-3.5 py-2 sm:py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-xs sm:text-sm font-semibold text-slate-900 bg-slate-50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-extrabold text-slate-800 mb-1">
                        Nombor Telefon / WhatsApp: <span className="text-rose-500">*</span>
                      </label>
                      <input 
                        type="tel" 
                        required 
                        value={parentPhone}
                        onChange={(e) => setParentPhone(e.target.value)}
                        placeholder="Cth: 0123456789" 
                        className="w-full px-3.5 py-2 sm:py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-xs sm:text-sm font-semibold text-slate-900 bg-slate-50"
                      />
                    </div>

                    {/* Submit Button */}
                    <button 
                      type="submit" 
                      disabled={isSubmittingPayment}
                      className="w-full bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500 hover:brightness-110 text-slate-950 font-black py-3.5 rounded-2xl shadow-lg transition-all text-xs sm:text-sm flex items-center justify-center gap-1.5 cursor-pointer pmk-shadow-3d-orange disabled:opacity-60 disabled:cursor-not-allowed mt-2"
                    >
                      <ShieldCheck size={18} className="text-slate-950 shrink-0" />
                      <span>Teruskan Ke Pembayaran FPX ToyyibPay (RM 39)</span>
                    </button>
                  </form>

                  {/* Security Guarantee Note */}
                  <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-center gap-1.5 text-[10px] sm:text-[11px] text-slate-500">
                    <ShieldCheck size={13} className="text-teal-600 shrink-0" />
                    <span>Pembayaran Selamat FPX / Online Banking ToyyibPay</span>
                  </div>
                </>
              )
            ) : (
              /* Success / Redirecting State */
              <div className="py-4 text-center">
                <div className="text-5xl sm:text-6xl mb-2 animate-bounce">🎉</div>
                <h4 className="pmk-heading-font text-xl sm:text-2xl font-black text-teal-600 mb-2">
                  Pendaftaran & Pembayaran Berjaya!
                </h4>
                
                <p className="text-xs sm:text-sm text-slate-700 font-medium mb-4 leading-relaxed max-w-md mx-auto">
                  Terima kasih {parentName ? <strong>{parentName}</strong> : 'kerana membuat pembelian'}! Akses penuh permainan <strong>Pintar Math Kids</strong> anda telah diaktifkan sepenuhnya.
                </p>

                {/* Email Notice Card */}
                <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-3.5 mb-5 text-left text-xs text-amber-950 space-y-1.5 shadow-xs">
                  <div className="flex items-center gap-2 font-bold text-amber-900 text-xs sm:text-sm">
                    <span>📩</span>
                    <span>Pautan Akses Dihantar Ke E-mel Anda</span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed pl-6">
                    Sila semak folder <strong>Inbox</strong> atau folder <strong>Spam / Junk Mail</strong> e-mel anda untuk menerima pautan khas akses kekal permainan.
                  </p>
                </div>

                {/* Direct Game Access Button */}
                <div className="space-y-2.5">
                  <a 
                    href="https://pintarmathkids.pages.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-emerald-500 via-teal-600 to-emerald-600 hover:brightness-110 text-white font-extrabold text-sm py-3.5 px-6 rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 pmk-shadow-3d-teal cursor-pointer"
                  >
                    <span>🎮</span>
                    <span>Klik Di Sini Untuk Mula Bermain Sekarang</span>
                    <span>➔</span>
                  </a>

                  <button 
                    onClick={() => setCheckoutModalOpen(false)}
                    className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs py-2.5 rounded-xl transition-colors cursor-pointer"
                  >
                    Tutup & Kembali Ke Laman Utama
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      )}

      {/* Interactive Certificate Preview Popup Modal */}
      {certModalOpen && (
        <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative text-center my-8 border-2 border-amber-300">
            
            <button 
              onClick={() => setCertModalOpen(false)}
              className="absolute top-4 right-4 bg-slate-100 hover:bg-slate-200 text-slate-600 w-9 h-9 rounded-full flex items-center justify-center font-bold text-lg transition-colors z-10 cursor-pointer"
            >
              ✕
            </button>

            {/* Modal Title */}
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 font-extrabold px-4 py-1.5 rounded-full text-xs uppercase tracking-wider mb-3">
              <Award size={16} className="text-amber-600" /> Modul Penjana Sijil Penghargaan
            </div>

            <h3 className="pmk-heading-font text-2xl sm:text-3xl font-extrabold text-slate-900 mb-1">
              Pratonton Sijil Pencapaian Anak
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-5">
              Sijil ini dijana secara automatik berdasarkan pencapaian modul anak. Kesemua teks terjemahan telah dibersihkan sepenuhnya.
            </p>

            {/* Student Name Input Box */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 mb-5 text-left">
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Tukar Nama Pada Sijil:
              </label>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  value={certName}
                  onChange={(e) => setCertName(e.target.value)}
                  placeholder="Masukkan Nama Anak..."
                  className="w-full px-4 py-2 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 font-bold text-slate-800"
                />
              </div>
            </div>

            {/* Certificate Preview Showcase in Modal */}
            <div className="my-2 rounded-2xl overflow-hidden border-2 border-teal-400 shadow-xl bg-slate-900/5">
              {!certImgError ? (
                <img 
                  src={certImgUrl} 
                  alt="Sijil Penghargaan PintarMathKids" 
                  className="w-full h-auto object-contain rounded-2xl max-h-[480px] mx-auto shadow-md block"
                  onError={() => {
                    if (certImgUrl.endsWith('.jpg')) {
                      setCertImgUrl('/pintarmathkids-cert-sample.png');
                    } else {
                      setCertImgError(true);
                    }
                  }}
                />
              ) : (
                <div className="bg-slate-900/90 border-2 border-dashed border-amber-300 p-8 rounded-2xl text-white flex flex-col items-center justify-center gap-2 shadow-md text-center">
                  <ImageIcon size={32} className="text-amber-300" />
                  <span className="font-extrabold text-sm text-amber-300">[ Slot Gambar Sijil Contoh ]</span>
                  <p className="text-xs text-slate-300 max-w-xs leading-relaxed">
                    Muat naik screenshot contoh sijil sebenar anda di `public/pintarmathkids-cert-sample.jpg`
                  </p>
                </div>
              )}
            </div>

            {/* Modal Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-5">
              <button 
                onClick={() => {
                  alert(`Sijil Penghargaan ${certName} sedia untuk dicetak dalam format PDF!`);
                  window.print();
                }}
                className="flex-1 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-extrabold text-sm py-3.5 rounded-2xl pmk-shadow-3d-orange hover:brightness-110 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Printer size={18} className="text-yellow-300" />
                <span>Cetak Sijil Penghargaan (PDF)</span>
              </button>
              <button 
                onClick={() => setCertModalOpen(false)}
                className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm px-6 py-3.5 rounded-2xl transition-colors cursor-pointer"
              >
                Kembali
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
