import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import './layout.css';

const menuLinks = [
  { label: 'Home', path: '/' },
  { label: 'Nossa História', path: '/historia' },
  { label: 'Programas', path: '/programas' },
  { label: 'Famílias', path: '/familias' },
  { label: 'Calendário', path: '/eventos' },
  { label: 'Blog', path: '/blog' },
  { label: 'Galeria', path: '/galeria' },
  { label: 'Contato', path: '/contato' },
];

const galleryImages = [1, 2, 3, 4, 5, 6];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">

          {/* Newsletter */}
          <div className="footer-col">
            <h4>Fique por dentro</h4>
            <p>Cadastrando-se, você consente com o uso de dados pelo YEP D4510 para comunicações. Garantimos segurança e confidencialidade conforme LGPD.</p>
            <div className="newsletter-form">
              <input className="newsletter-input" type="email" placeholder="Seu e-mail" />
              <button className="newsletter-btn">Cadastrar</button>
            </div>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4>Contato</h4>
            <address>
              <p>Rua Osvaldo Cruz, 637</p>
              <p>Assis-SP — 19800-081</p>
              <p>Seg – Sex · 9:00h – 17:00h</p>
              <p style={{ marginTop: '0.8rem' }}>
                <strong style={{ color: 'rgba(255,255,255,.8)' }}>E-mail: </strong>
                <a href="mailto:ryep4510@gmail.com">ryep4510@gmail.com</a>
              </p>
              <p>
                <strong style={{ color: 'rgba(255,255,255,.8)' }}>Fone: </strong>
                <a href="https://wa.me/5518996527252">+55 (18) 99652-7252</a>
              </p>
            </address>
          </div>

          {/* Menu */}
          <div className="footer-col">
            <h4>Menu</h4>
            <nav className="footer-menu">
              {menuLinks.map(l => (
                <Link key={l.label} to={l.path}>{l.label}</Link>
              ))}
            </nav>
          </div>

          {/* Gallery */}
          <div className="footer-col">
            <h4>Galeria</h4>
            <div className="footer-gallery">
              {galleryImages.map(n => (
                <a
                  key={n}
                  className="footer-gallery-item"
                  href={`/img/gallery-footer-${n}.jpg`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={`/img/gallery-footer-${n}.jpg`} alt={`Galeria ${n}`} />
                  <div className="overlay"><Search size={18} /></div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-inner">
            <span>© {new Date().getFullYear()} RYE District 4510 · Todos os direitos reservados.</span>
            <div className="footer-socials">
              <a href="https://www.facebook.com/yep4510" target="_blank" rel="noreferrer"><FaFacebook size={15} /></a>
              <a href="https://www.instagram.com/yep4510/" target="_blank" rel="noreferrer"><FaInstagram size={15} /></a>
              <a href="https://www.youtube.com/channel/UCQScU_raNswx3TBhQHRmF7g" target="_blank" rel="noreferrer"><FaYoutube size={15} /></a>
              <a href="https://wa.me/5518996527252" target="_blank" rel="noreferrer"><FaWhatsapp size={15} /></a>
            </div>
            <span>Desenhado por <a href="https://ipositivo.com.br" target="_blank" rel="noreferrer" style={{ color: 'var(--accent)' }}>Impacto Positivo Ltda.</a></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
