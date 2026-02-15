'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCertificate, FaTimes, FaChevronLeft, FaChevronRight, FaExternalLinkAlt } from 'react-icons/fa';

const certificates = [
  { title: 'Artificial Intelligence Foundation', issuer: 'Certification Program', file: '/certificates/Artificial Intelligence Foundation Certification.pdf', color: '#c084fc' },
  { title: 'Introduction to Artificial Intelligence', issuer: 'Certification Program', file: '/certificates/Introduction to Artificial Intelligence.pdf', color: '#a855f7' },
  { title: 'Spark for Machine Learning', issuer: 'Certification Program', file: '/certificates/Spark for Machine Learning.pdf', color: '#f97316' },
  { title: 'Text Mining & Social Network Analysis', issuer: 'Certification Program', file: '/certificates/Text Mining & Social Network Analysis.pdf', color: '#ef4444' },
  { title: 'Javascript Essentials', issuer: 'NxtWave / CCBP', file: '/certificates/Javascript Essentials.pdf', color: '#f59e0b' },
  { title: 'Python', issuer: 'NxtWave / CCBP', file: '/certificates/Python.pdf', color: '#eab308' },
  { title: 'Modernizing Python Applications', issuer: 'Certification Program', file: '/certificates/Modernizing Python Applications Migrating to Python 3.x.pdf', color: '#3b82f6' },
  { title: 'Database and SQL', issuer: 'NxtWave / CCBP', file: '/certificates/Database and SQL.pdf', color: '#22d3ee' },
  { title: 'DBMS', issuer: 'NxtWave / CCBP', file: '/certificates/DBMS.pdf', color: '#6366f1' },
  { title: 'Dynamic Web Application', issuer: 'NxtWave / CCBP', file: '/certificates/Dynamic web application.pdf', color: '#06d6a0' },
  { title: 'Responsive Web Design', issuer: 'NxtWave / CCBP', file: '/certificates/Responsive Web Design.pdf', color: '#10b981' },
  { title: 'Responsive Website', issuer: 'NxtWave / CCBP', file: '/certificates/Responsive Website.pdf', color: '#14b8a6' },
  { title: 'Static Website', issuer: 'NxtWave / CCBP', file: '/certificates/Static Website.pdf', color: '#8b5cf6' },
  { title: 'Paper Presentation — Springer', issuer: 'Springer', file: '/certificates/Paper presentation springer certificate.pdf', color: '#f472b6' },
];

export default function Certifications() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const next = () => setLightbox((p) => (p !== null ? (p + 1) % certificates.length : 0));
  const prev = () => setLightbox((p) => (p !== null ? (p - 1 + certificates.length) % certificates.length : 0));

  return (
    <section
      id="certifications"
      ref={ref}
      className="section-padding"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <span style={{ fontSize: 13, fontWeight: 600, letterSpacing: 3, textTransform: 'uppercase', color: '#6366f1', marginBottom: 12, display: 'block' }}>
            Credentials
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#e2e8f0' }}>
            My <span className="gradient-text">Certifications</span>
          </h2>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', marginTop: 12 }}>
            {certificates.length} Certificates &mdash; Click to view
          </p>
        </motion.div>

        {/* Certificates grid */}
        <div
          style={{
            display: 'grid',
            gap: 20,
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          }}
        >
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.02 }}
              onClick={() => window.open(cert.file, '_blank')}
              style={{
                cursor: 'pointer', borderRadius: 18, overflow: 'hidden',
                background: 'rgba(15,15,35,0.6)',
                border: `1px solid ${cert.color}22`,
                backdropFilter: 'blur(12px)',
                transition: 'border-color 0.3s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${cert.color}55`)}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = `${cert.color}22`)}
            >
              {/* Certificate preview area */}
              <div
                style={{
                  position: 'relative', height: 140,
                  background: `linear-gradient(135deg, ${cert.color}15, rgba(15,15,35,0.4))`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                  <FaCertificate size={36} style={{ color: cert.color, opacity: 0.7 }} />
                  <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: 1 }}>PDF</span>
                </div>
                {/* Badge */}
                <div
                  style={{
                    position: 'absolute', top: 10, right: 10,
                    width: 28, height: 28, borderRadius: '50%',
                    background: `${cert.color}22`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}
                >
                  <FaExternalLinkAlt size={10} style={{ color: cert.color }} />
                </div>
              </div>

              {/* Info */}
              <div style={{ padding: 16 }}>
                <h3 style={{ fontSize: 14, fontWeight: 700, color: '#e2e8f0', marginBottom: 4, lineHeight: 1.4 }}>{cert.title}</h3>
                <p style={{ fontSize: 12, color: cert.color, fontWeight: 500 }}>{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox for PDF preview */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            style={{
              position: 'fixed', inset: 0, zIndex: 50,
              background: 'rgba(0,0,0,0.9)',
              backdropFilter: 'blur(12px)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: 24,
            }}
          >
            {/* Nav buttons */}
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              style={{
                position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)',
                background: 'rgba(255,255,255,0.08)', border: 'none',
                borderRadius: 12, padding: 12, cursor: 'pointer',
                color: 'rgba(255,255,255,0.6)', zIndex: 2,
              }}
            >
              <FaChevronLeft size={20} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              style={{
                position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)',
                background: 'rgba(255,255,255,0.08)', border: 'none',
                borderRadius: 12, padding: 12, cursor: 'pointer',
                color: 'rgba(255,255,255,0.6)', zIndex: 2,
              }}
            >
              <FaChevronRight size={20} />
            </button>

            {/* Close */}
            <button
              onClick={() => setLightbox(null)}
              style={{
                position: 'absolute', top: 16, right: 16,
                background: 'rgba(255,255,255,0.08)', border: 'none',
                borderRadius: 10, padding: 10, cursor: 'pointer',
                color: 'rgba(255,255,255,0.6)', zIndex: 2,
              }}
            >
              <FaTimes size={18} />
            </button>

            {/* Certificate display */}
            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              style={{ textAlign: 'center', maxWidth: 700 }}
            >
              <div
                style={{
                  borderRadius: 20, overflow: 'hidden', marginBottom: 20,
                  background: `linear-gradient(135deg, ${certificates[lightbox].color}20, rgba(15,15,35,0.6))`,
                  border: `1px solid ${certificates[lightbox].color}33`,
                  padding: 60,
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16,
                }}
              >
                <FaCertificate size={64} style={{ color: certificates[lightbox].color, opacity: 0.6 }} />
                <a
                  href={certificates[lightbox].file}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    padding: '10px 24px', borderRadius: 10,
                    background: certificates[lightbox].color,
                    color: '#fff', fontWeight: 600, fontSize: 14,
                    textDecoration: 'none',
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                  }}
                >
                  <FaExternalLinkAlt size={12} /> Open PDF
                </a>
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 700, color: '#e2e8f0', marginBottom: 6 }}>
                {certificates[lightbox].title}
              </h3>
              <p style={{ fontSize: 15, color: certificates[lightbox].color, fontWeight: 500 }}>
                {certificates[lightbox].issuer}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
