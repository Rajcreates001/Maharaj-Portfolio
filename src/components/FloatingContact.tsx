'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCommentDots, FaTimes, FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';

const links = [
  { icon: FaLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/maharaj07', color: '#0077b5' },
  { icon: FaGithub, label: 'GitHub', href: 'https://github.com/Rajcreates001', color: '#e2e8f0' },
  { icon: FaEnvelope, label: 'Email', href: 'mailto:maharaj.career@gmail.com', color: '#6366f1' },
];

export default function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        position: 'fixed', bottom: 24, right: 24, zIndex: 40,
        display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 12,
      }}
    >
      {/* Quick links popup */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            style={{
              display: 'flex', flexDirection: 'column', gap: 8,
              padding: 16, borderRadius: 18,
              background: 'rgba(13,13,32,0.9)',
              border: '1px solid rgba(99,102,241,0.15)',
              backdropFilter: 'blur(16px)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
              minWidth: 180,
            }}
          >
            <p style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.4)', marginBottom: 4 }}>
              Quick Connect
            </p>
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  padding: '10px 14px', borderRadius: 12,
                  fontSize: 14, fontWeight: 500,
                  color: '#e2e8f0',
                  background: 'rgba(255,255,255,0.04)',
                  textDecoration: 'none',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.04)')}
              >
                <link.icon size={16} style={{ color: link.color }} />
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB button */}
      <motion.button
        suppressHydrationWarning
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setOpen(!open)}
        style={{
          width: 56, height: 56, borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          border: 'none', cursor: 'pointer',
          background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
          boxShadow: '0 4px 20px rgba(99,102,241,0.4)',
          color: '#fff',
          transition: 'all 0.3s',
        }}
        aria-label={open ? 'Close contact menu' : 'Open contact menu'}
      >
        {open ? <FaTimes size={20} /> : <FaCommentDots size={20} />}
      </motion.button>
    </div>
  );
}
