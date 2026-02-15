'use client';

import { useRef, useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaPaperPlane, FaPhone } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

// ─── EmailJS Configuration ───
const EMAILJS_SERVICE_ID = 'service_0r36b15';
const EMAILJS_TEMPLATE_ID = 'template_yhgdjwg';
const EMAILJS_AUTOREPLY_TEMPLATE_ID = 'template_yhgdjwg';
const EMAILJS_PUBLIC_KEY = 'mLbuPAQItYe71VASq';

const contactInfo = [
  { icon: FaEnvelope, label: 'Email', value: 'maharaj.career@gmail.com', href: 'mailto:maharaj.career@gmail.com', color: '#6366f1' },
  { icon: FaPhone, label: 'Phone', value: '+91 93537 38676', href: 'tel:+919353738676', color: '#22d3ee' },
  { icon: FaLinkedin, label: 'LinkedIn', value: 'linkedin.com/in/maharaj07', href: 'https://www.linkedin.com/in/maharaj07', color: '#0077b5' },
  { icon: FaGithub, label: 'GitHub', value: 'github.com/Rajcreates001', href: 'https://github.com/Rajcreates001', color: '#e2e8f0' },
  { icon: FaMapMarkerAlt, label: 'Location', value: 'Mangalore, Karnataka', color: '#06d6a0' },
];

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus('sending');
    try {
      // Send main email to you
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY,
      );

      // Send auto-reply to the sender
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_AUTOREPLY_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_email: form.email,
        },
        EMAILJS_PUBLIC_KEY,
      );

      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '14px 18px',
    borderRadius: 14,
    fontSize: 14,
    color: '#e2e8f0',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.08)',
    outline: 'none',
    transition: 'border-color 0.2s',
    fontFamily: 'inherit',
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="section-padding"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <span style={{ fontSize: 13, fontWeight: 600, letterSpacing: 3, textTransform: 'uppercase', color: '#6366f1', marginBottom: 12, display: 'block' }}>
            Get In Touch
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#e2e8f0' }}>
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', maxWidth: 520, margin: '12px auto 0' }}>
            Have a project in mind or just want to chat? I&apos;m always open to new opportunities and collaborations.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gap: 40 }} className="lg:grid-cols-2">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div style={{ display: 'grid', gap: 16, marginBottom: 32 }}>
              {contactInfo.map((c, i) => (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 16,
                    padding: 18, borderRadius: 16,
                    background: 'rgba(15,15,35,0.6)',
                    border: `1px solid ${c.color}18`,
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <div
                    style={{
                      width: 44, height: 44, borderRadius: 12,
                      background: `${c.color}15`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <c.icon size={18} style={{ color: c.color }} />
                  </div>
                  <div>
                    <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginBottom: 2 }}>{c.label}</p>
                    {c.href ? (
                      <a
                        href={c.href}
                        target={c.href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        style={{ fontSize: 14, color: '#e2e8f0', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = c.color)}
                        onMouseLeave={(e) => (e.currentTarget.style.color = '#e2e8f0')}
                      >
                        {c.value}
                      </a>
                    ) : (
                      <p style={{ fontSize: 14, color: '#e2e8f0', fontWeight: 500 }}>{c.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              style={{
                padding: 24, borderRadius: 18,
                background: 'linear-gradient(135deg, rgba(99,102,241,0.1), rgba(34,211,238,0.05))',
                border: '1px solid rgba(99,102,241,0.15)',
              }}
            >
              <h3 style={{ fontSize: 16, fontWeight: 700, color: '#e2e8f0', marginBottom: 8 }}>
                Open to Opportunities
              </h3>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>
                Looking for internships, freelance projects, or collaboration opportunities. Let&apos;s build something amazing together!
              </p>
            </motion.div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              style={{
                padding: 32, borderRadius: 20,
                background: 'rgba(15,15,35,0.6)',
                border: '1px solid rgba(99,102,241,0.08)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <div style={{ marginBottom: 20 }}>
                <label style={{ fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.5)', marginBottom: 8, display: 'block' }}>
                  Your Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  required
                  suppressHydrationWarning
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  placeholder="John Doe"
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = 'rgba(99,102,241,0.4)')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.08)')}
                />
              </div>

              <div style={{ marginBottom: 20 }}>
                <label style={{ fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.5)', marginBottom: 8, display: 'block' }}>
                  Your Email
                </label>
                <input
                  type="email"
                  name="from_email"
                  required
                  suppressHydrationWarning
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  placeholder="john@example.com"
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = 'rgba(99,102,241,0.4)')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.08)')}
                />
              </div>

              <div style={{ marginBottom: 24 }}>
                <label style={{ fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.5)', marginBottom: 8, display: 'block' }}>
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  placeholder="Tell me about your project or opportunity..."
                  style={{ ...inputStyle, resize: 'vertical', minHeight: 120 }}
                  onFocus={(e) => (e.target.style.borderColor = 'rgba(99,102,241,0.4)')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.08)')}
                />
              </div>

              <motion.button
                type="submit"
                suppressHydrationWarning
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={status === 'sending'}
                style={{
                  width: '100%', padding: '14px 28px', borderRadius: 14,
                  fontSize: 15, fontWeight: 600, border: 'none', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                  color: '#fff',
                  background: status === 'sent'
                    ? '#06d6a0'
                    : status === 'error'
                    ? '#ef4444'
                    : 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                  boxShadow: '0 0 20px rgba(99,102,241,0.25)',
                  transition: 'all 0.3s',
                  opacity: status === 'sending' ? 0.7 : 1,
                }}
              >
                {status === 'idle' && <><FaPaperPlane /> Send Message</>}
                {status === 'sending' && 'Sending...'}
                {status === 'sent' && 'Message Sent! ✓'}
                {status === 'error' && 'Failed to send. Try again.'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
