import { PROFILE } from '../data/content'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="mono footer-copy">
          © {new Date().getFullYear()} {PROFILE.name}
        </span>
        <button
          className="mono footer-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          back to top ↑
        </button>
      </div>

      <style>{`
        .footer {
          border-top: 1px solid var(--line);
          padding: 2rem 0;
        }
        .footer-inner {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: space-between;
          align-items: center;
        }
        .footer-copy, .footer-top {
          font-size: 0.75rem;
          letter-spacing: 0.05em;
          color: var(--text-faint);
        }
        .footer-top {
          transition: color 0.25s ease;
        }
        .footer-top:hover { color: var(--signal); }
      `}</style>
    </footer>
  )
}
