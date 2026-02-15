'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CursorEffect() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if ('ontouchstart' in window) return;

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
      const t = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(t).cursor === 'pointer' ||
        t.tagName === 'A' || t.tagName === 'BUTTON' ||
        !!t.closest('a') || !!t.closest('button')
      );
    };
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);
    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      <motion.div
        animate={{ x: pos.x - 20, y: pos.y - 20, scale: isPointer ? 1.8 : 1 }}
        transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
        style={{
          position: 'fixed', top: 0, left: 0, width: 40, height: 40,
          borderRadius: '50%', pointerEvents: 'none', zIndex: 9998,
          mixBlendMode: 'screen',
          background: 'radial-gradient(circle, rgba(99,102,241,0.35) 0%, transparent 70%)',
        }}
      />
      <motion.div
        animate={{ x: pos.x - 4, y: pos.y - 4, scale: isPointer ? 0 : 1 }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
        style={{
          position: 'fixed', top: 0, left: 0, width: 8, height: 8,
          borderRadius: '50%', pointerEvents: 'none', zIndex: 9998,
          background: '#22d3ee',
          boxShadow: '0 0 12px rgba(34,211,238,0.6)',
        }}
      />
    </>
  );
}
