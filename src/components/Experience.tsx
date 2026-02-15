'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaLaptopCode, FaRobot, FaServer, FaProjectDiagram, FaBriefcase } from 'react-icons/fa';

const experiences = [
  {
    title: 'Startup Founder & Developer',
    company: 'DreamTalk',
    period: '2024 — Present',
    description: 'Founded an AI-powered communication platform. Leading full-stack development, product design, and investor pitches. Secured ₹4.3L funding.',
    icon: FaRobot,
    color: '#06d6a0',
    skills: ['Next.js', 'MongoDB', 'AI/ML', 'Product Design'],
  },
  {
    title: 'AI Product Designer',
    company: 'LifeLink Healthcare',
    period: '2024',
    description: 'Designed and developed AI-driven healthcare features including chatbot triage, donor matching algorithms, and hospital dashboards.',
    icon: FaLaptopCode,
    color: '#6366f1',
    skills: ['React.js', 'AI Integration', 'UX Design', 'REST APIs'],
  },
  {
    title: 'Full Stack Developer',
    company: 'Projects & Freelance',
    period: '2023 — 2024',
    description: 'Built multiple full-stack applications including NextMissionHub, BuildEase, and Homestays platform using the MERN stack.',
    icon: FaServer,
    color: '#22d3ee',
    skills: ['MERN Stack', 'Tailwind CSS', 'Git', 'Deployment'],
  },
  {
    title: 'MERN Stack Developer',
    company: 'Academic & Personal Projects',
    period: '2023',
    description: 'Developed proficiency in MongoDB, Express, React, and Node.js through intensive project-based learning and hackathons.',
    icon: FaProjectDiagram,
    color: '#f59e0b',
    skills: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
  },
  {
    title: 'Programming Intern',
    company: 'Tech Internships',
    period: '2023',
    description: 'Completed internships focusing on web development fundamentals, REST API design, and database management.',
    icon: FaBriefcase,
    color: '#c084fc',
    skills: ['JavaScript', 'HTML/CSS', 'SQL', 'API Design'],
  },
];

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="experience"
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
            Journey
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#e2e8f0' }}>
            Professional <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Vertical line */}
          <div
            style={{
              position: 'absolute', left: 31, top: 0, bottom: 0, width: 2,
              background: 'linear-gradient(180deg, rgba(99,102,241,0.3), rgba(34,211,238,0.1), transparent)',
            }}
          />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              style={{ position: 'relative', paddingLeft: 72, marginBottom: 36 }}
            >
              {/* Icon circle */}
              <div
                style={{
                  position: 'absolute', left: 16, top: 4,
                  width: 32, height: 32, borderRadius: '50%',
                  background: `${exp.color}22`,
                  border: `2px solid ${exp.color}66`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  zIndex: 2,
                }}
              >
                <exp.icon size={14} style={{ color: exp.color }} />
              </div>

              {/* Card */}
              <motion.div
                whileHover={{ scale: 1.01, x: 4 }}
                style={{
                  padding: 24, borderRadius: 18,
                  background: 'rgba(15,15,35,0.6)',
                  border: `1px solid ${exp.color}15`,
                  backdropFilter: 'blur(12px)',
                }}
              >
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8, gap: 8 }}>
                  <div>
                    <h3 style={{ fontSize: 17, fontWeight: 700, color: '#e2e8f0', marginBottom: 2 }}>{exp.title}</h3>
                    <p style={{ fontSize: 14, color: exp.color, fontWeight: 600 }}>{exp.company}</p>
                  </div>
                  <span
                    style={{
                      fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,0.4)',
                      padding: '4px 10px', borderRadius: 8,
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.06)',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {exp.period}
                  </span>
                </div>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, marginBottom: 12 }}>
                  {exp.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {exp.skills.map((s) => (
                    <span
                      key={s}
                      style={{
                        padding: '3px 10px', borderRadius: 8,
                        fontSize: 11, fontWeight: 500,
                        color: exp.color,
                        background: `${exp.color}12`,
                        border: `1px solid ${exp.color}22`,
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
