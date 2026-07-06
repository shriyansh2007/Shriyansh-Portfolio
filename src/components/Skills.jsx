import { motion } from 'framer-motion'
import { SKILLS, COURSEWORK } from '../data/content'

const groupVariant = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
}

const chipVariant = {
  hidden: { opacity: 0, scale: 0.85 },
  show: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35, delay: 0.15 + i * 0.03 },
  }),
}

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <div className="eyebrow">TP-02 / Skills</div>
          <h2 className="section-title">
            The <span className="accent">stack</span>, mapped like a board.
          </h2>
          <p className="section-sub">
            Every chip below is a component I actually reach for — grouped the
            way a schematic groups a circuit, by function, not alphabet.
          </p>
        </motion.div>

        <div className="skills-grid">
          {SKILLS.map((group, gi) => (
            <motion.div
              className="skill-card"
              key={group.id}
              custom={gi}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={groupVariant}
            >
              <div className="skill-card-header">
                <span className="skill-index mono">{String(gi + 1).padStart(2, '0')}</span>
                <h3>{group.group}</h3>
              </div>
              <div className="skill-chips">
                {group.items.map((item, ii) => (
                  <motion.span
                    className="chip"
                    key={item}
                    custom={ii}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={chipVariant}
                    whileHover={{ y: -3, borderColor: 'var(--signal)', color: 'var(--signal)' }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="coursework"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <span className="coursework-label mono">Relevant Coursework</span>
          <div className="coursework-list">
            {COURSEWORK.map((c) => (
              <span key={c} className="coursework-item">
                {c}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        .skills-grid {
          margin-top: 3rem;
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }
        @media (min-width: 720px) {
          .skills-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1080px) {
          .skills-grid { grid-template-columns: repeat(3, 1fr); }
        }
        .skill-card {
          border: 1px solid var(--line);
          border-radius: var(--radius);
          background: var(--surface);
          padding: 1.5rem;
          position: relative;
          overflow: hidden;
        }
        .skill-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, var(--signal), transparent);
          opacity: 0.6;
        }
        .skill-card-header {
          display: flex;
          align-items: baseline;
          gap: 0.6rem;
          margin-bottom: 1.1rem;
        }
        .skill-index {
          color: var(--copper);
          font-size: 0.75rem;
        }
        .skill-card-header h3 {
          font-family: var(--font-display);
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--text);
        }
        .skill-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .chip {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          padding: 0.4rem 0.7rem;
          border: 1px solid var(--line);
          border-radius: 999px;
          color: var(--text-dim);
          transition: all 0.25s ease;
          cursor: default;
        }

        .coursework {
          margin-top: 3.5rem;
          padding-top: 2.5rem;
          border-top: 1px solid var(--line);
        }
        .coursework-label {
          font-size: 0.7rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--copper);
        }
        .coursework-list {
          margin-top: 1rem;
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem 1rem;
        }
        .coursework-item {
          font-size: 0.9rem;
          color: var(--text-dim);
          position: relative;
          padding-left: 1rem;
        }
        .coursework-item::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.5em;
          width: 6px;
          height: 1px;
          background: var(--copper);
        }
      `}</style>
    </section>
  )
}
