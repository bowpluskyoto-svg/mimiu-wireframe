import { useState } from 'react';

interface WireframeNavProps {
  currentPage?: string;
}

export function WireframeNav({ currentPage }: WireframeNavProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="nav">
      <div className="logo">美々卯</div>

      {/* Desktop Navigation */}
      <div className="nl nl-desktop">
        <span className={currentPage === 'letter' ? 'cur' : ''}>折々の手紙</span>
        <span className={currentPage === 'udon' ? 'cur' : ''}>名物うどんすき</span>
        <span className={currentPage === 'stores' || currentPage === 'food' ? 'cur' : ''}>店舗・お料理</span>
        <span className={currentPage === 'about' ? 'cur' : ''}>美々卯について</span>
        <span className={currentPage === 'recruit' ? 'cur' : ''}>採用</span>
      </div>

      {/* Mobile Navigation */}
      <div className={`nl nl-mobile ${isMenuOpen ? 'open' : ''}`}>
        <span className={currentPage === 'letter' ? 'cur' : ''}>折々の手紙</span>
        <span className={currentPage === 'udon' ? 'cur' : ''}>名物うどんすき</span>
        <span className={currentPage === 'stores' || currentPage === 'food' ? 'cur' : ''}>店舗・お料理</span>
        <span className={currentPage === 'about' ? 'cur' : ''}>美々卯について</span>
        <span className={currentPage === 'recruit' ? 'cur' : ''}>採用</span>
        <span className="ec-btn" style={{ margin: '8px 0' }}>オンラインストア</span>
      </div>

      {/* Hamburger Button */}
      <button
        className="hamburger"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="メニュー"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className="ec-btn ec-btn-desktop">オンラインストア</div>
    </div>
  );
}
