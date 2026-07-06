import { motion } from 'framer-motion'
import { ABOUT } from '../data/content'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about-grid">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          <div className="eyebrow">TP-01 / About</div>
          <h2 className="section-title">
            Reading the signal <span className="accent">behind the noise.</span>
          </h2>
        </motion.div>

        <div className="about-body">
          {ABOUT.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              custom={i + 1}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
              className="about-p"
            >
              {p}
            </motion.p>
          ))}

          <motion.div
            className="about-stats"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            custom={3}
          >
            {ABOUT.stats.map((stat) => (
              <div className="stat-card" key={stat.label}>
                <span className="stat-value mono">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
                <span className="stat-sub">{stat.sub}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
        }
        @media (min-width: 900px) {
          .about-grid {
            grid-template-columns: 0.85fr 1.15fr;
            gap: 5rem;
          }
        }
        .about-p {
          color: var(--text-dim);
          font-size: 1.05rem;
          line-height: 1.8;
          margin-bottom: 1.5rem;
        }
        .about-p:last-of-type { margin-bottom: 2.5rem; }
        .about-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }
        .stat-card {
          border: 1px solid var(--line);
          border-radius: var(--radius);
          padding: 1.25rem 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          background: var(--surface);
          transition: all 0.3s ease;
        }
        .stat-card:hover {
          border-color: var(--signal-dim);
          transform: translateY(-4px);
          box-shadow: 0 8px 30px rgba(0,0,0,0.35);
        }
        .stat-value {
          font-size: 1.4rem;
          font-weight: 600;
          color: var(--signal);
        }
        .stat-label {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text);
        }
        .stat-sub {
          font-size: 0.78rem;
          color: var(--text-faint);
        }
        @media (max-width: 560px) {
          .about-stats { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
