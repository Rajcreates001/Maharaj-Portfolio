'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaCode, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt,
  FaPython, FaDatabase, FaJava,
} from 'react-icons/fa';
import {
  SiTypescript, SiJavascript, SiNextdotjs, SiTailwindcss,
  SiMongodb, SiExpress, SiPostman, SiFramer,
} from 'react-icons/si';

interface Skill { name: string; level: number; icon: React.ElementType; color: string }

const categories: Record<string, { label: string; color: string; skills: Skill[] }> = {
  programming: {
    label: 'Programming',
    color: '#6366f1',
    skills: [
      { name: 'JavaScript', level: 84, icon: SiJavascript, color: '#f7df1e' },
      { name: 'TypeScript', level: 45, icon: SiTypescript, color: '#3178c6' },
      { name: 'Python', level: 92, icon: FaPython, color: '#3776ab' },
      { name: 'Java', level: 78, icon: FaJava, color: '#f89820' },
      { name: 'C', level: 68, icon: FaCode, color: '#a8b9cc' },
      { name: 'C++', level: 73, icon: FaCode, color: '#00599c' },
    ],
  },
  frontend: {
    label: 'Frontend',
    color: '#22d3ee',
    skills: [
      { name: 'React.js', level: 82, icon: FaReact, color: '#61dafb' },
      { name: 'Next.js', level: 52, icon: SiNextdotjs, color: '#ffffff' },
      { name: 'HTML5', level: 98, icon: FaHtml5, color: '#e34f26' },
      { name: 'CSS3', level: 97, icon: FaCss3Alt, color: '#1572b6' },
      { name: 'Tailwind CSS', level: 60, icon: SiTailwindcss, color: '#06b6d4' },
      { name: 'Framer Motion', level: 48, icon: SiFramer, color: '#bb4bff' },
    ],
  },
  backend: {
    label: 'Backend',
    color: '#06d6a0',
    skills: [
      { name: 'Node.js', level: 62, icon: FaNodeJs, color: '#339933' },
      { name: 'Express.js', level: 72, icon: SiExpress, color: '#ffffff' },
      { name: 'MongoDB', level: 87, icon: SiMongodb, color: '#47a248' },
      { name: 'REST APIs', level: 76, icon: FaDatabase, color: '#ff6b6b' },
      { name: 'Postman', level: 53, icon: SiPostman, color: '#ff6c37' },
    ],
  },
  tools: {
    label: 'Tools & Concepts',
    color: '#c084fc',
    skills: [
      { name: 'Git & GitHub', level: 99, icon: FaGitAlt, color: '#f05032' },
      { name: 'AI / ML Basics', level: 85, icon: FaCode, color: '#ff9f43' },
      { name: 'Prompt Engineering', level: 90, icon: FaCode, color: '#a855f7' },
      { name: 'DSA', level: 72, icon: FaCode, color: '#14b8a6' },
    ],
  },
};

const catKeys = Object.keys(categories);

export default function Skills() {
  const [activeCat, setActiveCat] = useState('programming');
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const cat = categories[activeCat];

  return (
    <section
      id="skills"
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
          style={{ textAlign: 'center', marginBottom: 48 }}
        >
          <span style={{ fontSize: 13, fontWeight: 600, letterSpacing: 3, textTransform: 'uppercase', color: '#6366f1', marginBottom: 12, display: 'block' }}>
            Skills & Technologies
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#e2e8f0' }}>
            My <span className="gradient-text">Tech Arsenal</span>
          </h2>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{
            display: 'flex', justifyContent: 'center', gap: 8,
            marginBottom: 48, flexWrap: 'wrap',
          }}
        >
          {catKeys.map((key) => {
            const c = categories[key];
            const isActive = key === activeCat;
            return (
              <motion.button
                key={key}
                suppressHydrationWarning
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCat(key)}
                style={{
                  padding: '10px 24px', borderRadius: 12, fontWeight: 600, fontSize: 14,
                  cursor: 'pointer', border: 'none',
                  background: isActive ? c.color : 'rgba(15,15,35,0.6)',
                  color: isActive ? '#fff' : 'rgba(255,255,255,0.5)',
                  boxShadow: isActive ? `0 0 20px ${c.color}44` : 'none',
                  transition: 'all 0.3s',
                }}
              >
                {c.label}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Skills list */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCat}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            style={{
              display: 'grid', gap: 16,
              maxWidth: 800, margin: '0 auto',
            }}
          >
            {cat.skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                style={{
                  padding: 20, borderRadius: 16,
                  background: 'rgba(15,15,35,0.6)',
                  border: '1px solid rgba(99,102,241,0.08)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <skill.icon size={20} style={{ color: skill.color }} />
                    <span style={{ fontSize: 15, fontWeight: 600, color: '#e2e8f0' }}>{skill.name}</span>
                  </div>
                  <span style={{ fontSize: 13, fontWeight: 700, color: cat.color }}>{skill.level}%</span>
                </div>
                {/* Progress bar */}
                <div
                  style={{
                    width: '100%', height: 6, borderRadius: 999,
                    background: 'rgba(255,255,255,0.06)',
                    overflow: 'hidden',
                  }}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.3 + i * 0.08, ease: 'easeOut' }}
                    style={{
                      height: '100%', borderRadius: 999,
                      background: `linear-gradient(90deg, ${cat.color}, ${skill.color})`,
                      boxShadow: `0 0 8px ${cat.color}66`,
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
