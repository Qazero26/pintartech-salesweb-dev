import React from 'react';
import { Check, Sparkles, Send, ShieldCheck, Zap, Lock, Landmark, CheckCircle2 } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Pelan 7 Hari',
      price: 'RM10',
      originalPrice: 'RM15',
      discountTag: 'JIMAT RM5',
      period: 'Seminggu Akses Penuh',
      popular: false,
      badge: 'Cubaan Mingguan',
      features: [
        'Tanpa Had Soalan AI 24/7',
        '2,500+ Bank Soalan Kuiz & Timer (KBAT)',
        'Mod Cabaran Duel (/duel)',
        'Kad Imbasan Flashcard Lengkap',
        'Papan Pendahulu (Leaderboard)'
      ],
      ctaText: 'Langgan RM10',
      link: 'https://t.me/Ustaimantafsirbot?start=plan_7'
    },
    {
      name: 'Pelan 30 Hari (Bulanan)',
      price: 'RM25',
      originalPrice: 'RM30',
      discountTag: 'DISKAUN 17% • JIMAT RM5',
      period: 'Sebulan Akses Penuh',
      popular: true,
      badge: 'Paling Popular ⭐',
      features: [
        'Tanpa Had Soalan AI Ustaz Aiman 24/7',
        '2,500+ Bank Soalan Kuiz (Mufradat, Tafsir & KBAT)',
        'Akses Semua Surah Kitab Tafsir STAM',
        'Kad Prestasi Visual & Graf (/mystats)',
        'Notifikasi Mufradat Harian Automatik',
        'Bookmark Nota Peribadi Tanpa Had'
      ],
      ctaText: 'Pilih Pelan RM25',
      link: 'https://t.me/Ustaimantafsirbot?start=plan_30'
    },
    {
      name: 'Pelan 60 Hari (2 Bulan)',
      price: 'RM45',
      originalPrice: 'RM60',
      discountTag: 'DISKAUN 25% • JIMAT RM15',
      period: '2 Bulan Akses Penuh',
      popular: false,
      badge: 'Pilihan Jimat',
      features: [
        'Semua Ciri Akses Pelan Bulanan',
        'Akses Penuh 2,500+ Bank Soalan & AI 24/7',
        'Penjimatan berganda untuk 2 bulan',
        'Ulangkaji Konsisten Sebelum Peperiksaan'
      ],
      ctaText: 'Langgan RM45',
      link: 'https://t.me/Ustaimantafsirbot?start=plan_60'
    },
    {
      name: 'Pelan 90 Hari (3 Bulan)',
      price: 'RM60',
      originalPrice: 'RM90',
      discountTag: 'DISKAUN 33% • JIMAT RM30',
      period: 'Persediaan Peperiksaan',
      popular: false,
      badge: 'Penjimatan Besar',
      features: [
        'Semua Ciri Pelan Bulanan',
        'Akses 2,500+ Bank Soalan Kuiz Terlengkap',
        'Sesuai untuk persediaan Peperiksaan STAM',
        'Jimat RM30 berbanding langganan biasa'
      ],
      ctaText: 'Langgan RM60',
      link: 'https://t.me/Ustaimantafsirbot?start=plan_90'
    },
    {
      name: 'Pelan 180 Hari (6 Bulan)',
      price: 'RM100',
      originalPrice: 'RM180',
      discountTag: 'DISKAUN 44% • JIMAT RM80',
      period: '6 Bulan Akses Penuh',
      popular: false,
      badge: 'Pakej Semester',
      features: [
        'Akses Penuh Selama 6 Bulan Sesi Persekolahan',
        'Semua Kemas Kini 2,500+ Bank Soalan & AI 24/7',
        'Penjimatan Hebat RM80 untuk Calon STAM',
        'Sokongan Admin Keutamaan (Priority)'
      ],
      ctaText: 'Langgan RM100',
      link: 'https://t.me/Ustaimantafsirbot?start=plan_180'
    },
    {
      name: 'Pelan 1 Tahun (365 Hari)',
      price: 'RM180',
      originalPrice: 'RM360',
      discountTag: 'DISKAUN 50% • JIMAT RM180',
      period: 'Setahun Akses VIP',
      popular: false,
      badge: 'Diskaun Separuh Harga',
      features: [
        'Akses VIP Sepanjang Tahun (365 Hari)',
        'Semua Kemas Kini & Tambahan Surah Baharu',
        'Prioriti Respon AI Paling Pantas',
        'Status VIP Telegram Badge'
      ],
      ctaText: 'Dapatkan RM180',
      link: 'https://t.me/Ustaimantafsirbot?start=plan_365'
    }
  ];

  return (
    <section id="harga" className="bg-dark-pattern" style={{
      padding: '6.5rem 0',
      color: '#ffffff',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
          <div className="badge-pill" style={{ background: 'rgba(34, 158, 217, 0.18)', border: '1px solid rgba(34, 158, 217, 0.45)', color: '#38bdf8', marginBottom: '1rem' }}>
            <Sparkles size={16} />
            <span>Tawaran Diskaun Terhad STAM</span>
          </div>
          <h2 style={{
            fontSize: 'clamp(2rem, 3.2vw, 2.8rem)',
            fontWeight: 800,
            color: '#ffffff',
            marginBottom: '1rem'
          }}>
            Pilih Pelan Langganan <span className="gradient-text-telegram">Tafsir Bot STAM</span>
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#94a3b8', lineHeight: 1.7 }}>
            Nikmati harga diskaun promosi khas calon STAM! Pilih pelan langganan mengikut keperluan ulangkaji anda dengan akses penuh.
          </p>
        </div>

        {/* Pricing Cards Grid (Symmetrical 6 Plans) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.75rem',
          alignItems: 'stretch'
        }}>
          {plans.map((plan, idx) => (
            <div
              key={idx}
              style={{
                padding: '2.25rem 1.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                borderRadius: 'var(--radius-lg)',
                background: plan.popular ? 'linear-gradient(180deg, rgba(34, 158, 217, 0.28) 0%, #17212b 100%)' : 'rgba(23, 33, 43, 0.95)',
                border: plan.popular ? '2.5px solid #229ED9' : '1px solid rgba(255, 255, 255, 0.12)',
                transform: plan.popular ? 'scale(1.03)' : 'none',
                boxShadow: plan.popular ? '0 15px 35px rgba(34, 158, 217, 0.35)' : '0 8px 24px rgba(0,0,0,0.4)',
                backdropFilter: 'blur(12px)',
                transition: 'all 0.3s ease'
              }}
            >
              {plan.popular && (
                <div style={{
                  position: 'absolute',
                  top: '-14px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'linear-gradient(135deg, #0088cc 0%, #229ED9 100%)',
                  color: '#ffffff',
                  padding: '4px 16px',
                  borderRadius: '9999px',
                  fontSize: '0.78rem',
                  fontWeight: 800,
                  boxShadow: '0 4px 12px rgba(34, 158, 217, 0.5)',
                  whiteSpace: 'nowrap'
                }}>
                  {plan.badge}
                </div>
              )}

              <div>
                {/* Header */}
                <div style={{ marginBottom: '1.25rem', textAlign: 'center' }}>
                  <span className="badge-pill" style={{
                    fontSize: '0.75rem',
                    background: plan.popular ? 'rgba(56, 189, 248, 0.2)' : 'rgba(255, 255, 255, 0.08)',
                    color: plan.popular ? '#38bdf8' : '#cbd5e1',
                    border: '1px solid rgba(255,255,255,0.15)',
                    marginBottom: '0.75rem'
                  }}>
                    {plan.badge}
                  </span>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem' }}>
                    {plan.name}
                  </h3>
                  <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '0.4rem' }}>
                    <span style={{ fontSize: '2.4rem', fontWeight: 800, color: plan.popular ? '#38bdf8' : '#ffffff' }}>
                      {plan.price}
                    </span>
                    {plan.originalPrice && (
                      <span style={{ fontSize: '1.1rem', color: '#64748b', textDecoration: 'line-through', fontWeight: 600 }}>
                        {plan.originalPrice}
                      </span>
                    )}
                  </div>
                  {plan.discountTag && (
                    <div style={{
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      color: plan.popular ? '#38bdf8' : '#f59e0b',
                      marginTop: '0.25rem'
                    }}>
                      {plan.discountTag}
                    </div>
                  )}
                  <div style={{ fontSize: '0.82rem', color: '#94a3b8', fontWeight: 600, marginTop: '0.25rem' }}>
                    {plan.period}
                  </div>
                </div>

                {/* Features List */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  paddingTop: '1.25rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                  marginBottom: '1.75rem'
                }}>
                  {plan.features.map((feat, fIdx) => (
                    <div key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.88rem', color: '#e2e8f0' }}>
                      <CheckCircle2 size={16} color="#38bdf8" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <a
                href={plan.link}
                target="_blank"
                rel="noopener noreferrer"
                className={plan.popular ? 'btn-primary' : 'btn-secondary'}
                style={{
                  width: '100%',
                  padding: '0.85rem',
                  fontSize: '0.92rem',
                  justifyContent: 'center',
                  background: plan.popular ? 'linear-gradient(135deg, #0088cc 0%, #229ED9 100%)' : 'rgba(255,255,255,0.08)',
                  color: '#ffffff',
                  border: plan.popular ? 'none' : '1px solid rgba(255,255,255,0.2)'
                }}
              >
                <Send size={16} />
                <span>{plan.ctaText}</span>
              </a>
            </div>
          ))}
        </div>

        {/* Secure Payment Gateway Trust Box */}
        <div style={{
          marginTop: '4rem',
          padding: '1.75rem',
          borderRadius: 'var(--radius-xl)',
          background: 'rgba(15, 23, 42, 0.8)',
          border: '1px solid rgba(56, 189, 248, 0.3)',
          boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          maxWidth: '750px',
          margin: '4rem auto 0 auto'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#38bdf8', fontWeight: 800, fontSize: '1.1rem', marginBottom: '0.5rem' }}>
            <Lock size={22} color="#38bdf8" />
            <span>Pembayaran Dipercayai & Selamat (Payment Gateway)</span>
          </div>
          <p style={{ fontSize: '0.9rem', color: '#cbd5e1', lineHeight: 1.6, marginBottom: '1rem', maxWidth: '620px' }}>
            Transaksi pembayaran diproses secara selamat melalui <strong>Payment Gateway Rasmi (FPX Online Banking)</strong> dengan penyulitan <strong>256-bit SSL Security</strong>. Akses bot akan diaktifkan secara automatik selepas pembayaran disahkan.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.25rem', color: '#94a3b8', fontSize: '0.82rem', fontWeight: 700 }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <ShieldCheck size={16} color="#38bdf8" /> 100% Secure Checkout
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Landmark size={16} color="#38bdf8" /> Perbankan FPX Online Banking
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Zap size={16} color="#38bdf8" /> Pengaktifan Automatik
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
