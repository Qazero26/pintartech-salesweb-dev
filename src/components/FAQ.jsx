import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqItems = [
    {
      q: 'Adakah kandungan Tafsir Bot ini mengikut Silibus STAM terbaharu?',
      a: 'Ya, 100%! Semua kandungan jawapan tafsir, mufradat, perbahasan dari sudut bahasa, dan lebih 2,500+ bank soalan kuiz dikemaskini berdasarkan sukatan pelajaran rasmi Tafsir wa Ulumuhu Sijil Tinggi Agama Malaysia (STAM) yang terbaharu (termasuk Surah Az-Zariyat, Al-Hadid, An-Najm, Al-Rahman dan Al-Waqi\'ah).'
    },
    {
      q: 'Berapakah jumlah bank soalan kuiz dan apakah skop yang diuji?',
      a: 'Tafsir Bot mengandungi lebih 2,500+ bank soalan kuiz komprehensif yang dirangka khas untuk menguji calon STAM sama ada aspek Mufradat (kosa kata), Pengajaran Ayat, Tafsir, Perbincangan Bahasa (Nahu, Sorf & Balagah), serta soalan Kemahiran Berfikir Aras Tinggi (KBAT). Setiap soalan disertakan pemasa bertimer dan penerangan jawapan automatik.'
    },
    {
      q: 'Bagaimanakah RAG Gemini 3.1 AI mengelakkan isu halusinasi atau jawapan rekaan?',
      a: 'Tafsir Bot diintegrasikan dengan teknologi "File Search Store" rasmi yang dimuatkan dengan dokumen kitab rujukan STAM. Setiap kali soalan dikemukakan, AI akan merujuk terus pangkalan fail rujukan tersebut terlebih dahulu sebelum menjana jawapan, menjamin ketepatan 100% tanpa rekaan.'
    },
    {
      q: 'Bagaimanakah saya boleh mencuba bot ini secara percuma?',
      a: 'Anda boleh terus menekan butang "Mula Percuma" di laman web ini atau buka Telegram dan cari username @Ustaimantafsirbot. Tekan /start dan anda akan diberikan 3 soalan AI percuma untuk menguji sendiri kehebatan Ustaz Aiman AI.'
    },
    {
      q: 'Bagaimanakah proses langganan dan pengaktifan akaun berbayar?',
      a: 'Apabila kuota percuma tamat atau anda ingin melanggan pelan pilihan, anda boleh membuat pembayaran secara terus dan selamat melalui Payment Gateway rasmi (FPX Online Banking) dengan enkripsi 256-bit SSL. Tiada pemindahan manual atau resit diperlukan — akaun dan akses penuh bot anda akan diaktifkan secara automatik serta-merta sejurus transaksi berjaya!'
    },
    {
      q: 'Adakah saya memerlukan peranti komputer atau telefon sahaja sudah cukup?',
      a: 'Tidak perlu komputer! Bot ini beroperasi terus di dalam aplikasi Telegram pada sebarang telefon pintar (Android, iPhone, Tablet). Anda boleh mengulang kajian di mana sahaja dan pada bila-bila masa 24 jam sehari.'
    },
    {
      q: 'Apakah perbezaan antara fungsi /kuiz, /duel, dan /flashcards?',
      a: 'Fungsi `/kuiz` membolehkan anda menjawab soalan objektif kendiri bertimer daripada 2,500+ bank soalan kuiz. Fungsi `/duel` membolehkan anda mencabar rakan sekelas secara live untuk berentap kuiz. Manakala `/flashcards` ialah modul kad imbasan kosa kata Arab-Arab-Melayu untuk memudahkan hafalan mufradat.'
    }
  ];

  return (
    <section id="faq" className="bg-light-pattern" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '850px' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="badge-pill" style={{ marginBottom: '1rem' }}>
            <HelpCircle size={16} />
            <span>Soalan Lazim Calon STAM</span>
          </div>
          <h2 style={{
            fontSize: 'clamp(2rem, 3.2vw, 2.8rem)',
            fontWeight: 800,
            color: 'var(--indigo-900)',
            marginBottom: '1rem'
          }}>
            Ada Soalan? <span className="gradient-text-indigo">Kami Ada Jawapannya</span>
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            Jawapan pantas untuk semua musykil anda mengenai Tafsir Bot STAM.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="clean-card"
                style={{
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  border: isOpen ? '2px solid var(--indigo-600)' : '1px solid var(--border-light)',
                  transition: 'all 0.3s ease'
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  style={{
                    width: '100%',
                    padding: '1.25rem 1.5rem',
                    background: 'none',
                    border: 'none',
                    color: 'var(--indigo-950)',
                    fontSize: '1.05rem',
                    fontWeight: 800,
                    textAlign: 'left',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem'
                  }}
                >
                  <span>{item.q}</span>
                  <ChevronDown
                    size={20}
                    color="var(--indigo-600)"
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease',
                      flexShrink: 0
                    }}
                  />
                </button>

                {isOpen && (
                  <div style={{
                    padding: '0 1.5rem 1.25rem 1.5rem',
                    color: 'var(--text-secondary)',
                    fontSize: '0.95rem',
                    lineHeight: 1.7,
                    borderTop: '1px solid var(--border-light)',
                    paddingTop: '1rem'
                  }}>
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
