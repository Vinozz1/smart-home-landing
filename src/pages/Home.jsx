import React, { useState } from 'react';
import './Home.css';

export default function Home() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      id: 'lighting',
      title: 'Kontrol Pencahayaan Cerdas',
      description: 'Atur pencahayaan rumah secara otomatis berdasarkan waktu, cuaca, dan aktivitas Anda.',
      icon: '💡',
      details: 'Sistem pencahayaan adaptif yang menghemat energi hingga 60%'
    },
    {
      id: 'security',
      title: 'Keamanan Terintegrasi',
      description: 'Pantau dan amankan rumah Anda dengan teknologi AI dan IoT terdepan.',
      icon: '🛡️',
      details: 'Deteksi gerakan, pengenalan wajah, dan notifikasi real-time'
    },
    {
      id: 'energy',
      title: 'Manajemen Energi',
      description: 'Optimalisasi penggunaan listrik dengan monitoring dan kontrol otomatis.',
      icon: '⚡',
      details: 'Prediksi konsumsi dan penghematan biaya listrik bulanan'
    },
    {
      id: 'automation',
      title: 'Otomatisasi Rumah',
      description: 'Buat skenario otomatis untuk berbagai perangkat dan sistem rumah.',
      icon: '🏠',
      details: 'Voice control, jadwal otomatis, dan integrasi semua perangkat'
    }
  ];

  const roadmapItems = [
    {
      phase: 'Phase 1',
      title: 'Smart Lighting',
      status: 'In Production',
      date: 'Q1 2024',
      description: 'Sistem pencahayaan cerdas dengan kontrol otomatis'
    },
    {
      phase: 'Phase 2',
      title: 'Security System',
      status: 'In Production',
      date: 'Q2 2024',
      description: 'Keamanan terintegrasi dengan AI monitoring'
    },
    {
      phase: 'Phase 3',
      title: 'Energy Management',
      status: 'In Development',
      date: 'Q3 2024',
      description: 'Manajemen energi dan optimalisasi konsumsi'
    },
    {
      phase: 'Phase 4',
      title: 'Full Automation',
      status: 'In Development',
      date: 'Q4 2024',
      description: 'Otomatisasi penuh dengan voice control dan AI'
    }
  ];

  return (
    <div className="home-container">
      {/* Navigation */}
      <nav className="main-nav">
        <div className="nav-container">
          <div className="nav-logo">
            <span className="logo-icon">🏠</span>
            <span className="logo-text">SmartHome</span>
          </div>
          <div className="nav-links">
            <a href="#learn">Pelajari</a>
            <a href="#use">Gunakan</a>
            <a href="#build">Bangun</a>
            <a href="#roadmap">Roadmap</a>
          </div>
          <button className="get-started-btn">Mulai Sekarang</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section" id="home">
        <div className="hero-content">
          <h1 className="hero-title">
            Masa Depan Rumah Pintar
            <span className="highlight">Dimulai Hari Ini</span>
          </h1>
          <p className="hero-subtitle">
            Platform smart home terdepan yang mengintegrasikan IoT, AI, dan automasi 
            untuk menciptakan pengalaman hidup yang lebih efisien, aman, dan nyaman.
          </p>
          <div className="hero-actions">
            <button className="primary-btn">Jelajahi Platform</button>
            <button className="secondary-btn">Lihat Demo</button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-cards">
            <div className="card card-1">🌡️ 24°C</div>
            <div className="card card-2">🔒 Aman</div>
            <div className="card card-3">💡 85% Hemat</div>
            <div className="card card-4">🏠 Terhubung</div>
          </div>
        </div>
      </section>

      {/* What is Smart Home Section */}
      <section className="what-is-section" id="learn">
        <div className="section-container">
          <div className="section-header">
            <h2>Apa itu Smart Home?</h2>
            <p>
              Sistem rumah pintar yang mengintegrasikan berbagai perangkat dan teknologi 
              untuk meningkatkan kenyamanan, keamanan, dan efisiensi energi.
            </p>
          </div>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">🎯</div>
              <h3>Otomatisasi Cerdas</h3>
              <p>Kontrol otomatis berdasarkan jadwal, cuaca, dan preferensi Anda</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">💰</div>
              <h3>Hemat Energi</h3>
              <p>Penghematan biaya listrik hingga 30% dengan optimalisasi otomatis</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">📱</div>
              <h3>Kontrol Remote</h3>
              <p>Kendalikan rumah dari mana saja melalui aplikasi mobile</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section" id="use">
        <div className="section-container">
          <div className="section-header">
            <h2>Fitur Unggulan</h2>
            <p>Teknologi terdepan untuk rumah pintar masa depan</p>
          </div>
          <div className="features-interactive">
            <div className="features-nav">
              {features.map((feature, index) => (
                <button
                  key={feature.id}
                  className={`feature-nav-btn ${activeFeature === index ? 'active' : ''}`}
                  onClick={() => setActiveFeature(index)}
                >
                  <span className="feature-icon">{feature.icon}</span>
                  <span className="feature-title">{feature.title}</span>
                </button>
              ))}
            </div>
            <div className="feature-content">
              <div className="feature-display">
                <div className="feature-main-icon">
                  {features[activeFeature].icon}
                </div>
                <h3>{features[activeFeature].title}</h3>
                <p>{features[activeFeature].description}</p>
                <div className="feature-details">
                  {features[activeFeature].details}
                </div>
                <button className="learn-more-btn">Pelajari Lebih Lanjut</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="roadmap-section" id="roadmap">
        <div className="section-container">
          <div className="section-header">
            <h2>Roadmap Smart Home</h2>
            <p>Perjalanan menuju ekosistem rumah pintar yang terintegrasi penuh</p>
          </div>
          <div className="roadmap-timeline">
            {roadmapItems.map((item, index) => (
              <div key={index} className="roadmap-item">
                <div className="roadmap-marker">
                  <div className={`marker-dot ${item.status.toLowerCase().replace(' ', '-')}`}></div>
                </div>
                <div className="roadmap-content">
                  <div className="roadmap-header">
                    <h3>{item.title}</h3>
                    <span className={`status-badge ${item.status.toLowerCase().replace(' ', '-')}`}>
                      {item.status}
                    </span>
                  </div>
                  <p className="roadmap-date">{item.date}</p>
                  <p className="roadmap-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="vision-section">
        <div className="section-container">
          <div className="vision-content">
            <h2>Visi Masa Depan</h2>
            <p>
              Menciptakan ekosistem rumah pintar yang dapat diakses semua orang, 
              dengan teknologi yang mudah digunakan dan terintegrasi penuh.
            </p>
            <div className="vision-goals">
              <div className="goal-item">
                <h3>🌍 Global</h3>
                <p>Solusi yang dapat diterapkan di berbagai negara dan budaya</p>
              </div>
              <div className="goal-item">
                <h3>🔒 Aman</h3>
                <p>Keamanan data dan privasi sebagai prioritas utama</p>
              </div>
              <div className="goal-item">
                <h3>♻️ Berkelanjutan</h3>
                <p>Ramah lingkungan dan mendukung efisiensi energi</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners-section">
        <div className="section-container">
          <div className="partners-content">
            <p className="partners-label">Didukung oleh mitra terpercaya</p>
            <div className="partners-grid">
              <div className="partner-logo">Google</div>
              <div className="partner-logo">Microsoft</div>
              <div className="partner-logo">Amazon</div>
              <div className="partner-logo">Samsung</div>
              <div className="partner-logo">Philips</div>
              <div className="partner-logo">Tesla</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="main-footer">
        <div className="footer-container">
          <div className="footer-sections">
            <div className="footer-section">
              <h3>Pelajari</h3>
              <ul>
                <li><a href="/learn">Panduan Smart Home</a></li>
                <li><a href="/technology">Teknologi</a></li>
                <li><a href="/benefits">Manfaat</a></li>
                <li><a href="/security">Keamanan</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Gunakan</h3>
              <ul>
                <li><a href="/products">Produk</a></li>
                <li><a href="/installation">Instalasi</a></li>
                <li><a href="/apps">Aplikasi</a></li>
                <li><a href="/support">Dukungan</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Bangun</h3>
              <ul>
                <li><a href="/developers">Developer</a></li>
                <li><a href="/api">API</a></li>
                <li><a href="/sdk">SDK</a></li>
                <li><a href="/partners">Partnership</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Komunitas</h3>
              <ul>
                <li><a href="/community">Forum</a></li>
                <li><a href="/events">Event</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/newsletter">Newsletter</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-logo">
              <span className="logo-icon">🏠</span>
              <span className="logo-text">SmartHome</span>
            </div>
            <p>&copy; 2024 SmartHome Platform. Semua hak dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
