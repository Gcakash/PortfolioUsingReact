// src/components/Gallery.js
import React, { useEffect, useMemo, useRef, useState } from 'react';
import './css/Gallery.css';

const IMAGES = [
  '/img/Gallery/Gallery1.jpeg',
  '/img/Gallery/Gallery2.jpg',
  '/img/Gallery/Gallery3.jpg',
  '/img/Gallery/Gallery4.jpeg',
  '/img/Gallery/Gallery5.jpg',
  '/img/Gallery/Gallery6.jpeg',
  '/img/Gallery/Gallery7.jpg',
  '/img/Gallery/Gallery8.jpg',
];

const VISIBLE_COUNT = 5;

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState({});
  const [isClosing, setIsClosing] = useState(false);
  const backdropRef = useRef(null);
  const containerRef = useRef(null);

  const hasMore = IMAGES.length > VISIBLE_COUNT;
  const visible = useMemo(() => IMAGES.slice(0, Math.min(VISIBLE_COUNT, IMAGES.length)), []);

  // Lightbox controls
  const openAt = (i) => {
    setIndex(i);
    setIsOpen(true);
    setIsClosing(false);
  };

  const close = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 300);
  };

  const next = () => setIndex((prev) => (prev + 1) % IMAGES.length);
  const prev = () => setIndex((prev) => (prev - 1 + IMAGES.length) % IMAGES.length);

  // ESC / arrows
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Backdrop click close
  const onBackdrop = (e) => {
    if (e.target === backdropRef.current) close();
  };

  // Swipe support
  const touchStartX = useRef(0);
  const onTouchStart = (e) => (touchStartX.current = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) {
      if (dx > 0) prev();
      else next();
    }
  };

  // Mouse move effect for cards
  const handleMouseMove = (e) => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  };

  return (
    <section id="gallery" className="gallery-container">
    <div className="gallery modern-gallery" ref={containerRef}>
      <div className="gallery-bg">
        <div className="particles"></div>
      </div>
      
      <div className="gallery-head">
        <h2 className="gallery-title">Visual Journey</h2>
        <p className="gallery-subtitle">Explore my curated collection of moments</p>
      </div>

      {/* Featured Grid */}
      <div 
        className="preview-grid"
        onMouseMove={handleMouseMove}
      >
        {visible.map((src, i) => {
          const isLastTile = i === VISIBLE_COUNT - 1 && hasMore;
          return (
            <button
              key={src + i}
              type="button"
              className={`card card-${i + 1} ${loaded[src] ? 'is-loaded' : ''}`}
              onClick={() => openAt(i)}
            >
              {!loaded[src] && <div className="skeleton" />}
              <div className="card-inner">
                <img
                  src={src}
                  alt={`Gallery image ${i + 1}`}
                  onLoad={() => setLoaded((l) => ({ ...l, [src]: true }))}
                />
                <span className="shine" />
                <span className="card-overlay"></span>
                <span className="card-label">
                  {isLastTile ? 
                    <><span className="plus-icon">+</span> {IMAGES.length - VISIBLE_COUNT} More</> : 
                    <span className="view-text">View</span>
                  }
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Lightbox */}
      {isOpen && (
        <div
          className={`lb-backdrop ${isClosing ? 'closing' : ''}`}
          ref={backdropRef}
          onClick={onBackdrop}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div className="lb-shell">
            <button className="lb-close" onClick={close} aria-label="Close">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <button className="lb-prev" onClick={prev} aria-label="Previous">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <div className="lb-frame">
              <div className="lb-image-container">
                <img src={IMAGES[index]} alt={`Image ${index + 1}`} className="lb-image" />
              </div>
              <div className="lb-meta">
                <span className="lb-count">{index + 1} / {IMAGES.length}</span>
              </div>
            </div>
            <button className="lb-next" onClick={next} aria-label="Next">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
    </section>
  );
};

export default Gallery;