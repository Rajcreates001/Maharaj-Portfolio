'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaRocket, FaCode, FaLightbulb, FaBrain } from 'react-icons/fa';

const stats = [
  { label: 'Projects Built', value: '6+', color: '#6366f1' },
  { label: 'Funding Raised', value: '₹4.3L', color: '#06d6a0' },
  { label: 'Tech Stack', value: 'MERN', color: '#22d3ee' },
  { label: 'Focus Area', value: 'AI', color: '#c084fc' },
];

const highlights = [
  { icon: FaRocket, title: 'Startup Builder', desc: 'Founded startups with real funding & vision', color: '#6366f1' },
  { icon: FaCode, title: 'Full Stack Dev', desc: 'MERN, Next.js, RESTful APIs, MongoDB expertise', color: '#22d3ee' },
  { icon: FaLightbulb, title: 'Problem Solver', desc: 'Building products that solve real-world problems', color: '#06d6a0' },
  { icon: FaBrain, title: 'AI Enthusiast', desc: 'Integrating AI/ML into web applications', color: '#c084fc' },
];

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="about"
      ref={ref}
      className="section-padding"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <span
            style={{
              fontSize: 13, fontWeight: 600, letterSpacing: 3, textTransform: 'uppercase',
              color: '#6366f1', marginBottom: 12, display: 'block',
            }}
          >
            About Me
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#e2e8f0' }}>
            Know Who I <span className="gradient-text">Am</span>
          </h2>
        </motion.div>

        {/* Main content */}
        <div style={{ display: 'grid', gap: 48 }} className="lg:grid-cols-2">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div
              style={{
                padding: 32, borderRadius: 20,
                background: 'rgba(15,15,35,0.6)',
                border: '1px solid rgba(99,102,241,0.08)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: 16, fontSize: 15 }}>
                I&apos;m a <span style={{ color: '#22d3ee', fontWeight: 600 }}>3rd Year B.E student</span> in{' '}
                <span style={{ color: '#c084fc', fontWeight: 600 }}>Computer Science Engineering (AI &amp; ML)</span> at{' '}
                <span style={{ color: '#06d6a0', fontWeight: 600 }}>Sahyadri College of Engineering &amp; Management</span>,
                Mangalore. My passion lies in building{' '}
                <span style={{ color: '#6366f1', fontWeight: 600 }}>scalable web applications</span> and{' '}
                <span style={{ color: '#c084fc', fontWeight: 600 }}>AI-driven products</span> that create real impact.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, marginBottom: 16, fontSize: 15 }}>
                With a strong foundation in the MERN stack and modern web technologies, I&apos;ve built products that
                have secured <span style={{ color: '#06d6a0', fontWeight: 700 }}>₹4.3 Lakh in funding</span>. My journey
                includes developing AI chatbots, healthcare platforms, and startup MVPs.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, fontSize: 15 }}>
                A student of <span style={{ color: '#22d3ee', fontWeight: 600 }}>NxtWave CCBP 4.0 Technologies</span>, I&apos;m
                constantly pushing boundaries in web development, AI integration, and product thinking.
              </p>

              {/* Languages */}
              <div style={{ marginTop: 20, padding: '16px 20px', borderRadius: 14, background: 'rgba(99,102,241,0.06)', border: '1px solid rgba(99,102,241,0.1)' }}>
                <span style={{ fontSize: 12, fontWeight: 600, color: '#6366f1', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 10, display: 'block' }}>Languages Known</span>
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                  {['English', 'Tamil', 'Kannada', 'Hindi'].map((lang) => (
                    <span key={lang} style={{ padding: '6px 14px', borderRadius: 8, fontSize: 13, fontWeight: 500, color: '#e2e8f0', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>{lang}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats & highlights */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {/* Stats grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16, marginBottom: 24 }}>
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  style={{
                    textAlign: 'center', padding: 20, borderRadius: 16,
                    background: 'rgba(15,15,35,0.6)',
                    border: `1px solid ${stat.color}22`,
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <div style={{ fontSize: 28, fontWeight: 800, color: stat.color, marginBottom: 4 }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', fontWeight: 500 }}>{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Highlight cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
              {highlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  whileHover={{ scale: 1.03, y: -3 }}
                  style={{
                    padding: 20, borderRadius: 16,
                    background: 'rgba(15,15,35,0.6)',
                    border: `1px solid ${h.color}22`,
                    backdropFilter: 'blur(8px)',
                    cursor: 'default',
                  }}
                >
                  <h.icon size={22} style={{ color: h.color, marginBottom: 8 }} />
                  <h3 style={{ fontSize: 14, fontWeight: 700, color: '#e2e8f0', marginBottom: 4 }}>{h.title}</h3>
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', lineHeight: 1.5 }}>{h.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
