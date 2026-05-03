import React from 'react';
import PageHero from '../components/PageHero';
import DistrictMap from '../components/DistrictMap';
import { Target, MapPin, ShieldCheck } from 'lucide-react';

const DistritoPage: React.FC = () => {
  return (
    <div className="distrito-page">
      <PageHero 
        title="Distrito 4510" 
        subtitle="Conheça a nossa região, nossa missão e os clubes que compõem o nosso distrito."
        breadcrumbActive="Distrito 4510"
      />

      {/* Intro Section */}
      <section className="section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="display-5 fw-bold mb-4">Nossa Visão</h2>
              <p className="lead mb-4">
                O Distrito 4510 do Rotary International abrange uma vasta região do estado de São Paulo, 
                unindo líderes para promover a paz, combater doenças e apoiar a educação.
              </p>
              <div className="d-flex mb-4">
                <div className="me-3 text-primary">
                  <Target size={32} />
                </div>
                <div>
                  <h4>Missão</h4>
                  <p className="text-muted">Servir ao próximo, difundir a integridade e promover a boa vontade, paz e compreensão mundial.</p>
                </div>
              </div>
              <div className="d-flex mb-4">
                <div className="me-3 text-primary">
                  <ShieldCheck size={32} />
                </div>
                <div>
                  <h4>Valores</h4>
                  <p className="text-muted">Companheirismo, Integridade, Diversidade, Serviço e Liderança.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="rounded-4 overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=800" 
                  alt="Rotary District" 
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <div className="text-center mb-5">
            <div className="d-inline-flex align-items-center justify-content-center bg-primary text-white rounded-pill px-3 py-1 mb-3">
              <MapPin size={16} className="me-2" />
              <span className="small fw-bold">Abrangência Geográfica</span>
            </div>
            <h2 className="fw-bold">Nossos Clubes</h2>
            <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
              Explore o mapa abaixo para conhecer as cidades e os Rotary Clubs que fazem parte do Distrito 4510.
            </p>
          </div>
          
          <DistrictMap />
        </div>
      </section>

      {/* Clubs List / Certification CTA */}
      <section className="section">
        <div className="container">
          <div className="card bg-dark text-white p-5 rounded-4 border-0 overflow-hidden position-relative">
            <div className="position-relative z-1">
              <div className="row align-items-center">
                <div className="col-lg-8">
                  <h3 className="display-6 fw-bold mb-3">Certificação de Clubes</h3>
                  <p className="lead mb-0 opacity-75">
                    Para participar do Programa de Intercâmbio de Jovens, os clubes devem estar devidamente certificados pelo distrito.
                  </p>
                </div>
                <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
                  <a href="/contato" className="btn btn-primary btn-lg px-4 py-3 rounded-pill fw-bold">Consultar Certificação</a>
                </div>
              </div>
            </div>
            {/* Decoration */}
            <div className="position-absolute end-0 bottom-0 opacity-10" style={{ transform: 'translate(20%, 20%)' }}>
              <Target size={300} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DistritoPage;
