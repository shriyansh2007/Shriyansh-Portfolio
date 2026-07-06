import { useRef } from 'react'
import { motion } from 'framer-motion'
import { PROJECTS } from '../data/content'

function ProjectCard({ project, index }) {
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    card.style.setProperty('--mx', `${x}%`)
    card.style.setProperty('--my', `${y}%`)
  }

  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      ref={cardRef}
      className="project-card"
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
    >
      <div className="project-glow" />
      <div className="project-top">
        <span className="project-index mono">{project.id}</span>
        <span className="project-link-icon">↗</span>
      </div>
      <h3 className="project-name">{project.name}</h3>
      <p className="project-desc">{project.description}</p>
      <div className="project-tags">
        {project.tags.map((tag) => (
          <span key={tag} className="project-tag mono">
            {tag}
          </span>
        ))}
      </div>

      <style>{`
        .project-card {
          --mx: 50%;
          --my: 50%;
          position: relative;
          display: block;
          border: 1px solid var(--line);
          border-radius: 10px;
          padding: 2rem;
          background: var(--surface);
          overflow: hidden;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .project-card:hover {
          border-color: var(--signal-dim);
          box-shadow: 0 20px 50px rgba(0,0,0,0.4);
        }
        .project-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(240px circle at var(--mx) var(--my), rgba(94,234,212,0.12), transparent 70%);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }
        .project-card:hover .project-glow { opacity: 1; }
        .project-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }
        .project-index {
          font-size: 0.85rem;
          color: var(--copper);
        }
        .project-link-icon {
          color: var(--text-faint);
          transition: all 0.3s ease;
        }
        .project-card:hover .project-link-icon {
          color: var(--signal);
          transform: translate(3px, -3px);
        }
        .project-name {
          font-family: var(--font-display);
          font-size: 1.4rem;
          font-weight: 600;
          color: var(--text);
          margin-bottom: 0.75rem;
        }
        .project-desc {
          color: var(--text-dim);
          font-size: 0.95rem;
          line-height: 1.65;
          margin-bottom: 1.5rem;
          min-height: 4.5em;
        }
        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .project-tag {
          font-size: 0.7rem;
          color: var(--signal);
          border: 1px solid var(--signal-dim);
          border-radius: 4px;
          padding: 0.25rem 0.55rem;
        }
      `}</style>
    </motion.a>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <div className="eyebrow">TP-03 / Projects</div>
          <h2 className="section-title">
            Things I've <span className="accent">shipped</span> and broken on purpose.
          </h2>
          <p className="section-sub">
            A mix of systems work and product work — consensus algorithms on
            one end, full-stack platforms on the other.
          </p>
        </motion.div>

        <div className="projects-grid">
          {PROJECTS.map((project, i) => (
            <ProjectCard project={project} index={i} key={project.id} />
          ))}
        </div>
      </div>

      <style>{`
        .projects-grid {
          margin-top: 3rem;
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        @media (min-width: 780px) {
          .projects-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1150px) {
          .projects-grid { grid-template-columns: repeat(3, 1fr); }
        }
      `}</style>
    </section>
  )
}
