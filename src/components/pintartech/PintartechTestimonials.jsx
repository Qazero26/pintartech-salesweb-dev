import React from 'react';
import { Star, MessageSquare } from 'lucide-react';

export default function PintartechTestimonials() {
  const reviews = [
    {
      name: 'Puan Hafizah Radzi',
      role: 'Eksekutif Pentadbiran & Kewangan',
      tag: 'Peserta Kelas Excel',
      comment: 'Sebelum ini selalu pening nak buat laporan bulanan secara manual. Selepas sertai kelas Excel PintarTech, saya dah pandai bina dashboard otomatik dengan XLOOKUP & Pivot Table. Kerja 3 hari siap dalam 2 jam!',
      rating: 5,
      avatarBg: '#fffbe3',
      avatarColor: '#d97706'
    },
    {
      name: 'Encik Amirul Asyraf',
      role: 'Pengurus Operasi Perniagaan',
      tag: 'Peserta Kelas AppSheet',
      comment: 'Bengkel AppSheet memang mencerahkan fikiran! Saya berjaya hasilkan app pengurusan stok & kehadiran staf syarikat sendiri tanpa bayar beribu ringgit kepada pembangun perisian.',
      rating: 5,
      avatarBg: '#f5f3ff',
      avatarColor: '#7c3aed'
    },
    {
      name: 'Ustaz Ahmad Syukri',
      role: 'Guru STAM & Pengajian Islam',
      tag: 'Pengguna TafsirBot STAM',
      comment: 'TafsirBot STAM sangat membantu anak-anak murid saya mencari jawapan tafsir dan ulang kaji nota di Telegram. Sangat pantas, tersusun dan memudahkan persiapan peperiksaan STAM.',
      rating: 5,
      avatarBg: '#e8f5fe',
      avatarColor: '#0088cc'
    },
    {
      name: 'Cikgu Farah Nabilah',
      role: 'Pendidik Sekolah Rendah',
      tag: 'Pengguna Edu Games',
      comment: 'Modul Edu Games PintarTech menjadikan kelas saya sangat meriah! Murid-murid teruja nak jawab kuis dan belajar secara bersaing dalam suasana penuh gelak tawa.',
      rating: 5,
      avatarBg: '#fff1f2',
      avatarColor: '#f43f5e'
    }
  ];

  return (
    <section style={{ padding: '5rem 0', backgroundColor: '#f8fafc', position: 'relative' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.4rem 1rem',
            borderRadius: '9999px',
            backgroundColor: '#eff6ff',
            color: '#2563eb',
            fontSize: '0.85rem',
            fontWeight: '700',
            marginBottom: '1rem'
          }}>
            <MessageSquare size={16} /> Suara Peserta & Pengguna
          </div>

          <h2 style={{ fontSize: '2.3rem', fontWeight: '800', color: '#0f172a', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
            Apa Kata Mereka Yang Telah Bersama PintarTech?
          </h2>

          <p style={{ fontSize: '1.05rem', color: '#64748b', lineHeight: '1.6' }}>
            Maklum balas sebenar daripada peserta kelas Excel, AppSheet, pendidik Edu Games, dan pengguna TafsirBot STAM.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          {reviews.map((rev, i) => (
            <div
              key={i}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '24px',
                padding: '2rem',
                border: '1px solid #e2e8f0',
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.03)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
            >
              <div>
                {/* Quote icon & Tag */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: '800',
                    padding: '0.3rem 0.75rem',
                    borderRadius: '9999px',
                    backgroundColor: rev.avatarBg,
                    color: rev.avatarColor
                  }}>
                    {rev.tag}
                  </span>
                  <div style={{ display: 'flex', gap: '0.25rem' }}>
                    {[...Array(rev.rating)].map((_, r) => (
                      <Star key={r} size={16} fill="#f59e0b" color="#f59e0b" />
                    ))}
                  </div>
                </div>

                {/* Comment */}
                <p style={{ fontSize: '0.95rem', color: '#334155', lineHeight: '1.65', fontStyle: 'italic', marginBottom: '1.5rem' }}>
                  "{rev.comment}"
                </p>
              </div>

              {/* Author info */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', paddingTop: '1rem', borderTop: '1px solid #f1f5f9' }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  backgroundColor: rev.avatarBg,
                  color: rev.avatarColor,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '800',
                  fontSize: '1.1rem'
                }}>
                  {rev.name.charAt(0)}
                </div>
                <div>
                  <div style={{ fontSize: '0.98rem', fontWeight: '800', color: '#0f172a' }}>{rev.name}</div>
                  <div style={{ fontSize: '0.82rem', color: '#64748b' }}>{rev.role}</div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
