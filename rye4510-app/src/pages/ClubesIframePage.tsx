import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { districtClubs } from '../data/districtClubsData';

const ClubesIframePage: React.FC = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
          element.classList.add('highlight-section');
          setTimeout(() => element.classList.remove('highlight-section'), 2000);
        }, 100);
      }
    }
  }, [hash]);

  return (
    <div className="clubes-iframe-container bg-white">
      <div className="p-3">
        <h4 className="text-primary fw-bold mb-4 pb-2 border-bottom">Clubes Certificados</h4>
        
        {districtClubs.map((city) => (
          <div key={city.regionId} id={city.regionId} className="city-entry mb-5">
            <div className="d-flex align-items-center mb-3 bg-light p-2 rounded-2">
              <i className="fas fa-map-marker-alt text-primary me-2"></i>
              <h5 className="mb-0 fw-bold">{city.cityName}</h5>
            </div>
            
            <div className="club-list">
              {city.clubs.map((club, idx) => (
                <div key={idx} className="club-item mb-4 ps-3 border-start border-3 border-primary-light">
                  <h6 className="fw-bold text-dark mb-1">{club.name}</h6>
                  <p className="small text-muted mb-2">{club.representative}</p>
                  
                  <div className="d-flex flex-wrap gap-2">
                    <a 
                      href={`mailto:${club.email}`} 
                      className="btn btn-link btn-sm p-0 text-decoration-none d-flex align-items-center gap-1"
                    >
                      <i className="fas fa-envelope text-primary"></i>
                      <span>E-mail</span>
                    </a>
                    <span className="text-muted opacity-25">|</span>
                    <a 
                      href={`https://wa.me/${club.whatsapp}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-link btn-sm p-0 text-decoration-none d-flex align-items-center gap-1"
                    >
                      <i className="fab fa-whatsapp text-success"></i>
                      <span>{club.whatsappDisplay}</span>
                    </a>
                  </div>
                </div>
              ))}
              {city.clubs.length === 0 && (
                <p className="small text-muted italic ps-3">Nenhum clube certificado nesta cidade.</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        body {
          background-color: transparent !important;
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }
        .city-entry {
          scroll-margin-top: 10px;
          transition: background-color 0.3s ease;
        }
        .highlight-section {
          background-color: rgba(0, 103, 200, 0.05);
          border-radius: 8px;
          animation: highlight-pulse 2s ease-out;
        }
        @keyframes highlight-pulse {
          0% { background-color: rgba(0, 103, 200, 0.2); }
          100% { background-color: rgba(0, 103, 200, 0.05); }
        }
        .border-primary-light {
          border-color: rgba(0, 103, 200, 0.2) !important;
        }
        .btn-link {
          font-size: 0.85rem;
          color: var(--text-main);
        }
        .btn-link:hover {
          color: var(--primary);
        }
      `}</style>
    </div>
  );
};

export default ClubesIframePage;
