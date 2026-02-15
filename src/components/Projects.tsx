'use client';

import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaRocket, FaRobot, FaBriefcase, FaHome, FaHospital, FaWater } from 'react-icons/fa';

interface Project {
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  tech: string[];
  icon: React.ElementType;
  color: string;
  github?: string;
  live?: string;
  featured?: boolean;
  highlights: string[];
}

const projects: Project[] = [
  {
    title: 'LifeLink',
    tagline: 'Save Lives with Technology',
    description: 'An AI-powered healthcare platform connecting donors, patients, and hospitals for blood and organ donation.',
    longDescription: 'LifeLink is a comprehensive healthcare platform that leverages AI to connect blood donors, organ donors, patients, and hospitals in real time. Features include AI chatbot triage, real-time donor matching, hospital dashboards, and emergency alert systems.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'AI/ML', 'Socket.io'],
    icon: FaHospital,
    color: '#ef4444',
    github: 'https://github.com/Rajcreates001/LifeLink-MERN',
    featured: true,
    highlights: ['AI-powered donor matching', 'Real-time alerts', 'Hospital dashboard', 'Emergency triage'],
  },
  {
    title: 'DreamTalk',
    tagline: '₹4.3 Lakh Funded AI Product',
    description: 'An AI-powered communication platform that secured ₹4.3 Lakh in startup funding for innovative conversational AI.',
    longDescription: 'DreamTalk is an AI-driven conversational platform that uses advanced NLP to enable seamless human-AI interaction. The product secured ₹4.3 Lakh in funding through startup competitions and investor pitches, validating its market potential.',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'OpenAI API', 'Tailwind CSS'],
    icon: FaRobot,
    color: '#06d6a0',
    featured: true,
    highlights: ['₹4.3L funding secured', 'AI/NLP powered', 'Investor-validated', 'Under development'],
  },
  {
    title: 'NextMissionHub',
    tagline: 'Startup Ecosystem Platform',
    description: 'A platform connecting startups with resources, mentors, and funding opportunities in one unified hub.',
    longDescription: 'NextMissionHub serves as a one-stop platform for startup founders to find co-founders, mentors, investors, and resources. Built with the MERN stack, it features project showcases, team matching, and funding pipeline tracking.',
    tech: ['React.js', 'Express.js', 'MongoDB', 'REST APIs', 'JWT Auth'],
    icon: FaRocket,
    color: '#6366f1',
    github: 'https://github.com/Dimpana-BR/nextmissionhub',
    highlights: ['Startup matching', 'Mentor connect', 'Funding pipeline', 'Team formation'],
  },
  {
    title: 'BuildEase',
    tagline: 'Construction Management Tool',
    description: 'A comprehensive construction project management tool for tracking progress, budgets, and timelines.',
    longDescription: 'BuildEase streamlines construction project management with features for progress tracking, budget management, timeline visualization, and team coordination. The platform helps reduce project overruns and improve communication.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Chart.js', 'Express.js'],
    icon: FaBriefcase,
    color: '#f59e0b',
    github: 'https://github.com/Rajcreates001/BuildEase',
    highlights: ['Budget tracking', 'Timeline viz', 'Team coordination', 'Progress reports'],
  },
  {
    title: 'Homestays Platform',
    tagline: 'Travel & Accommodation',
    description: 'A homestay booking platform with search, filtering, and booking management for travelers and hosts.',
    longDescription: 'A full-featured accommodation platform allowing travelers to discover, compare, and book homestays. Hosts can list properties, manage bookings, and track revenue. Built with modern web technologies and responsive design.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Stripe'],
    icon: FaHome,
    color: '#22d3ee',
    github: 'https://github.com/Rajcreates001/HomeStays',
    highlights: ['Search & filter', 'Booking system', 'Host dashboard', 'Payment integration'],
  },
  {
    title: 'AquaIntel',
    tagline: 'AI-Driven Health-Tech Platform',
    description: 'An AI-driven health-tech platform designed to predict, monitor, and prevent waterborne diseases by analyzing environmental and public health data.',
    longDescription: 'AquaIntel is an AI-driven health-tech platform designed to predict, monitor, and prevent waterborne diseases by analyzing environmental and public health data. The system focuses on early detection of disease outbreaks such as cholera, typhoid, dengue (water-related vector), and other contamination-based infections.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'AI/ML', 'Express.js', 'Python'],
    icon: FaWater,
    color: '#0ea5e9',
    github: 'https://github.com/Rajcreates001/AquaIntel',
    featured: true,
    highlights: ['Disease prediction', 'Water quality analysis', 'Outbreak detection', 'Public health data'],
  },
];

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setPortalRoot(document.body);
  }, []);

  return (
    <>
    <section
      id="projects"
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
            Portfolio
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#e2e8f0' }}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        {/* Projects grid */}
        <div
          style={{ display: 'grid', gap: 24 }}
          className="md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => setSelected(project)}
              style={{
                position: 'relative', cursor: 'pointer',
                padding: 28, borderRadius: 20,
                background: 'rgba(15,15,35,0.6)',
                border: `1px solid ${project.color}22`,
                backdropFilter: 'blur(12px)',
                overflow: 'hidden',
                transition: 'border-color 0.3s',
              }}
            >
              {/* Featured badge */}
              {project.featured && (
                <div
                  style={{
                    position: 'absolute', top: 16, right: 16,
                    padding: '4px 10px', borderRadius: 999,
                    fontSize: 10, fontWeight: 700, textTransform: 'uppercase',
                    color: '#06d6a0', letterSpacing: 1,
                    background: 'rgba(6,214,160,0.1)',
                    border: '1px solid rgba(6,214,160,0.2)',
                  }}
                >
                  Featured
                </div>
              )}

              {/* Hover glow */}
              <div
                style={{
                  position: 'absolute', inset: 0, opacity: 0,
                  background: `radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${project.color}11, transparent 70%)`,
                  transition: 'opacity 0.3s',
                }}
              />

              {/* Icon */}
              <div
                style={{
                  width: 48, height: 48, borderRadius: 14,
                  background: `${project.color}18`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 16,
                }}
              >
                <project.icon size={22} style={{ color: project.color }} />
              </div>

              {/* Content */}
              <h3 style={{ fontSize: 20, fontWeight: 700, color: '#e2e8f0', marginBottom: 4 }}>{project.title}</h3>
              <p style={{ fontSize: 13, color: project.color, fontWeight: 600, marginBottom: 12 }}>{project.tagline}</p>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, marginBottom: 16 }}>
                {project.description}
              </p>

              {/* Tech tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
                {project.tech.slice(0, 4).map((t) => (
                  <span
                    key={t}
                    style={{
                      padding: '4px 10px', borderRadius: 8, fontSize: 11, fontWeight: 500,
                      color: 'rgba(255,255,255,0.55)',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div style={{ display: 'flex', gap: 12 }}>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    style={{ color: 'rgba(255,255,255,0.4)', transition: 'color 0.2s', display: 'flex' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
                  >
                    <FaGithub size={16} />
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    style={{ color: 'rgba(255,255,255,0.4)', transition: 'color 0.2s', display: 'flex' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
                  >
                    <FaExternalLinkAlt size={14} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>

      {/* Project modal - rendered via portal to avoid overflow:hidden clipping */}
      {portalRoot && createPortal(
        <AnimatePresence>
          {selected && (
            <motion.div
              key="project-modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelected(null)}
              style={{
                position: 'fixed', inset: 0, zIndex: 9999,
                background: 'rgba(0,0,0,0.75)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                padding: 24,
              }}
            >
              <motion.div
                key="project-modal-content"
                initial={{ opacity: 0, scale: 0.92, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 30 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                onClick={(e) => e.stopPropagation()}
                style={{
                  position: 'relative',
                  width: '100%', maxWidth: 600, maxHeight: '85vh',
                  borderRadius: 24,
                  background: 'rgba(15,15,35,0.97)',
                  border: `1px solid ${selected.color}33`,
                  boxShadow: `0 0 60px ${selected.color}22, 0 25px 50px rgba(0,0,0,0.5)`,
                  display: 'flex', flexDirection: 'column' as const,
                  overflow: 'hidden',
                }}
              >
                {/* Close button - fixed to top-right of modal */}
                <button
                  onClick={() => setSelected(null)}
                  style={{
                    position: 'absolute', top: 12, right: 12,
                    zIndex: 30,
                    width: 36, height: 36,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: 'rgba(15,15,35,0.95)', border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: 10, padding: 0, cursor: 'pointer',
                    color: 'rgba(255,255,255,0.8)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                    transition: 'background 0.2s, color 0.2s, transform 0.2s',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,60,60,0.8)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.transform = 'scale(1.1)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(15,15,35,0.95)'; e.currentTarget.style.color = 'rgba(255,255,255,0.8)'; e.currentTarget.style.transform = 'scale(1)'; }}
                >
                  <FaTimes size={14} />
                </button>

                {/* Scrollable content */}
                <div style={{ overflowY: 'auto', padding: 36 }}>
                  {/* Icon */}
                  <div
                    style={{
                      width: 56, height: 56, borderRadius: 16,
                      background: `${selected.color}18`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      marginBottom: 20,
                    }}
                  >
                    <selected.icon size={26} style={{ color: selected.color }} />
                  </div>

                  <h3 style={{ fontSize: 28, fontWeight: 700, color: '#e2e8f0', marginBottom: 4 }}>{selected.title}</h3>
                  <p style={{ fontSize: 15, color: selected.color, fontWeight: 600, marginBottom: 16 }}>{selected.tagline}</p>
                  <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, marginBottom: 24 }}>
                    {selected.longDescription}
                  </p>

                  {/* Highlights */}
                  <div style={{ marginBottom: 24 }}>
                    <h4 style={{ fontSize: 14, fontWeight: 600, color: '#e2e8f0', marginBottom: 12 }}>Key Features</h4>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8 }}>
                      {selected.highlights.map((h) => (
                        <div key={h} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>
                          <span style={{ width: 6, height: 6, borderRadius: '50%', background: selected.color, flexShrink: 0 }} />
                          {h}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
                    {selected.tech.map((t) => (
                      <span
                        key={t}
                        style={{
                          padding: '6px 14px', borderRadius: 10, fontSize: 12, fontWeight: 500,
                          color: 'rgba(255,255,255,0.6)', background: 'rgba(255,255,255,0.05)',
                          border: '1px solid rgba(255,255,255,0.08)',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div style={{ display: 'flex', gap: 12 }}>
                    {selected.github && (
                      <a
                        href={selected.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'flex', alignItems: 'center', gap: 8,
                          padding: '10px 20px', borderRadius: 12, fontSize: 14, fontWeight: 600,
                          color: '#fff', background: 'rgba(255,255,255,0.08)',
                          border: '1px solid rgba(255,255,255,0.12)',
                          textDecoration: 'none',
                        }}
                      >
                        <FaGithub /> View Code
                      </a>
                    )}
                    {selected.live && (
                      <a
                        href={selected.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'flex', alignItems: 'center', gap: 8,
                          padding: '10px 20px', borderRadius: 12, fontSize: 14, fontWeight: 600,
                          color: '#fff', background: selected.color,
                          textDecoration: 'none',
                        }}
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        portalRoot
      )}
    </>
  );
}
