import React, { useRef } from 'react';
import PageHero from '../components/PageHero';
import DistrictMap from '../components/DistrictMap';

const DistritoPage: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleRegionClick = (regionId: string) => {
    if (iframeRef.current) {
      // Update iframe source to jump to the anchor
      // Note: We assume the public folder has the legacy files or we serve them.
      // For now, using the path relative to the public root.
      iframeRef.current.src = `/pages-br/d4510-clubes.html#${regionId}`;
    }
  };

  return (
    <div className="distrito-page">
      <PageHero 
        title="O Distrito 4510" 
        breadcrumbActive="Distrito"
      />

      {/* Main Content */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-12">
              <div className="section-title text-center mb-5">
                <h5 className="text-primary text-uppercase" style={{ letterSpacing: '5px' }}>Nosso Distrito</h5>
                <h1 className="mb-4">O distrito 4510 está localizado a sudoeste do Estado de São Paulo</h1>
                <p className="mb-0">
                  Estamos em 37 cidades, organizados em 74 clubes, compostos por 1509 rotarianos, 
                  também 26 Rotaract Clubs, compostos por 267 jovens profissionais de até 30 anos, 
                  29 Interact Clubs, formados por 361 ativos jovens de até 18 anos.
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Area */}
          <div className="row g-4">
            {/* Map Section */}
            <div className="col-lg-8">
              <div className="bg-white rounded p-4 shadow-sm h-100">
                <h4 className="mb-4 text-center">Mapa Interativo</h4>
                <div style={{ maxWidth: '100%', overflow: 'hidden' }}>
                  <DistrictMap onRegionClick={handleRegionClick} />
                </div>
              </div>
            </div>

            {/* Club Info & Legend Section */}
            <div className="col-lg-4">
              <div className="d-flex flex-column gap-4 h-100">
                {/* Iframe Container */}
                <div className="map-club shadow-sm rounded overflow-hidden" style={{ height: '400px', backgroundColor: '#fbeed9', border: '1px solid #dee2e6' }}>
                  <iframe 
                    ref={iframeRef}
                    src="/pages-br/d4510-clubes.html" 
                    name="club-certified"
                    style={{ width: '100%', height: '100%', border: 'none' }}
                    title="Detalhes do Clube"
                  ></iframe>
                </div>

                {/* Legend Table */}
                <div className="legenda bg-white p-3 shadow-sm rounded border">
                  <table className="table table-bordered mb-0" style={{ fontSize: '0.85rem' }}>
                    <thead style={{ backgroundColor: '#f7a81b' }}>
                      <tr>
                        <th colSpan={2} className="text-center py-2">Legenda do Mapa</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{ width: '50px', verticalAlign: 'middle' }}>
                          <div style={{ width: '30px', height: '20px', backgroundColor: '#f7a81b', margin: 'auto', border: '1px solid #666' }}></div>
                        </td>
                        <td className="status py-2">Cidades sem Rotary Clubes</td>
                      </tr>
                      <tr>
                        <td style={{ verticalAlign: 'middle' }}>
                          <div style={{ width: '30px', height: '20px', backgroundColor: '#b9d9eb', margin: 'auto', border: '1px solid #666' }}></div>
                        </td>
                        <td className="status py-2">Cidades sem clubes certificados</td>
                      </tr>
                      <tr>
                        <td style={{ verticalAlign: 'middle' }}>
                          <div style={{ width: '30px', height: '20px', backgroundColor: '#0067c8', margin: 'auto', border: '1px solid #666' }}></div>
                        </td>
                        <td className="status py-2">Cidades com clubes certificados</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Vision, Mission, Values */}
          <div className="row g-4 mt-5">
            <div className="col-md-4">
              <div className="vision-card p-4 rounded shadow-sm text-center h-100" style={{ borderTop: '5px solid #0067c8' }}>
                <div className="icon-box mb-3" style={{ color: '#0067c8' }}>
                  <i className="fas fa-eye fa-3x"></i>
                </div>
                <h3 style={{ color: '#0067c8' }}>Visão</h3>
                <p className="text-muted">Ser a melhor organização de intercâmbio de jovens do mundo, promovendo a paz e a compreensão mundial através da amizade e do serviço.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="mission-card p-4 rounded shadow-sm text-center h-100" style={{ borderTop: '5px solid #f7a81b' }}>
                <div className="icon-box mb-3" style={{ color: '#f7a81b' }}>
                  <i className="fas fa-bullseye fa-3x"></i>
                </div>
                <h3 style={{ color: '#f7a81b' }}>Missão</h3>
                <p className="text-muted">Proporcionar aos jovens a oportunidade de conhecer novas culturas, aprender novos idiomas e desenvolver liderança através do serviço humanitário.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="values-card p-4 rounded shadow-sm text-center h-100" style={{ borderTop: '5px solid #b9d9eb' }}>
                <div className="icon-box mb-3" style={{ color: '#b9d9eb' }}>
                  <i className="fas fa-heart fa-3x"></i>
                </div>
                <h3 style={{ color: '#b9d9eb' }}>Valores</h3>
                <ul className="list-unstyled text-muted">
                  <li>Integridade • Diversidade</li>
                  <li>Serviço • Liderança</li>
                  <li>Companheirismo</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DistritoPage;
