'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp, FaHeart } from 'react-icons/fa';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { icon: FaGithub, href: 'https://github.com/Rajcreates001', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/maharaj07', label: 'LinkedIn' },
  { icon: FaEnvelope, href: 'mailto:maharaj.career@gmail.com', label: 'Email' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        position: 'relative',
        borderTop: '1px solid rgba(99,102,241,0.08)',
        background: 'rgba(5,5,16,0.8)',
        backdropFilter: 'blur(12px)',
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '48px 24px 24px' }}>
        <div
          style={{
            display: 'grid', gap: 40, marginBottom: 40,
          }}
          className="md:grid-cols-3"
        >
          {/* Brand */}
          <div>
            <motion.a
              href="#home"
              onClick={(e) => { e.preventDefault(); scrollToTop(); }}
              style={{
                fontSize: 24, fontWeight: 800, textDecoration: 'none',
                marginBottom: 12, display: 'inline-block',
              }}
              className="gradient-text"
            >
              Maharaj.
            </motion.a>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, maxWidth: 280 }}>
              Full Stack Developer passionate about building scalable, impactful products and startup innovation.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 style={{ fontSize: 14, fontWeight: 700, color: '#e2e8f0', marginBottom: 16 }}>Quick Links</h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8 }}>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  style={{
                    fontSize: 13, color: 'rgba(255,255,255,0.4)',
                    textDecoration: 'none', transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#6366f1')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social & back to top */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }} className="md:items-end">
            <h4 style={{ fontSize: 14, fontWeight: 700, color: '#e2e8f0', marginBottom: 16 }}>Connect</h4>
            <div style={{ display: 'flex', gap: 10, marginBottom: 24 }}>
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  style={{
                    width: 40, height: 40, borderRadius: 12,
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'rgba(255,255,255,0.45)', textDecoration: 'none',
                    transition: 'all 0.2s',
                  }}
                  aria-label={s.label}
                >
                  <s.icon size={16} />
                </motion.a>
              ))}
            </div>

            {/* Back to top */}
            <motion.button
              onClick={scrollToTop}
              suppressHydrationWarning
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.9 }}
              style={{
                display: 'flex', alignItems: 'center', gap: 8,
                padding: '10px 18px', borderRadius: 12,
                fontSize: 13, fontWeight: 600,
                color: 'rgba(255,255,255,0.5)',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.08)',
                cursor: 'pointer', transition: 'all 0.2s',
              }}
            >
              <FaArrowUp size={12} /> Back to Top
            </motion.button>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.06)',
            paddingTop: 20,
            display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between',
            alignItems: 'center', gap: 12,
          }}
        >
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', gap: 4 }}>
            © {new Date().getFullYear()} Maharaj. Crafted with{' '}
            <FaHeart size={10} style={{ color: '#ef4444' }} /> and code.
          </p>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.2)' }}>
            Built with Next.js, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
