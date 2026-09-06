import React, { useState } from 'react';
import { MessageSquare, RotateCw, CheckCircle2, HelpCircle, Sparkles, Send, Award, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function InteractiveDemo() {
  const [activeTab, setActiveDemoTab] = useState('chat');

  // Chat Demo State
  const [selectedChatQ, setSelectedChatQ] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  const sampleQuestions = [
    {
      q: 'Apakah pengajaran utama daripada Surah Az-Zariyat ayat 56?',
      arabic: 'وَمَا خَلَقْتُ الْجِنَّ وَالْإِنْسَ إِلَّا لِيَعْبُدُونِ',
      ans: 'Pengajaran utama ayat ini ialah:\n\n1. **Tujuan Hakiki Ciptaan**: Allah SWT menciptakan jin dan manusia semata-mata untuk mengabdikan diri dan beribadah kepada-Nya.\n2. **Kesesuaian Fitrah**: Ibadah bukan sekadar rukun ritual, tetapi merangkumi seluruh tatacara kehidupan yang mematuhi syariat Allah.\n3. **Kekayaan Allah**: Allah tidak memerlukan rezeki atau makanan daripada hamba-Nya, sebaliknya Allah yang memberi rezeki.',
      source: 'Kitab Tafsir STAM - Surah Az-Zariyat (Ayat 56)'
    },
    {
      q: 'Apakah maksud mufradat "فَفِرُّوا إِلَى اللَّهِ"?',
      arabic: 'فَفِرُّوا إِلَى اللَّهِ ۖ إِنِّي لَكُمْ مِنْهُ نَذِيرٌ مُبِينٌ',
      ans: 'Maksud **"فَفِرُّوا إِلَى اللَّهِ"** ialah:\n\n* "Maka berlarilah (kembalilah) kamu dengan bersegera kepada Allah SWT."*\n\n📖 **Huraian Tafsir:**\nAyat ini menggesa hamba Allah supaya secepat mungkin meninggalkan maksiat dan kembali bertaubat serta berpegang teguh dengan tauhid dan ketaatan kepada Allah.',
      source: 'Kitab Tafsir STAM - Surah Az-Zariyat (Ayat 50)'
    },
    {
      q: 'Apakah Asbabun Nuzul Surah Al-Rahman?',
      arabic: 'الرَّحْمَٰنُ عَلَّمَ الْقُرْآنَ',
      ans: 'Asbabun Nuzul Surah Al-Rahman:\\n\\n• Diriwayatkan bahawa orang-orang musyrikin Makkah berkata: \"Apakah Al-Rahman itu?\" Mereka mengingkari sifat Al-Rahman bagi Allah SWT.\\n• Maka Allah menurunkan surah ini untuk memperkenalkan sifat Ar-Rahman dan menghitung nikmat-nikmat-Nya kepada manusia dan jin.',
      source: 'Kitab Tafsir STAM - Surah Al-Rahman (Ayat 1-4)'
    }
  ];

  const handleSelectQuestion = (index) => {
    setIsTyping(true);
    setSelectedChatQ(index);
    setTimeout(() => {
      setIsTyping(false);
    }, 600);
  };

  // Flashcards Demo State
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const flashcardsData = [
    {
      arabic: 'الذَّارِيَاتِ',
      transliteration: 'Al-Zariyat',
      meaning: 'Angin yang menerbangkan atau menerbangkan debu',
      example: 'وَالذَّارِيَاتِ ذَرْوًا - Demi angin yang menerbangkan debu dengan menerbangkannya.',
      surah: 'Surah Az-Zariyat (Ayat 1)'
    },
    {
      arabic: 'الْحَامِلَاتِ وِقْرًا',
      transliteration: 'Al-Hamilati Wiqra',
      meaning: 'Awan yang membawa muatan air yang berat',
      example: 'فَالْحَامِلَاتِ وِقْرًا - Dan demi awan yang membawa muatan air hujan.',
      surah: 'Surah Az-Zariyat (Ayat 2)'
    },
    {
      arabic: 'الْمُوَسِّعُونَ',
      transliteration: 'Al-Muwasi\'un',
      meaning: 'Yang Maha Meluaskan (kekuasaan & alam semesta)',
      example: 'وَالسَّمَاءَ بَنَيْنَاهَا بِأَيْدٍ وَإِنَّا لَمُوَسِّعُونَ - Dan langit Kami binalah ia dengan kekuasaan Kami dan sesungguhnya Kami meluaskannya.',
      surah: 'Surah Az-Zariyat (Ayat 47)'
    }
  ];

  // Quiz Demo State
  const [selectedQuizOpt, setSelectedQuizOpt] = useState(null);
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const quizQuestion = {
    q: 'Apakah perkataan yang membawa maksud "awan yang membawa bebanan air hujan yang berat" dalam Surah Az-Zariyat?',
    options: [
      { id: 'A', text: 'وَالذَّارِيَاتِ ذَرْوًا', correct: false },
      { id: 'B', text: 'فَالْحَامِلَاتِ وِقْرًا', correct: true },
      { id: 'C', text: 'فَالْجَارِيَاتِ يُسْرًا', correct: false },
      { id: 'D', text: 'فَالْمُقَسِّمَاتِ أَمْرًا', correct: false }
    ],
    explanation: 'Betul! "فَالْحَامِلَاتِ وِقْرًا" bermaksud awan yang membawa kandungan air hujan yang tebal dan berat sebagai tanda rahmat Allah.'
  };

  const handleSelectQuizOption = (opt) => {
    setSelectedQuizOpt(opt);
    setQuizSubmitted(true);
    if (opt.correct) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const handleResetQuiz = () => {
    setSelectedQuizOpt(null);
    setQuizSubmitted(false);
  };

  return (
    <section id="demo" style={{ padding: '6rem 0', background: 'var(--bg-dark-secondary)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3rem auto' }}>
          <div className="badge-pill badge-gold" style={{ marginBottom: '1rem' }}>
            <Sparkles size={16} />
            <span>Cuba Sendiri Tanpa Daftar</span>
          </div>
          <h2 style={{
            fontSize: 'clamp(2rem, 3.2vw, 2.8rem)',
            fontWeight: 800,
            color: '#ffffff',
            marginBottom: '1rem'
          }}>
            Simulator <span className="gradient-text-gold">Tafsir Bot Live</span>
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-sub)' }}>
            Uji sendiri ciri-ciri canggih Tafsir Bot STAM di bawah secara terus dalam pelayar anda!
          </p>
        </div>

        {/* Tab Navigation */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          marginBottom: '2.5rem',
          flexWrap: 'wrap'
        }}>
          <button
            onClick={() => setActiveDemoTab('chat')}
            style={{
              padding: '0.75rem 1.5rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid',
              borderColor: activeTab === 'chat' ? 'var(--emerald-500)' : 'var(--border-card)',
              background: activeTab === 'chat' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(255, 255, 255, 0.03)',
              color: activeTab === 'chat' ? '#ffffff' : 'var(--text-muted)',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.3s ease'
            }}
          >
            <MessageSquare size={18} />
            <span>Tutor AI Ustaz Aiman</span>
          </button>

          <button
            onClick={() => setActiveDemoTab('flashcards')}
            style={{
              padding: '0.75rem 1.5rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid',
              borderColor: activeTab === 'flashcards' ? 'var(--gold-500)' : 'var(--border-card)',
              background: activeTab === 'flashcards' ? 'rgba(245, 158, 11, 0.2)' : 'rgba(255, 255, 255, 0.03)',
              color: activeTab === 'flashcards' ? '#ffffff' : 'var(--text-muted)',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.3s ease'
            }}
          >
            <RotateCw size={18} />
            <span>Kad Imbasan Mufradat</span>
          </button>

          <button
            onClick={() => setActiveDemoTab('quiz')}
            style={{
              padding: '0.75rem 1.5rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid',
              borderColor: activeTab === 'quiz' ? 'var(--emerald-500)' : 'var(--border-card)',
              background: activeTab === 'quiz' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(255, 255, 255, 0.03)',
              color: activeTab === 'quiz' ? '#ffffff' : 'var(--text-muted)',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.3s ease'
            }}
          >
            <Award size={18} />
            <span>Kuiz STAM & Timer</span>
          </button>
        </div>

        {/* Tab Content 1: Chat Simulator */}
        {activeTab === 'chat' && (
          <div style={{
            maxWidth: '900px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1.5fr',
            gap: '2rem'
          }} className="demo-grid">
            
            {/* Question Preset Selector */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>
                Pilih Soalan Contoh STAM:
              </div>
              {sampleQuestions.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectQuestion(idx)}
                  style={{
                    padding: '1rem',
                    borderRadius: 'var(--radius-md)',
                    background: selectedChatQ === idx ? 'rgba(16, 185, 129, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid',
                    borderColor: selectedChatQ === idx ? 'var(--emerald-500)' : 'var(--border-card)',
                    color: '#ffffff',
                    textAlign: 'left',
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    fontWeight: selectedChatQ === idx ? 700 : 500
                  }}
                >
                  {item.q}
                </button>
              ))}
            </div>

            {/* Chat Output Window */}
            <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '380px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', paddingBottom: '0.85rem', borderBottom: '1px solid var(--border-card)', marginBottom: '1rem' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }} />
                  <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>Ustaz Aiman AI Response</span>
                </div>

                {/* User Message */}
                <div style={{
                  background: 'rgba(16, 185, 129, 0.2)',
                  padding: '0.75rem 1rem',
                  borderRadius: '12px',
                  marginBottom: '1rem',
                  fontSize: '0.9rem',
                  color: '#ffffff',
                  fontWeight: 600
                }}>
                  {sampleQuestions[selectedChatQ].q}
                </div>

                {/* Bot Response */}
                {isTyping ? (
                  <div style={{ padding: '1rem', color: 'var(--text-muted)', fontStyle: 'italic', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <RefreshCw size={16} className="animate-spin" />
                    <span>Ustaz Aiman sedang merujuk Kitab Tafsir STAM...</span>
                  </div>
                ) : (
                  <div>
                    <div className="font-arabic" style={{ fontSize: '1.4rem', color: 'var(--gold-400)', marginBottom: '0.75rem' }}>
                      {sampleQuestions[selectedChatQ].arabic}
                    </div>
                    <div style={{ whiteSpace: 'pre-line', fontSize: '0.9rem', color: 'var(--text-main)', lineHeight: 1.6, marginBottom: '1rem' }}>
                      {sampleQuestions[selectedChatQ].ans}
                    </div>
                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      background: 'rgba(16, 185, 129, 0.15)',
                      border: '1px solid rgba(16, 185, 129, 0.3)',
                      color: 'var(--emerald-300)',
                      fontSize: '0.75rem',
                      fontWeight: 600
                    }}>
                      🔍 Rujukan: {sampleQuestions[selectedChatQ].source}
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>
        )}

        {/* Tab Content 2: Flashcards Demo */}
        {activeTab === 'flashcards' && (
          <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
              Tekan pada kad untuk melihat maksud terjemahan Arab-Melayu!
            </p>

            <div 
              className="perspective-1000"
              style={{ width: '100%', height: '280px', margin: '0 auto 1.5rem auto', cursor: 'pointer' }}
              onClick={() => setIsFlipped(!isFlipped)}
            >
              <div className={`flip-card-inner ${isFlipped ? 'is-flipped' : ''}`}>
                {/* Front Side */}
                <div className="flip-card-front glass-card" style={{
                  padding: '2.5rem 1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '1rem',
                  background: 'linear-gradient(135deg, rgba(15, 27, 40, 0.95) 0%, rgba(22, 38, 56, 0.95) 100%)',
                  border: '1px solid var(--emerald-500)'
                }}>
                  <span className="badge-pill" style={{ fontSize: '0.75rem' }}>
                    {flashcardsData[currentCardIndex].surah}
                  </span>
                  <h3 className="font-arabic" style={{ fontSize: '2.8rem', color: 'var(--gold-400)' }}>
                    {flashcardsData[currentCardIndex].arabic}
                  </h3>
                  <p style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                    [{flashcardsData[currentCardIndex].transliteration}]
                  </p>
                  <span style={{ fontSize: '0.8rem', color: 'var(--emerald-400)', marginTop: '0.5rem' }}>
                    💡 Klik untuk lihat jawapan & terjemahan
                  </span>
                </div>

                {/* Back Side */}
                <div className="flip-card-back glass-card" style={{
                  padding: '2rem 1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.85rem',
                  background: 'linear-gradient(135deg, rgba(6, 78, 59, 0.9) 0%, rgba(15, 27, 40, 0.95) 100%)',
                  border: '1px solid var(--emerald-400)'
                }}>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff' }}>
                    {flashcardsData[currentCardIndex].meaning}
                  </div>
                  <div className="font-arabic" style={{ fontSize: '1.2rem', color: 'var(--gold-300)' }}>
                    {flashcardsData[currentCardIndex].example}
                  </div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--emerald-300)' }}>
                    ✓ Berjaya Dihafal!
                  </span>
                </div>
              </div>
            </div>

            {/* Pagination Controls */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
              <button
                onClick={() => {
                  setIsFlipped(false);
                  setCurrentCardIndex((prev) => (prev > 0 ? prev - 1 : flashcardsData.length - 1));
                }}
                className="btn-secondary"
                style={{ padding: '0.5rem 1.25rem', fontSize: '0.9rem' }}
              >
                ‹ Kad Sebelumnya
              </button>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                {currentCardIndex + 1} / {flashcardsData.length}
              </span>
              <button
                onClick={() => {
                  setIsFlipped(false);
                  setCurrentCardIndex((prev) => (prev < flashcardsData.length - 1 ? prev + 1 : 0));
                }}
                className="btn-secondary"
                style={{ padding: '0.5rem 1.25rem', fontSize: '0.9rem' }}
              >
                Kad Seterusnya ›
              </button>
            </div>
          </div>
        )}

        {/* Tab Content 3: Quiz Demo */}
        {activeTab === 'quiz' && (
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <div className="glass-card" style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-card)', paddingBottom: '1rem' }}>
                <span className="badge-pill" style={{ fontSize: '0.8rem' }}>
                  Kuiz Surah Az-Zariyat (Soalan 1/1)
                </span>
                <span style={{ color: 'var(--gold-400)', fontWeight: 700, fontSize: '0.9rem' }}>
                  ⏱️ Pemasa: 00:30
                </span>
              </div>

              <h3 style={{ fontSize: '1.15rem', color: '#ffffff', fontWeight: 700, marginBottom: '1.5rem', lineHeight: 1.5 }}>
                {quizQuestion.q}
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.5rem' }}>
                {quizQuestion.options.map((opt, idx) => {
                  let optStyle = {
                    padding: '1rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-card)',
                    background: 'rgba(255, 255, 255, 0.03)',
                    color: 'var(--text-main)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: quizSubmitted ? 'default' : 'pointer',
                    fontSize: '1.1rem',
                    textAlign: 'right'
                  };

                  if (quizSubmitted) {
                    if (opt.correct) {
                      optStyle.background = 'rgba(16, 185, 129, 0.25)';
                      optStyle.borderColor = '#10b981';
                      optStyle.color = '#ffffff';
                    } else if (selectedQuizOpt === opt && !opt.correct) {
                      optStyle.background = 'rgba(239, 68, 68, 0.25)';
                      optStyle.borderColor = '#ef4444';
                    }
                  }

                  return (
                    <div
                      key={idx}
                      onClick={() => !quizSubmitted && handleSelectQuizOption(opt)}
                      style={optStyle}
                    >
                      <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-muted)' }}>
                        {opt.id}
                      </span>
                      <span className="font-arabic">{opt.text}</span>
                    </div>
                  );
                })}
              </div>

              {quizSubmitted && (
                <div style={{
                  padding: '1rem',
                  borderRadius: 'var(--radius-md)',
                  background: selectedQuizOpt?.correct ? 'rgba(16, 185, 129, 0.15)' : 'rgba(239, 68, 68, 0.15)',
                  border: '1px solid',
                  borderColor: selectedQuizOpt?.correct ? 'var(--emerald-500)' : '#ef4444',
                  fontSize: '0.9rem',
                  lineHeight: 1.6
                }}>
                  <div style={{ fontWeight: 800, marginBottom: '0.3rem', color: selectedQuizOpt?.correct ? 'var(--emerald-300)' : '#f87171' }}>
                    {selectedQuizOpt?.correct ? '🎉 Tahniah! Jawapan Tepat!' : '❌ Kurang Tepat!'}
                  </div>
                  <div style={{ color: 'var(--text-sub)' }}>
                    {quizQuestion.explanation}
                  </div>
                  <button
                    onClick={handleResetQuiz}
                    style={{
                      marginTop: '1rem',
                      background: 'none',
                      border: 'none',
                      color: 'var(--emerald-400)',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem'
                    }}
                  >
                    <RefreshCw size={14} />
                    <span>Cuba Semula</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

      </div>

      <style>{`
        @media (max-width: 768px) {
          .demo-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
