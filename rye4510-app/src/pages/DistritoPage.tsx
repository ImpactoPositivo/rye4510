import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import DistrictMap from '../components/DistrictMap';

const DistritoPage: React.FC = () => {
  const [selectedRegionId, setSelectedRegionId] = useState<string | null>(null);

  const handleRegionClick = (regionId: string) => {
    setSelectedRegionId(regionId);
    // Smooth scroll to iframe on mobile
    if (window.innerWidth < 992) {
      const iframe = document.getElementById('club-details-iframe');
      if (iframe) iframe.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="distrito-page">
      <PageHero 
        title="O Distrito 4510" 
        breadcrumbActive="Distrito"
      />

      <div className="container-fluid py-5 bg-light">
        <div className="container py-3">
          <div className="text-center mx-auto pb-3" style={{ maxWidth: '900px' }}>
            <h5 className="text-uppercase text-primary fw-bold mb-3">Nossa Localização</h5>
            <h1 className="display-5 mb-4">O distrito 4510 está localizado a sudoeste do Estado de São Paulo</h1>
            <p className="lead mb-0">
              Estamos em 37 cidades, organizados em 74 clubes, compostos por 1509 rotarianos, também 26 Rotaract Clubs, compostos por 267 jovens profissionais de até 30 anos, 29 Interact Clubs, formados por 361 ativos jovens de até 18 anos.
            </p>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row g-4">
          {/* Map Column */}
          <div className="col-lg-7">
            <div className="map-container-box">
              <DistrictMap onRegionClick={handleRegionClick} />
              
              <div className="map-legend-box mt-4">
                <h5 className="legend-title">Legenda do Mapa</h5>
                <div className="legend-items">
                  <div className="legend-item">
                    <span className="dot" style={{ backgroundColor: '#0067c8' }}></span>
                    <span className="label">Cidades com clubes certificados para o Programa de Intercâmbio</span>
                  </div>
                  <div className="legend-item">
                    <span className="dot" style={{ backgroundColor: '#f7a81b' }}></span>
                    <span className="label">Cidades com clubes não certificados</span>
                  </div>
                  <div className="legend-item">
                    <span className="dot" style={{ backgroundColor: '#b9d9eb' }}></span>
                    <span className="label">Cidades sem Rotary clubs, mas dentro do distrito 4510</span>
                  </div>
                  <div className="legend-item">
                    <span className="dot" style={{ backgroundColor: '#a7aca2' }}></span>
                    <span className="label">Área do Estado de São Paulo fora do Distrito 4510</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Details Column (Iframe) */}
          <div className="col-lg-5">
            <div className="club-details-box h-100">
              <div className="iframe-wrapper">
                <iframe 
                  id="club-details-iframe"
                  src={`/iframe/clubes${selectedRegionId ? '#' + selectedRegionId : ''}`}
                  title="Responsáveis pelos Clubes"
                  width="100%"
                  height="650px"
                  style={{ border: 'none', borderRadius: 'var(--radius-lg)', background: '#fff' }}
                ></iframe>
              </div>
              {!selectedRegionId && (
                <div className="text-center mt-3 p-3 bg-white rounded-3 shadow-sm border border-light">
                  <p className="text-muted small mb-0">
                    <i className="fas fa-info-circle text-primary me-2"></i>
                    Clique em uma cidade no mapa para ver os clubes e responsáveis.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DistritoPage;
