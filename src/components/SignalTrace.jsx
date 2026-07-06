import { motion } from 'framer-motion'
import { NAV_LINKS } from '../data/content'
import { useActiveSection } from '../hooks/useActiveSection'

// SIGNATURE ELEMENT: a vertical PCB trace running down the side of the page.
// A pulse continuously travels its length like current through a circuit,
// and each section gets a "test point" node that lights up when active —
// turning scroll position into a literal signal reading. Desktop only;
// on mobile the metaphor moves into the mobile nav dots instead.
export default function SignalTrace() {
  const ids = NAV_LINKS.map((l) => l.id)
  const active = useActiveSection(ids)
  const activeIndex = Math.max(ids.indexOf(active), 0)

  return (
    <div className="signal-trace" aria-hidden="true">
      <svg width="2" height="100%" style={{ position: 'absolute', left: '50%' }}>
        <line x1="1" y1="0" x2="1" y2="100%" stroke="var(--line)" strokeWidth="2" />
      </svg>

      {/* traveling pulse */}
      <motion.div
        className="signal-pulse"
        animate={{ top: ['0%', '100%'] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
      />

      <div className="signal-nodes">
        {NAV_LINKS.map((link, i) => (
          <a href={`#${link.id}`} className="signal-node-wrap" key={link.id}>
            <span
              className={`signal-node ${i === activeIndex ? 'is-active' : ''}`}
              style={{ top: `${(i / (NAV_LINKS.length - 1)) * 100}%` }}
            />
            <span
              className={`signal-label mono ${i === activeIndex ? 'is-active' : ''}`}
              style={{ top: `${(i / (NAV_LINKS.length - 1)) * 100}%` }}
            >
              {String(i + 1).padStart(2, '0')} {link.label}
            </span>
          </a>
        ))}
      </div>

      <style>{`
        .signal-trace {
          position: fixed;
          left: 2.5rem;
          top: 0;
          height: 100vh;
          width: 2px;
          z-index: 40;
          display: none;
        }
        @media (min-width: 1100px) {
          .signal-trace { display: block; }
        }
        .signal-pulse {
          position: absolute;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--signal);
          box-shadow: 0 0 16px 4px var(--signal);
        }
        .signal-nodes {
          position: relative;
          height: 60vh;
          margin-top: 20vh;
        }
        .signal-node-wrap {
          position: absolute;
          left: 0;
          display: flex;
          align-items: center;
          transform: translateY(-50%);
        }
        .signal-node {
          position: absolute;
          left: -3px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--bg-alt);
          border: 2px solid var(--text-faint);
          transition: all 0.3s ease;
        }
        .signal-node.is-active {
          background: var(--signal);
          border-color: var(--signal);
          box-shadow: 0 0 10px 3px rgba(94, 234, 212, 0.6);
        }
        .signal-label {
          position: absolute;
          left: 1.25rem;
          font-size: 0.7rem;
          letter-spacing: 0.08em;
          color: var(--text-faint);
          white-space: nowrap;
          opacity: 0;
          transform: translateX(-6px);
          transition: all 0.25s ease;
        }
        .signal-node-wrap:hover .signal-label,
        .signal-label.is-active {
          opacity: 1;
          transform: translateX(0);
          color: var(--signal);
        }
      `}</style>
    </div>
  )
}
