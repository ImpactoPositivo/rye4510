import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { districtClubs } from '../data/districtClubsData';

const ClubesPage: React.FC = () => {
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
    <div className="clubes-page bg-light min-vh-100">
      <PageHero 
        title="Clubes do Distrito 4510" 
        subtitle="Encontre o Rotary Club mais próximo de você e entre em contato com os responsáveis."
        breadcrumbActive="Nossos Clubes" 
      />

      <div className="container py-5">
        <div className="row g-5">
          {districtClubs.map((city) => (
            <div key={city.regionId} id={city.regionId} className="col-12 city-section mb-4">
              <div className="bg-white p-4 p-md-5 rounded-4 shadow-sm border-start border-primary border-5 position-relative overflow-hidden">
                <div className="position-relative z-2">
                  <div className="d-flex align-items-center mb-4">
                    <div className="bg-primary-soft text-primary p-3 rounded-3 me-3">
                       <i className="fas fa-city fs-3"></i>
                    </div>
                    <h2 className="display-6 fw-bold mb-0 text-dark">{city.cityName}</h2>
                  </div>
                  
                  <div className="row g-4">
                    {city.clubs.map((club, idx) => (
                      <div key={idx} className="col-md-6 col-lg-4">
                        <div className="card h-100 border-0 shadow-sm hover-up bg-light bg-opacity-50">
                          <div className="card-body p-4">
                            <h3 className="h5 card-title fw-bold text-dark mb-3 border-bottom pb-2">{club.name}</h3>
                            <div className="mb-4">
                              <span className="text-uppercase small fw-bold text-primary ls-wide d-block mb-1">Responsável</span>
                              <p className="card-text text-muted fs-6">{club.representative}</p>
                            </div>
                            <div className="d-grid gap-2 mt-auto">
                              <a 
                                href={`mailto:${club.email}`} 
                                className="btn btn-outline-primary btn-sm d-flex align-items-center justify-content-center gap-2"
                              >
                                <i className="fas fa-envelope"></i> Enviar E-mail
                              </a>
                              <a 
                                href={`https://wa.me/${club.whatsapp}`} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="btn btn-success btn-sm d-flex align-items-center justify-content-center gap-2 text-white"
                              >
                                <i className="fab fa-whatsapp fs-5"></i> {club.whatsappDisplay}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Decoration */}
                <div className="position-absolute end-0 top-0 opacity-05" style={{ transform: 'translate(10%, -10%) rotate(-15deg)' }}>
                   <i className="fas fa-city" style={{ fontSize: '200px' }}></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .city-section {
          scroll-margin-top: 120px;
          transition: all 0.5s ease;
        }
        .highlight-section > div {
          box-shadow: 0 0 0 4px var(--primary) !important;
          background-color: var(--secondary) !important;
        }
        .opacity-05 { opacity: 0.05; }
        .hover-up { transition: all 0.3s ease; }
        .hover-up:hover { transform: translateY(-5px); box-shadow: 0 10px 25px rgba(0,0,0,0.1) !important; }
      `}</style>
    </div>
  );
};

export default ClubesPage;
