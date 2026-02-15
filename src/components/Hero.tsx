'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaDownload, FaArrowRight } from 'react-icons/fa';
import { useTypingEffect } from '@/hooks/useTypingEffect';
import Image from 'next/image';

const roles = [
  'Full Stack MERN Developer',
  'Self-Taught Builder',
  'Startup Visionary',
  'Problem Solver & Innovator',
];

export default function Hero() {
  const typedText = useTypingEffect(roles, 80, 40, 2000);

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        paddingTop: 100,
      }}
    >
      {/* Background mesh */}
      <div className="mesh-gradient" style={{ position: 'absolute', inset: 0 }} />

      {/* Floating gradient orbs */}
      <motion.div
        animate={{ x: [0, 100, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute', top: 80, left: -128,
          width: 400, height: 400, borderRadius: '50%',
          background: 'rgba(99,102,241,0.1)', filter: 'blur(120px)',
        }}
      />
      <motion.div
        animate={{ x: [0, -80, 0], y: [0, 60, 0], scale: [1.2, 1, 1.2] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute', bottom: 80, right: -128,
          width: 400, height: 400, borderRadius: '50%',
          background: 'rgba(34,211,238,0.08)', filter: 'blur(120px)',
        }}
      />

      <div style={{ position: 'relative', zIndex: 10, maxWidth: 1280, margin: '0 auto', padding: '0 24px', width: '100%' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 48 }} className="lg:flex-row lg:justify-between lg:items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ flex: 1, textAlign: 'center' }}
            className="lg:text-left"
          >
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '8px 16px', borderRadius: 999, marginBottom: 24,
                background: 'rgba(30,30,60,0.5)',
                border: '1px solid rgba(99,102,241,0.1)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#06d6a0', animation: 'pulse-glow 2s infinite' }} />
              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>Available for opportunities</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 800, marginBottom: 16, lineHeight: 1.1, color: '#e2e8f0' }}
            >
              Hi, I&apos;m{' '}
              <span className="gradient-text">Maharaj</span>
            </motion.h1>

            {/* Typing effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              style={{
                fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
                fontWeight: 500,
                color: 'rgba(255,255,255,0.75)',
                marginBottom: 24,
                minHeight: 40,
              }}
            >
              <span>{typedText}</span>
              <span
                style={{
                  display: 'inline-block', width: 3, height: 28,
                  background: '#22d3ee', marginLeft: 4,
                  animation: 'pulse 1s ease-in-out infinite',
                }}
              />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              style={{
                fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 540,
                margin: '0 auto 32px', lineHeight: 1.7,
              }}
              className="lg:mx-0"
            >
              Building scalable, impactful products that solve real-world problems.
              Passionate about modern web architecture and startup innovation.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center' }}
              className="lg:justify-start"
            >
              <motion.a
                href="#projects"
                onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  padding: '14px 32px', borderRadius: 12,
                  fontWeight: 600, fontSize: 15, color: '#fff',
                  background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                  boxShadow: '0 0 30px rgba(99,102,241,0.3)',
                  cursor: 'pointer', textDecoration: 'none',
                  border: 'none',
                }}
              >
                View Projects <FaArrowRight />
              </motion.a>

              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  padding: '14px 32px', borderRadius: 12,
                  fontWeight: 600, fontSize: 15, color: 'rgba(255,255,255,0.75)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  background: 'transparent',
                  cursor: 'pointer', textDecoration: 'none',
                  transition: 'all 0.2s',
                }}
              >
                <FaDownload /> Download Resume
              </motion.a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              style={{ display: 'flex', gap: 12, marginTop: 32, justifyContent: 'center' }}
              className="lg:justify-start"
            >
              {[
                { icon: FaGithub, href: 'https://github.com/Rajcreates001', label: 'GitHub' },
                { icon: FaLinkedin, href: 'https://www.linkedin.com/in/maharaj07', label: 'LinkedIn' },
              ].map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  style={{
                    padding: 12, borderRadius: 12,
                    background: 'rgba(30,30,60,0.5)',
                    border: '1px solid rgba(99,102,241,0.1)',
                    color: 'rgba(255,255,255,0.55)',
                    cursor: 'pointer', textDecoration: 'none',
                    display: 'flex', transition: 'color 0.2s',
                  }}
                  aria-label={s.label}
                >
                  <s.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ position: 'relative', flexShrink: 0 }}
          >
            {/* Spinning glow ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              style={{
                position: 'absolute', inset: -16, borderRadius: '50%', opacity: 0.5,
                background: 'conic-gradient(from 0deg, #6366f1, #22d3ee, #06d6a0, #c084fc, #6366f1)',
                filter: 'blur(20px)',
              }}
            />

            {/* Image */}
            <div
              style={{
                position: 'relative', width: 280, height: 280,
                borderRadius: '50%', overflow: 'hidden',
                border: '2px solid rgba(255,255,255,0.1)',
              }}
              className="sm:w-72 sm:h-72 lg:w-80 lg:h-80"
            >
              <Image
                src="/Maharaj Profile.jpg"
                alt="Maharaj - Full Stack Developer"
                fill
                style={{ objectFit: 'cover' }}
                priority
                sizes="320px"
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5,5,16,0.4) 0%, rgba(5,5,16,0.15) 30%, transparent 60%)' }} />
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{
                position: 'absolute', right: -16, top: 32,
                padding: '6px 14px', borderRadius: 10,
                fontSize: 12, fontWeight: 600, color: '#22d3ee',
                background: 'rgba(13,13,32,0.8)',
                border: '1px solid rgba(34,211,238,0.2)',
                backdropFilter: 'blur(8px)',
              }}
            >
              MERN Stack
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              style={{
                position: 'absolute', left: -16, bottom: 64,
                padding: '6px 14px', borderRadius: 10,
                fontSize: 12, fontWeight: 600, color: '#06d6a0',
                background: 'rgba(13,13,32,0.8)',
                border: '1px solid rgba(6,214,160,0.2)',
                backdropFilter: 'blur(8px)',
              }}
            >
              AI Enthusiast
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)' }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{
            width: 24, height: 40, borderRadius: 999,
            border: '2px solid rgba(255,255,255,0.15)',
            display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
            padding: 8,
          }}
        >
          <div style={{ width: 4, height: 8, borderRadius: 4, background: 'rgba(255,255,255,0.35)' }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
