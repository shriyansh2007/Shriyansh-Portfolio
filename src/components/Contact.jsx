import { motion } from 'framer-motion'
import { PROFILE } from '../data/content'

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <motion.div
          className="contact-panel"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="eyebrow">TP-04 / Contact</div>
          <h2 className="section-title contact-title">
            Got a signal worth <span className="accent">amplifying?</span>
          </h2>
          <p className="section-sub">
            Open to freelance work, internships, and interesting collaborations.
            Reach out — I read everything.
          </p>

          <div className="contact-actions">
            <motion.a
              href={PROFILE.email}
              className="btn btn-primary"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Say hello
            </motion.a>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="btn btn-ghost">
              LinkedIn ↗
            </a>
            <a href={PROFILE.github} target="_blank" rel="noreferrer" className="btn btn-ghost">
              GitHub ↗
            </a>
          </div>

          <div className="contact-waveform" aria-hidden="true">
            <svg viewBox="0 0 600 60" preserveAspectRatio="none">
              <motion.path
                d="M0 30 Q 15 5, 30 30 T 60 30 T 90 30 T 120 30 Q 135 55, 150 30 T 180 30 T 210 30 T 240 30 Q 255 5, 270 30 T 300 30 T 330 30 T 360 30 Q 375 55, 390 30 T 420 30 T 450 30 T 480 30 Q 495 5, 510 30 T 540 30 T 570 30 T 600 30"
                fill="none"
                stroke="var(--signal-dim)"
                strokeWidth="1.5"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: 'easeInOut' }}
              />
            </svg>
          </div>
        </motion.div>
      </div>

      <style>{`
        .contact-panel {
          position: relative;
          border: 1px solid var(--line);
          border-radius: 16px;
          padding: clamp(2.5rem, 6vw, 5rem);
          background:
            radial-gradient(600px circle at 20% 0%, rgba(94,234,212,0.08), transparent 60%),
            var(--surface);
          overflow: hidden;
        }
        .contact-title { margin: 0.75rem 0 1rem; }
        .contact-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-top: 2.25rem;
          position: relative;
          z-index: 2;
        }
        .contact-waveform {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 60px;
          opacity: 0.6;
        }
        .contact-waveform svg { width: 100%; height: 100%; }
      `}</style>
    </section>
  )
}
