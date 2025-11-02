'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './GitHubBall.module.css';

export default function GitHubBall() {
  const BALL_SIZE = 48; 
  const MARGIN = 12;

  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  const dragging = useRef(false);
  const start = useRef({ x: 0, y: 0 });
  const offset = useRef({ x: 0, y: 0 });
  const moved = useRef(false);
  const vy = useRef(0);
  const lastTime = useRef<number | null>(null);

  useEffect(() => {
    const NAV_OFFSET = 69;
    const initial = {
      x: 69 + BALL_SIZE + MARGIN,
      y: NAV_OFFSET,
    };
    setPos(initial);

    const handleResize = () => {
      setPos((p) => {
        if (!p) return initial;
        const clampedX = Math.min(Math.max(MARGIN, p.x), window.innerWidth - BALL_SIZE - MARGIN);
        const clampedY = Math.min(Math.max(MARGIN, p.y), window.innerHeight - BALL_SIZE - MARGIN);
        return { x: clampedX, y: clampedY };
      });
    };
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (mouseMoveHandler.current) window.removeEventListener('mousemove', mouseMoveHandler.current);
      if (mouseUpHandler.current) window.removeEventListener('mouseup', mouseUpHandler.current);
      if (touchMoveHandler.current) window.removeEventListener('touchmove', touchMoveHandler.current);
      if (touchEndHandler.current) window.removeEventListener('touchend', touchEndHandler.current);
    };
  }, []);

  const openGitHub = () => {
    window.open('https://github.com/Abdox77', '_blank', 'noopener');
  };

  const mouseMoveHandler = useRef<(e: MouseEvent) => void>();
  const mouseUpHandler = useRef<(e: MouseEvent) => void>();
  const touchMoveHandler = useRef<(e: TouchEvent) => void>();
  const touchEndHandler = useRef<(e: TouchEvent) => void>();

  const onMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dragging.current = true;
    moved.current = false;
    start.current = { x: e.clientX, y: e.clientY };
    if (pos) offset.current = { x: e.clientX - pos.x, y: e.clientY - pos.y };

    mouseMoveHandler.current = (e: MouseEvent) => {
      if (!dragging.current) return;
      moved.current = true;
      const x = e.clientX - offset.current.x;
      const y = e.clientY - offset.current.y;
      const clampedX = Math.min(Math.max(MARGIN, x), window.innerWidth - BALL_SIZE - MARGIN);
      const clampedY = Math.min(Math.max(MARGIN, y), window.innerHeight - BALL_SIZE - MARGIN);
      setPos({ x: clampedX, y: clampedY });
    };

    mouseUpHandler.current = (e: MouseEvent) => {
      if (mouseMoveHandler.current) window.removeEventListener('mousemove', mouseMoveHandler.current);
      if (mouseUpHandler.current) window.removeEventListener('mouseup', mouseUpHandler.current);
      const dist = Math.hypot(e.clientX - start.current.x, e.clientY - start.current.y);
      dragging.current = false;
      if (dist < 6 && !moved.current) {
        openGitHub();
      } else {
        vy.current = 0;
        lastTime.current = null;
      }
    };

    window.addEventListener('mousemove', mouseMoveHandler.current);
    window.addEventListener('mouseup', mouseUpHandler.current);
  };

  const onTouchStart = (e: React.TouchEvent<HTMLButtonElement>) => {
    const t = e.touches[0];
    dragging.current = true;
    moved.current = false;
    start.current = { x: t.clientX, y: t.clientY };
    if (pos) offset.current = { x: t.clientX - pos.x, y: t.clientY - pos.y };

    touchMoveHandler.current = (e: TouchEvent) => {
      if (!dragging.current) return;
      e.preventDefault();
      const t = e.touches[0];
      moved.current = true;
      const x = t.clientX - offset.current.x;
      const y = t.clientY - offset.current.y;
      const clampedX = Math.min(Math.max(MARGIN, x), window.innerWidth - BALL_SIZE - MARGIN);
      const clampedY = Math.min(Math.max(MARGIN, y), window.innerHeight - BALL_SIZE - MARGIN);
      setPos({ x: clampedX, y: clampedY });
    };

    touchEndHandler.current = (e: TouchEvent) => {
      if (touchMoveHandler.current) window.removeEventListener('touchmove', touchMoveHandler.current);
      if (touchEndHandler.current) window.removeEventListener('touchend', touchEndHandler.current);
      dragging.current = false;
      if (!moved.current) openGitHub();
      else {
        vy.current = 0;
        lastTime.current = null;
      }
    };

    window.addEventListener('touchmove', touchMoveHandler.current, { passive: false });
    window.addEventListener('touchend', touchEndHandler.current);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openGitHub();
    }
  };

  useEffect(() => {
    let raf = 0;
    const g = 2000; 
    const bounceDamping = 0.5; 
    const stopThreshold = 20;

    const step = (t: number) => {
      if (!pos) {
        lastTime.current = t;
        raf = requestAnimationFrame(step);
        return;
      }

      if (dragging.current) {
        lastTime.current = t;
        raf = requestAnimationFrame(step);
        return;
      }

      const maxY = window.innerHeight - BALL_SIZE - MARGIN;
      const now = t;
      const lt = lastTime.current ?? now;
      const dt = Math.min(0.05, (now - lt) / 1000);
      lastTime.current = now;

      vy.current += g * dt;
      let newY = pos.y + vy.current * dt;

      if (newY >= maxY) {
        newY = maxY;
        vy.current = -vy.current * bounceDamping;
        if (Math.abs(vy.current) < stopThreshold) {
          vy.current = 0;
        }
      }

      setPos((p) => (p ? { x: p.x, y: newY } : { x: (window.innerWidth - BALL_SIZE - MARGIN), y: newY }));

      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [pos]);

  return (
    <button
      className={styles.ball}
      title="Open GitHub (click)"
      aria-label="Open GitHub"
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
      onKeyDown={onKeyDown}
      style={pos ? { left: `${pos.x}px`, top: `${pos.y}px` } : undefined}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
        <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.36-1.3-1.72-1.3-1.72-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.76.41-1.27.75-1.56-2.56-.29-5.26-1.28-5.26-5.68 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.45.11-3.02 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.21-1.49 3.18-1.18 3.18-1.18.63 1.57.23 2.73.11 3.02.74.81 1.19 1.84 1.19 3.1 0 4.41-2.71 5.38-5.29 5.66.42.36.79 1.07.79 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.21.68.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z"/>
      </svg>
    </button>
  );
}
