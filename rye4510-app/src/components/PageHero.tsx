import { Link } from 'react-router-dom';

interface Crumb { label: string; path?: string; }

interface Props {
  title: string;
  subtitle?: string;
  breadcrumbs?: Crumb[];
  breadcrumbActive?: string;
}

export default function PageHero({ title, subtitle, breadcrumbs, breadcrumbActive }: Props) {
  // Build breadcrumbs array if breadcrumbActive is provided but breadcrumbs isn't
  const finalCrumbs = breadcrumbs || [
    { label: 'Home', path: '/' },
    ...(breadcrumbActive ? [{ label: breadcrumbActive }] : [])
  ];

  return (
    <div className="page-hero">
      <div className="container">
        <div className="page-hero-inner">
          <h1>{title}</h1>
          {subtitle && <p>{subtitle}</p>}
          <nav className="breadcrumb">
            {finalCrumbs.map((c, i) => (
              <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '.4rem' }}>
                {i > 0 && <span className="breadcrumb-sep">›</span>}
                {c.path ? <Link to={c.path}>{c.label}</Link> : <span style={{ color: 'rgba(255,255,255,.8)' }}>{c.label}</span>}
              </span>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
