import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Gamepad2, 
  Check, 
  ShoppingBag, 
  Smartphone, 
  Smile
} from 'lucide-react';

export default function PintartechEduGames() {
  const gamesList = [
    {
      id: 'arabic-kids',
      title: 'Pintar Arabic Kids',
      subtitle: 'Permainan Bahasa Arab Interaktif Kanak-Kanak',
      badge: 'Bestseller Edu Game',
      badgeColor: '#f43f5e',
      age: 'Umur 4 - 12 Tahun',
      format: 'Pautan Web / Mesra Telefon & Tablet',
      iconBg: '#fff1f2',
      iconColor: '#f43f5e',
      borderColor: '#fecdd3',
      linkTarget: '/pintararabickids',
      description: 'Direka khas untuk menarik minat kanak-kanak mengenali Bahasa Arab sejak awal melalui kaedah permainan warna, animasi, audio sebutan & padanan gambar.',
      highlights: [
        'Mengenal Huruf Hijaiyah & Kosa Kata Asas (Mufradat)',
        'Audio Sebutan Jelas & Animasi Visual Menarik',
        'Sistem Markah & Bintang Pengukuhan Diri',
        'Boleh Dimainkan Bila-Bila Masa Di Mana Jua'
      ]
    },
    {
      id: 'pintar-jawi',
      title: 'Pintar Jawi Kids',
      subtitle: 'Permainan Penguasaan Jawi Interaktif',
      badge: 'Pendidikan Asas Jawi',
      badgeColor: '#7c3aed',
      age: 'Umur 5 - 12 Tahun',
      format: 'Pautan Web / Mesra Komputer & Tablet',
      iconBg: '#f5f3ff',
      iconColor: '#7c3aed',
      borderColor: '#ddd6fe',
      linkTarget: '/pintarjawikids',
      description: 'Membantu kanak-kanak menguasai kemahiran mengenal, mengeja, dan menyambung huruf Jawi dengan seronok secara gamifikasi.',
      highlights: [
        'Mengenal Huruf Jawi Tunggal & Sambung',
        'Latihan Padanan Ejaan Rumi ke Jawi',
        'Permainan Memadankan Gambar & Perkataan',
        'Meningkatkan Penguasaan Pelajaran Agama Islam'
      ]
    },
    {
      id: 'pintar-math',
      title: 'Pintar Math Kids',
      subtitle: 'Permainan Matematik Awal Prasekolah Interaktif',
      badge: 'Pendidikan Matematik',
      badgeColor: '#d97706',
      age: 'Umur 4 - 7 Tahun',
      format: 'Pautan Web / Mesra Telefon, Tablet & PC',
      iconBg: '#fffbe3',
      iconColor: '#d97706',
      borderColor: '#fde68a',
      linkTarget: '/pintarmathkids',
      description: 'Membantu kanak-kanak membina asas matematik awal melalui aktiviti permainan yang interaktif, menyeronokkan dan sesuai mengikut tahap perkembangan mereka.',
      highlights: [
        '30 Mod Permainan + Bonus 20 Tambahan (Total 50 Permainan Sepanjang Promo)',
        'Asas Pengiraan: Tambah, Tolak, Pecahan & Logik Kod',
        'Belajar Membilang, Bentuk, Pola, Wang, Jam, Graf & Banyak Lagi',
        'Dwi-Bahasa: Bahasa Melayu & English (100% Offline Ready)'
      ]
    }
  ];

  return (
    <section id="edugames" className="bg-games-pattern" style={{ padding: '5.5rem 0', position: 'relative' }}>
      <div className="container">
        
        {/* Title */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.45rem 1.1rem',
            borderRadius: '9999px',
            backgroundColor: '#fff1f2',
            border: '1px solid #fecdd3',
            color: '#e11d48',
            fontSize: '0.88rem',
            fontWeight: '700',
            marginBottom: '1rem'
          }}>
            <Gamepad2 size={18} /> Katalog Produk Edu Games PintarTech
          </div>

          <h2 style={{ fontSize: '2.4rem', fontWeight: '800', color: '#0f172a', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
            Permainan Pendidikan Digital Interaktif Untuk Anak-Anak & Pelajar
          </h2>

          <p style={{ fontSize: '1.05rem', color: '#334155', lineHeight: '1.65' }}>
            Koleksi permainan pendidikan (*Edu Games*) interaktif kami direka khas untuk menjadikan proses pembelajaran Bahasa Arab, Jawi, dan Matematik jauh lebih menarik dan efektif.
          </p>
        </div>

        {/* Edu Games Showcase Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem'
        }}>
          {gamesList.map((game) => (
            <div
              key={game.id}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '24px',
                border: `2px solid ${game.borderColor}`,
                padding: '2.2rem 2rem',
                boxShadow: '0 12px 30px rgba(0, 0, 0, 0.04)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = `0 20px 40px ${game.iconColor}22`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.04)';
              }}
            >
              <div>
                {/* Header Badge */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <div style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '16px',
                    backgroundColor: game.iconBg,
                    color: game.iconColor,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Gamepad2 size={28} />
                  </div>

                  <span style={{
                    fontSize: '0.78rem',
                    fontWeight: '800',
                    padding: '0.35rem 0.85rem',
                    borderRadius: '9999px',
                    backgroundColor: game.iconBg,
                    color: game.badgeColor,
                    border: `1px solid ${game.borderColor}`
                  }}>
                    {game.badge}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 style={{ fontSize: '1.45rem', fontWeight: '800', color: '#0f172a', marginBottom: '0.25rem' }}>
                  {game.title}
                </h3>
                <div style={{ fontSize: '0.88rem', fontWeight: '700', color: game.iconColor, marginBottom: '1rem' }}>
                  {game.subtitle}
                </div>

                {/* Target Age & Format */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.4rem',
                  backgroundColor: '#f8fafc',
                  padding: '0.85rem 1rem',
                  borderRadius: '14px',
                  fontSize: '0.82rem',
                  fontWeight: '600',
                  color: '#475569',
                  marginBottom: '1.25rem',
                  border: '1px solid #e2e8f0'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Smile size={15} style={{ color: game.iconColor }} /> {game.age}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Smartphone size={15} style={{ color: game.iconColor }} /> {game.format}
                  </div>
                </div>

                {/* Description */}
                <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                  {game.description}
                </p>

                {/* Highlights */}
                <div style={{ marginBottom: '2rem' }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: '700', color: '#0f172a', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
                    Kelebihan & Ciri Permainan:
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {game.highlights.map((item, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem', fontSize: '0.88rem', color: '#334155' }}>
                        <div style={{ width: '18px', height: '18px', borderRadius: '50%', backgroundColor: game.iconBg, color: game.iconColor, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '3px' }}>
                          <Check size={12} fontWeight="bold" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button Link */}
              <div>
                <Link
                  to={game.linkTarget}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.6rem',
                    width: '100%',
                    backgroundColor: game.iconColor,
                    color: '#ffffff',
                    padding: '0.9rem',
                    borderRadius: '14px',
                    fontWeight: '700',
                    fontSize: '0.98rem',
                    textDecoration: 'none',
                    boxShadow: `0 6px 18px ${game.iconColor}25`
                  }}
                >
                  <ShoppingBag size={18} />
                  Dapatkan Permainan Ini
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
