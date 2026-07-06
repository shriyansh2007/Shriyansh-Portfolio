import { motion } from 'framer-motion'
import ThreeScene from './ThreeScene'
import { PROFILE } from '../data/content'

const headline = 'Shriyansh Goyal'.split('')

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.035, delayChildren: 0.2 },
  },
}

const letter = {
  hidden: { y: '110%', opacity: 0 },
  show: {
    y: '0%',
    opacity: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-canvas">
        <ThreeScene />
      </div>

      <div className="hero-scanline" aria-hidden="true" />

      <div className="container hero-content">
        <motion.div
          className="eyebrow"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {PROFILE.role} · {PROFILE.tagline}
        </motion.div>

        <motion.h1
          className="hero-title"
          variants={container}
          initial="hidden"
          animate="show"
          aria-label={PROFILE.name}
        >
          {headline.map((char, i) => (
            <span className="hero-letter-wrap" key={i}>
              <motion.span className="hero-letter" variants={letter}>
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        <motion.p
          className="hero-desc"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
        >
          I build full-stack products end to end — and reason about them like
          circuits: input, signal, output. Currently freelancing while
          finishing a B.Tech in Electronics &amp; Communication Engineering.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.3 }}
        >
          <a
            href="#projects"
            className="btn btn-primary"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            View Projects
          </a>
          <a href={PROFILE.github} target="_blank" rel="noreferrer" className="btn btn-ghost">
            GitHub ↗
          </a>
        </motion.div>
      </div>

      <motion.div
        className="hero-scroll-cue mono"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <span>scroll</span>
        <motion.span
          className="scroll-line"
          animate={{ scaleY: [0.2, 1, 0.2] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      <style>{`
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
          padding-top: 6rem;
        }
        .hero-canvas {
          position: absolute;
          inset: 0;
          z-index: 0;
          opacity: 0.9;
        }
        .hero-canvas::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 50% 60%, transparent 0%, var(--bg) 78%);
        }
        .hero-scanline {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          background: repeating-linear-gradient(
            0deg,
            rgba(255,255,255,0.015) 0px,
            rgba(255,255,255,0.015) 1px,
            transparent 1px,
            transparent 3px
          );
        }
        .hero-content {
          position: relative;
          z-index: 2;
        }
        .hero-title {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: clamp(2.6rem, 9vw, 6.5rem);
          line-height: 0.98;
          letter-spacing: -0.02em;
          color: var(--text);
          display: flex;
          flex-wrap: wrap;
          margin: 0.5rem 0 1.75rem;
        }
        .hero-letter-wrap {
          overflow: hidden;
          display: inline-block;
        }
        .hero-letter {
          display: inline-block;
          background: linear-gradient(180deg, var(--text) 0%, var(--text) 60%, var(--signal) 160%);
          -webkit-background-clip: text;
          background-clip: text;
        }
        .hero-desc {
          max-width: 560px;
          color: var(--text-dim);
          font-size: clamp(1rem, 1.3vw, 1.15rem);
          line-height: 1.7;
          margin-bottom: 2.25rem;
        }
        .hero-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .btn {
          padding: 0.85rem 1.6rem;
          border-radius: var(--radius);
          font-family: var(--font-mono);
          font-size: 0.85rem;
          letter-spacing: 0.03em;
          transition: all 0.25s ease;
        }
        .btn-primary {
          background: var(--signal);
          color: var(--bg);
          font-weight: 600;
        }
        .btn-primary:hover {
          box-shadow: 0 0 24px rgba(94, 234, 212, 0.45);
          transform: translateY(-2px);
        }
        .btn-ghost {
          border: 1px solid var(--line);
          color: var(--text);
        }
        .btn-ghost:hover {
          border-color: var(--signal);
          color: var(--signal);
          transform: translateY(-2px);
        }
        .hero-scroll-cue {
          position: absolute;
          bottom: 2.5rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.6rem;
          z-index: 2;
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--text-faint);
        }
        .scroll-line {
          width: 1px;
          height: 32px;
          background: var(--signal);
          transform-origin: top;
        }
      `}</style>
    </section>
  )
}
