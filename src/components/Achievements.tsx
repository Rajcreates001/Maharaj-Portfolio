'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaTrophy, FaRocket, FaNewspaper, FaMedal, FaStar } from 'react-icons/fa';

const achievements = [
  {
    icon: FaRocket,
    title: '₹4.3 Lakh Startup Funding',
    description: 'Secured ₹4.3 Lakh in seed funding for DreamTalk through competitive startup pitches and accelerator programs.',
    date: '2024',
    color: '#06d6a0',
    featured: true,
  },
  {
    icon: FaNewspaper,
    title: 'Conference Paper Published',
    description: 'Published a research paper at a national-level conference on AI-driven healthcare solutions and their impact.',
    date: '2024',
    color: '#6366f1',
  },
  {
    icon: FaTrophy,
    title: 'Hackathon Participant',
    description: 'Participated in multiple hackathons including Smart India Hackathon, building impactful projects in healthcare, AI, and sustainability.',
    date: '2023-24',
    color: '#22d3ee',
  },
  {
    icon: FaMedal,
    title: 'NxtWave CCBP 4.0 Student',
    description: 'Enrolled in NxtWave CCBP 4.0 Technologies course, building strong foundations in full-stack development and industry-ready skills.',
    date: '2024',
    color: '#f59e0b',
  },
  {
    icon: FaStar,
    title: 'Startup Incubation',
    description: 'Selected for multiple startup incubation programs, receiving mentorship from industry leaders and investors.',
    date: '2024',
    color: '#c084fc',
  },
];

export default function Achievements() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="achievements"
      ref={ref}
      className="section-padding"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <span style={{ fontSize: 13, fontWeight: 600, letterSpacing: 3, textTransform: 'uppercase', color: '#6366f1', marginBottom: 12, display: 'block' }}>
            Milestones
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#e2e8f0' }}>
            Key <span className="gradient-text">Achievements</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Center line */}
          <div
            style={{
              position: 'absolute', left: 24, top: 0, bottom: 0, width: 2,
              background: 'linear-gradient(180deg, rgba(99,102,241,0.3), rgba(34,211,238,0.1), transparent)',
            }}
            className="md:left-1/2 md:-translate-x-[1px]"
          />

          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              style={{
                position: 'relative', paddingLeft: 60, marginBottom: 40,
              }}
              className="md:pl-0 md:even:pl-[calc(50%+32px)] md:odd:pr-[calc(50%+32px)] md:odd:text-right"
            >
              {/* Dot */}
              <div
                style={{
                  position: 'absolute', left: 16, top: 8,
                  width: 18, height: 18, borderRadius: '50%',
                  background: a.color,
                  boxShadow: `0 0 12px ${a.color}66`,
                  border: '3px solid #0a0a1a',
                  zIndex: 2,
                }}
                className="md:left-1/2 md:-translate-x-1/2"
              />

              {/* Card */}
              <motion.div
                whileHover={{ scale: 1.02, y: -3 }}
                style={{
                  padding: 24, borderRadius: 18,
                  background: 'rgba(15,15,35,0.6)',
                  border: `1px solid ${a.color}22`,
                  backdropFilter: 'blur(12px)',
                  textAlign: 'left',
                }}
              >
                {/* Featured badge */}
                {a.featured && (
                  <span
                    style={{
                      display: 'inline-block',
                      padding: '3px 10px', borderRadius: 999,
                      fontSize: 10, fontWeight: 700, textTransform: 'uppercase',
                      color: '#06d6a0', letterSpacing: 1,
                      background: 'rgba(6,214,160,0.1)',
                      border: '1px solid rgba(6,214,160,0.2)',
                      marginBottom: 10,
                    }}
                  >
                    ★ Highlight
                  </span>
                )}

                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                  <a.icon size={18} style={{ color: a.color }} />
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: '#e2e8f0' }}>{a.title}</h3>
                </div>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, marginBottom: 8 }}>
                  {a.description}
                </p>
                <span style={{ fontSize: 12, color: a.color, fontWeight: 600 }}>{a.date}</span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
