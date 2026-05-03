import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mail, Phone, ChevronDown } from 'lucide-react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import './layout.css';

const navItems = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Sobre nós',
    children: [
      { label: 'Rotary International', path: 'https://www.rotary.org/pt', external: true },
      { label: 'Nossa História', path: '/historia' },
      { label: 'Distrito 4510', path: '/d4510' },
    ],
  },
  {
    label: 'Candidatos',
    children: [
      { label: 'Programas', path: '/programas' },
      { label: 'Treinamentos', path: '/candidatos/treinamentos' },
      { label: 'Downloads', path: '/candidatos/downloads' },
    ],
  },
  { label: 'Famílias', path: '/familias' },
  {
    label: 'Clubes',
    children: [
      { label: 'Contato', path: '/d4510' },
      { label: 'Treinamentos', path: '/clubes/treinamentos' },
      { label: 'Download', path: '/clubes/downloads' },
    ],
  },
  { label: 'Calendário', path: '/eventos' },
  {
    label: 'Mais',
    children: [
      { label: 'Blog', path: '/blog' },
      { label: 'Galeria', path: '/galeria' },
      { label: 'Voluntários', path: '/voluntarios' },
      { label: 'Inscreva-se', path: '/inscricao' },
    ],
  },
  { label: 'Contato', path: '/contato' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMobSub, setOpenMobSub] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); setOpenMobSub(null); }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        {/* ── Topbar ── */}
        <div className={`topbar${scrolled ? ' scrolled' : ''}`}>
          <div className="topbar-links">
            <a href="mailto:ryep4510@gmail.com"><Mail size={13} /> yep4510@gmail.com</a>
            <a href="https://wa.me/5518996527252"><Phone size={13} /> (18) 99652-7252</a>
          </div>
          <div className="topbar-actions">
            <a href="https://www.facebook.com/yep4510" target="_blank" rel="noreferrer"><FaFacebook size={14} /></a>
            <a href="https://www.instagram.com/yep4510/" target="_blank" rel="noreferrer"><FaInstagram size={14} /></a>
            <a href="https://www.youtube.com/channel/UCQScU_raNswx3TBhQHRmF7g" target="_blank" rel="noreferrer"><FaYoutube size={14} /></a>
            <a href="/en"><img className="flag-icon" src="/img/flag-usa-color.png" alt="English" /></a>
            <a href="/"><img className="flag-icon" src="/img/flag-brazil-color.png" alt="Português" /></a>
          </div>
        </div>

        {/* ── Main Nav ── */}
        <div className="nav-main">
          <Link to="/" className="nav-logo">
            <img src="/img/rye-logo.png" alt="Rotary Youth Exchange" />
          </Link>

          {/* Desktop links */}
          <div className="nav-links">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label} className="nav-dropdown">
                  <span>
                    {item.label}
                    <ChevronDown size={13} className="dd-arrow" />
                  </span>
                  <div className="dropdown-menu">
                    {item.children.map((child) =>
                      child.external ? (
                        <a key={child.label} href={child.path} target="_blank" rel="noreferrer">{child.label}</a>
                      ) : (
                        <Link key={child.label} to={child.path}>{child.label}</Link>
                      )
                    )}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.path!}
                  className={location.pathname === item.path ? 'active' : ''}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* CTA & mobile */}
          <div className="nav-cta">
            <Link to="/inscricao" className="btn btn-primary btn-sm">Inscreva-se</Link>
            <div className="nav-mobile-flags">
              <a href="/en"><img className="flag-icon" src="/img/flag-usa-color.png" alt="English" /></a>
              <a href="/"><img className="flag-icon" src="/img/flag-brazil-color.png" alt="Português" /></a>
            </div>
            <button className={`hamburger${menuOpen ? ' open' : ''}`} onClick={() => setMenuOpen(v => !v)} aria-label="Menu">
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile Nav ── */}
      <div className={`mobile-nav${menuOpen ? ' open' : ''}`}>
        {navItems.map((item) =>
          item.children ? (
            <div key={item.label}>
              <div className="mob-dd-header" onClick={() => setOpenMobSub(openMobSub === item.label ? null : item.label)}>
                {item.label} <ChevronDown size={14} style={{ float: 'right', marginTop: 3 }} />
              </div>
              {openMobSub === item.label && (
                <div className="mob-sub">
                  {item.children.map((child) =>
                    child.external ? (
                      <a key={child.label} href={child.path} target="_blank" rel="noreferrer">{child.label}</a>
                    ) : (
                      <Link key={child.label} to={child.path}>{child.label}</Link>
                    )
                  )}
                </div>
              )}
            </div>
          ) : (
            <Link key={item.label} to={item.path!}>{item.label}</Link>
          )
        )}
        <div className="mobile-nav-footer">
          <Link to="/inscricao" className="btn btn-primary">Inscreva-se</Link>
        </div>
      </div>
    </>
  );
}
